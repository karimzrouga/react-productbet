import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import "../../../Styles/layout.css";
import "../../../Styles/font.css";
import React, { useState, useEffect } from "react";
import {
  AddArticle,
  DeleteArticle,
  GetAllArticles,
  UpdateArticle,
} from "../../../services/Article_services";
import "font-awesome/css/font-awesome.min.css";
import Articledit from "../../forms/Article/ArticleEdit";
import { Article } from "../../../Constantes/Article";
import ArticleAdd from "../../forms/Article/ArticleAdd";
import { GetAllCategories } from "../../../services/Categorie_services";
export default function GArticle({
  onFileUpload,
  onFileChange,
  File,
  filename,
}) {
  const [state, setstate] = useState([]);
  const [Gstate, setGstate] = useState([]);
  const [editform, seteditform] = useState(false);
  const [addform, setaddform] = useState(false);
  const [Articlei, setArticle] = useState(Article);
  const [nArticle, newArticle] = useState(Article);
  useEffect(() => {
    const name = Object.values(filename).toString();
    if (editform)
    {
      setArticle({ ...Articlei, image: name });
    }
    if (addform)
    {
      newArticle({ ...nArticle, image: name });
    }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filename]);

  let cancel = () => {
    setaddform(false);
    seteditform(false);
  };

  let getcategorie = () => {
    GetAllCategories().then((response) => {
      setGstate(response.data);
    });
  };
  let handleSubmit = () => {
    if (File) {
      onFileUpload();
    }
    if (editform) {
      UpdateArticle(Articlei,Articlei.categorie).then((response) => {});
      seteditform(false);
    }

    if (addform) {
      AddArticle(nArticle, nArticle.categorie);
      setaddform(false);
    }
  };

  let handleChange = (event) => {
    let values = event.target.value;
    if (editform) {
      setArticle({ ...Articlei, [event.target.name]: values });
    }
    if (addform) {
      newArticle({ ...nArticle, [event.target.name]: values });
    }
  };

  let getarticle = () => {
    GetAllArticles().then((response) => {
      setstate(response.data);
    });
  };
  useEffect(() => {
    const id = setInterval(getarticle, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      {addform ? (
        <ArticleAdd
          cancel={cancel}
          nArticle={nArticle}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          listoption={Gstate}
          onFileChange={onFileChange}
        />
      ) : null}
      {editform ? (
        <Articledit
          cancel={cancel}
          upArticle={Articlei}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          listoption={Gstate}
          onFileChange={onFileChange}
        />
      ) : null}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h3>List Articles</h3>
              <span
                className="tra"
                onClick={() => {
                  getcategorie();
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
                        <span className="ml-2">Action</span>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((article,i) => {
                      return (
                        <tr className="border-bottom">
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
                                  {article.name}
                                </small>{" "}
                              </div>
                            </div>
                          </td>
                          <td>
                          <div className="p-2 d-flex flex-row align-items-center mb-2">
                              {" "}
                              <div className="d-flex flex-column ml-2">
                                <img
                                  src={"/assets/" + article.image}
                                  alt="logo"
                                  width="50%"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="p-2">
                              {" "}
                              <span className="font-weight-bold">
                                {article.description}
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
                                    getcategorie();
                                    setaddform(false);
                                    seteditform(true);
                                    setArticle(article);
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
                                    DeleteArticle(article.idArticle);
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
