import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import "../../../Styles/layout.css";
import "../../../Styles/font.css";
import React, { useState, useEffect } from "react";
import {
  AddEvent,
  AddEvents,
  DeleteEvent,
  GetAllEvent,
  UpdateEvent,
} from "../../../services/Event_services";
import "font-awesome/css/font-awesome.min.css";
import { Event } from "../../../Constantes/Event";
import EventAdd from "../../forms/event/EventAdd";
import Eventedit from "../../forms/event/Eventedit";
import { GetAllBet } from "../../../services/Bet_services";
export default function GEvent({ onFileUpload, onFileChange, File, filename }) {
  const [state, setstate] = useState([]);
  const [editform, seteditform] = useState(false);
  const [addform, setaddform] = useState(false);
  const [Eventi, setEvent] = useState(Event);
  const [nEvent, newEvent] = useState(Event);
  const [bets, setbets] = useState([]);
  const [checked, setChecked] = useState([]);
  let updatedList = [];

  useEffect(() => {
    const name = Object.values(filename).toString();
    if (editform) {
      setEvent({ ...Eventi, image: name });
    }
    if (addform) {
      newEvent({ ...nEvent, image: name });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filename]);

  let cancel = () => {
    setaddform(false);
    seteditform(false);
  };

  let handleSubmit = () => {
    if (File) {
      onFileUpload();

      if (editform) {
        if (Object(checked).length === 0) {
          UpdateEvent(Eventi).then((response) => {});
        } else {
          let ids = [...checked].join(",");
          AddEvents(Eventi, ids);
          setChecked([]);
        }
      }

      seteditform(false);
    }

    if (addform) {
      if (Object(checked).length === 0) {
        AddEvent(nEvent);
      } else {
        let ids = [...checked].join(",");
        AddEvents(nEvent, ids);
        setChecked([]);
      }
      setaddform(false);
    }
  };
  let getbets = () => {
    GetAllBet().then((response) => {
      setbets(response.data);
    });
  };
  let handleChange = (event) => {
    let values = event.target.value;
    if (event.target.name === "listB") {
      updatedList = new Set([...checked, values]);

      setChecked(updatedList);
    }
    if (editform) {
      setEvent({ ...Eventi, [event.target.name]: values });
    }
    if (addform) {
      newEvent({ ...nEvent, [event.target.name]: values });
    }
  };

  let getEvent = () => {
    GetAllEvent().then((response) => {
      setstate(response.data);
    });
  };
  useEffect(() => {
    const id = setInterval(getEvent, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      {addform ? (
        <EventAdd
          bets={bets}
          cancel={cancel}
          nEvent={nEvent}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onFileChange={onFileChange}
        />
      ) : null}
      {editform ? (
        <Eventedit
          bets={bets}
          cancel={cancel}
          upEvent={Eventi}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onFileChange={onFileChange}
        />
      ) : null}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h3>List Events</h3>
              <span
                className="tra"
                onClick={() => {
                  getbets();
                  setaddform(true);
                  seteditform(false);
                }}
              >
                <i className="fa fa-plus-circle fa-stack-2x "></i>
              </span>
              <div className="container mt-5">
                <table className="table table-borderless table-responsive card-1 p-4">
                  <thead>
                    <tr className="border-bottom">
                      <th>
                        {" "}
                        <span className="ml-2">ID</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">Name</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">Image</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">Description</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">createdAt</span>{" "}
                      </th>

                      <th>
                        {" "}
                        <span className="ml-2">Action</span>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((Event,i) => {
                      return (
                        <tr className="border-bottom" key={Event.idEvent}>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="d-block font-weight-bold">
                                {i}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-row align-items-center mb-2">
                              {" "}
                              <div className="d-flex flex-column ml-2">
                                {" "}
                                <small className="text-muted">
                                  {Event.name}
                                </small>{" "}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-row align-items-center mb-2">
                              {" "}
                              <div className="d-flex flex-column ml-2">
                                <img
                                  src={"/assets/" + Event.image}
                                  alt="logo"
                                  width="120"
                                  className="rounded-circle"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {Event.description}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {Event.createdAt}
                              </span>{" "}
                            </div>
                          </td>

                          <td>
                            <ul className="list-inline m-0">
                              <li className="list-inline-item">
                                <button
                                  className="btn btn-success btn-sm rounded-0"
                                  type="button"
                                  data-placement="top"
                                  title="Edit"
                                  onClick={() => {
                                    setaddform(false);
                                    seteditform(true);
                                    setEvent(Event);
                                    getbets();
                                    window.scrollTo({
                                      top: 0,
                                      behavior: "smooth",
                                    });
                                  }}
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                              </li>
                              <li className="list-inline-item">
                                <button
                                  className="btn btn-danger btn-sm rounded-0"
                                  type="button"
                                  title="Delete"
                                  onClick={() => {
                                    DeleteEvent(Event.idEvent);
                                  }}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
