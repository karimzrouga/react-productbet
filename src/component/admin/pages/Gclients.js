import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import "../../../Styles/layout.css";
import "../../../Styles/font.css";
import React, { useState, useEffect } from "react";
import {
  GetAllClients,
  UpdateClient,
  DeleteClient,
} from "../../../services/Client_services";
import {Client} from "../../../Constantes/Client";
import "font-awesome/css/font-awesome.min.css";
import Clientedit from "../../forms/Client/clientedit";

export default function Gclient() {
  const [state, setstate] = useState([]);
  /***************************************** */
  const [clienti, setclient] = useState(Client);
  /************************************/
  const [show, setshow] = useState(false);
  var delay = "600";
  let getClient = () => {
    GetAllClients().then((response) => {
      setstate(response.data);
    });
  };
  let cancel=()=>{
    setshow(false)
  }
  useEffect(() => {
    const id = setInterval(getClient, delay);
    return () => clearInterval(id);
  });
  
  let handleChange=(event)=> {
    let values=event.target.value;
    setclient({...clienti,[event.target.name]: values});
    
  }
  /*useEffect(() => {
    console.log({...clienti})
  },[clienti]);*/


  let handleSubmit=()=> {
   UpdateClient(clienti).then(response => {
    //console.log(response.data);
    })
    setshow(false);
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
      {show ? <Clientedit upclient={clienti} cancel={cancel}   handleChange={handleChange} handleSubmit={handleSubmit} /> : null}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h3>List Clients</h3>
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
                        <span className="ml-2">UserName</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">FullName</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-2">Email</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-4">Phone</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-4">Adresse</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-4">Wallet</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-4">Role</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-4">Action</span>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((client,i) => {
                      return (
                        <tr className="border-bottom" key={client.idclient}>
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
                              <img
                                  src={"/assets/"+client.image}
                                alt="logo"
                                width="40"
                                className="rounded-circle"
                              ></img>
                              <div className="d-flex flex-column ml-2">
                                {" "}
                                <small className="text-muted">
                                  {client.username}
                                </small>{" "}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {client.fullname}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{client.email}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{client.phone}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{client.adresse}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{client.solde}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{client.role}</span>{" "}
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
                                    setshow(true);
                                    setclient(client);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                                    DeleteClient(client.idclient);
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
