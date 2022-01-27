import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import "../../../Styles/layout.css";
import "../../../Styles/font.css";
import React, { useState, useEffect } from "react";
import {
  GetAllcontacts,
  Deletecontact,
} from "../../../services/Contact_services";

import "font-awesome/css/font-awesome.min.css";

export default function Gcontact() {
  const [state, setstate] = useState([]);
  /***************************************** */

  var delay = "600";
  let getcontact = () => {
    GetAllcontacts().then((response) => {
      setstate(response.data);
    });
  };

  useEffect(() => {
    const id = setInterval(getcontact, delay);
    return () => clearInterval(id);
  });

  
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h3>List contacts</h3>
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
                        <span className="ml-4">Contact</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-4">Inquiretype</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-4">Message</span>{" "}
                      </th>
                      <th>
                        {" "}
                        <span className="ml-4">SendAt</span>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((contact, i) => {
                      return (
                        <tr className="border-bottom" key={contact.idc}>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="d-block font-weight-bold">
                                {i}
                              </span>{" "}
                            </div>
                          </td>

                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {contact.fullname}
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{contact.email}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{contact.phone}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{contact.ct}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{contact.inquiretype}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{contact.message}</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-column">
                              {" "}
                              <span>{contact.createdAt}</span>{" "}
                            </div>
                          </td>

                          <td>
                            <ul className="list-inline m-0">
                              <li className="list-inline-item">
                                <button
                                  className="btn btn-danger btn-sm rounded-0"
                                  type="button"
                                  title="Delete"
                                  onClick={() => {
                                    Deletecontact(contact.idc);
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
