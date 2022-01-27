import "./../../../Styles/hcategorie.css";
import React, { useState, useEffect } from "react";
import { GetAllCategories } from "../../../services/Categorie_services";
export default function HCategories() {
  const [state, setstate] = useState([]);
  let getcategorie = () => {
    GetAllCategories().then((response) => {
      setstate(response.data);
    });
  };
  useEffect(() => {
    const id = setInterval(getcategorie, 600);
    return () => clearInterval(id);
  });
  let size = (categ) => {
    return categ.listArticle.length;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Featured Categories</h2>
        </div>
        {state.map((categ) => {
          return (
            <div className="col-lg-3 col-sm-6 mb-4 " key={categ.idCategorie}>
              <div className="card border-0 shadow rounded-xs pt-5 ">
                <div className="card-body ">
                  <div className=" mydiv">
                    <img
                      src={"/assets/" + categ.image}
                      alt="logo"
                      max-width="150%"
                      max-heigth="150%"
                    />
                  </div>{" "}
                  <h4 className="mt-4 mb-3" id="htitre">
                    {" "}
                    {categ.name}
                  </h4>
                  <p id="htitre">
                    {" "}
                    <strong>{size(categ)}</strong>
                  </p>
                  <div className="cardfooter"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
