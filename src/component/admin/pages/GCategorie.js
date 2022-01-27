import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import "../../../Styles/layout.css";
import "../../../Styles/font.css";

import React, { useState, useEffect } from "react";
import {
  GetAllCategories,
  UpdateCategorie,
  DeleteCategorie,
  AddCategorie,
} from "../../../services/Categorie_services";
import "font-awesome/css/font-awesome.min.css";
import { Categories } from "../../../Constantes/Categorie";
import Categoriedit from "../../forms/Categ/categorieEdit";
import CategorieAdd from "../../forms/Categ/categorieAdd";
export default function GCategorie({
  onFileUpload,
  onFileChange,
  File,
  filename,
}) {
  const [state, setstate] = useState([]);
  const [categoriei, setcatgorie] = useState(Categories);
  const [ncategorie, newcatgorie] = useState(Categories);

  /************************************/
  const [editform, seteditform] = useState(false);
  const [addform, setaddform] = useState(false);
  useEffect(() => {
    const name = Object.values(filename).toString();
    if (addform) {
      newcatgorie({ ...ncategorie, image: name });
    }
    if (editform)
    {
      setcatgorie({ ...categoriei, image: name });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filename]);
  let getcategorie = () => {
    GetAllCategories().then((response) => {
      setstate(response.data);
    });
  };
  useEffect(() => {
    const id = setInterval(getcategorie, 600);
    return () => clearInterval(id);
  });
  let cancel = () => {
    setaddform(false);
    seteditform(false);
  };

  let handleSubmit = () => {
    if (File) {
      onFileUpload();
    }
    if (editform) {
      UpdateCategorie(categoriei).then((response) => {});
      seteditform(false);
    }

    if (addform) {
      // console.log(ncategorie);
      AddCategorie(ncategorie);
      setaddform(false);
    }
  };
  let handleChange = (event) => {
    let values = event.target.value;
    if (editform) {
      setcatgorie({ ...categoriei, [event.target.name]: values });
    }

    if (addform) {
      newcatgorie({ ...ncategorie, [event.target.name]: values });
    }
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      {editform ? (
        <Categoriedit
          ncategorie={categoriei}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cancel={cancel}
          onFileChange={onFileChange}
        />
      ) : null}
      {addform ? (
        <CategorieAdd
          upcategorie={ncategorie}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cancel={cancel}
          onFileChange={onFileChange}
        />
      ) : null}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h3>List Categories</h3>

              <span
                className="tra"
                onClick={() => {
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
                        <span className="ml-4">Action</span>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((categ,i) => {
                      return (
                        <tr className="border-bottom" key={categ.idCategorie}>
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
                                  {categ.name}
                                </small>{" "}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="p-2 d-flex flex-row align-items-center mb-2">
                              {" "}
                              <div className="d-flex flex-column ml-2">
                                <img
                                  src={"/assets/" + categ.image}
                                  alt="logo"
                                  width="100"
                                  className="rounded-circle"
                                />
                              </div>
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
                                    setcatgorie(categ);
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
                                    DeleteCategorie(categ.idCategorie);
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
