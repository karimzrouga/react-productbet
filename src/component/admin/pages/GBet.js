import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import "../../../Styles/layout.css";
import "../../../Styles/font.css";
import React, { useState, useEffect } from "react";
import {
  AddBets,
  AddBet,
  DeleteBet,
  GetAllBet,
  UpdateBet,
} from "../../../services/Bet_services";
import "font-awesome/css/font-awesome.min.css";
import BetAdd from "../../forms/Bet/BetAdd";
import Betedit from "../../forms/Bet/Betedit";
import { Bet } from "../../../Constantes/Bet";
import { GetAllArticles } from "../../../services/Article_services";
export default function GBet({ onFileUpload, onFileChange, File, filename }) {
  const [state, setstate] = useState([]);
  const [editform, seteditform] = useState(false);
  const [addform, setaddform] = useState(false);
  const [Beti, setBet] = useState(Bet);
  const [nBet, newBet] = useState(Bet);
  const [articles, setarticles] = useState([]);
  const [checked, setChecked] = useState([]);
  let updatedList = [];
  useEffect(() => {
    const name = Object.values(filename).toString();
    if (editform) {
      setBet({ ...Beti, image: name });
    }
    if (addform) {
      newBet({ ...nBet, image: name });
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
    }
    if (editform) {
      if (Object(checked).length === 0) {
        UpdateBet(Beti).then((response) => {});
      } else {
        let ids = [...checked].join(",");
        AddBets(Beti, ids);
        setChecked([]);
      }
      seteditform(false);
    }

    if (addform) {
      nBet.finalprix = nBet.initialprix;

      if (Object(checked).length === 0) {
        AddBet(nBet);
      } else {
        let ids = [...checked].join(",");
        AddBets(nBet, ids);
        setChecked([]);
      }
      setaddform(false);
    }
  };

  let handleChange = (event) => {
    let values = event.target.value;
    if (event.target.name === "listArt") {
      updatedList = new Set([...checked, values]);
      setChecked(updatedList);
    }
    if (editform) {
      setBet({ ...Beti, [event.target.name]: values });
    }
    if (addform) {
      newBet({ ...nBet, [event.target.name]: values });
    }
  };

  let getbet = () => {
    GetAllBet().then((response) => {
      setstate(response.data);
    });
  };
  let getarticles = () => {
    GetAllArticles().then((response) => {
      setarticles(response.data);
    });
  };
  useEffect(() => {
    const id = setInterval(getbet, 600);
    return () => clearInterval(id);
  });

  return (
    <div>
      <Navbar />
      <Sidebar />
      {addform ? (
        <BetAdd
          articles={articles}
          cancel={cancel}
          nBet={nBet}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onFileChange={onFileChange}
        />
      ) : null}
      {editform ? (
        <Betedit
          articles={articles}
          cancel={cancel}
          upBet={Beti}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onFileChange={onFileChange}
        />
      ) : null}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h3>List Bets</h3>
              <span
                className="tra"
                onClick={() => {
                  getarticles();
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
                        <span className="ml-2">Initialprice</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">Finalprice</span>{" "}
                      </th>

                      <th>
                        {" "}
                        <span className="ml-2">State</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">date</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">Action</span>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((bet,i) => {
                      return (
                        <tr className="border-bottom" key={bet.idBet}>
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
                                  {bet.name}
                                </small>{" "}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-row align-items-center mb-2">
                              {" "}
                              <div className="d-flex flex-column ml-2">
                                <img
                                  src={"/assets/" + bet.image}
                                  alt="logo"
                                  width="100%"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {bet.description}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {bet.initialprix}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {bet.finalprix}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {bet.state}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                createdAt: {bet.createdAt}
                                <br />
                                Lastdate: {bet.lastdate}
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
                                    setBet(bet);
                                    getarticles();
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
                                    DeleteBet(bet.idBet);
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
