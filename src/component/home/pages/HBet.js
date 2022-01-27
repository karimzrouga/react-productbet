import "./../../../Styles/bet.css";
import React, { useState, useEffect } from "react";
import { GetAllBet } from "../../../services/Bet_services";
import "font-awesome/css/font-awesome.min.css";
import HomeNavbar from "../layout/navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import FilterMenu from "../../others/FilterMenu";
import Categfilter from "../../others/Categfilter";
import ListBet from "./ListBets";

export default function Hbets({
  BethandleChange,
  BethandleSubmit,
  auth,
  SelectedBet,
  Isexpired,
  handlesearsch,
  searschSubmit,
  search,
}) {
  let { Auctions, rmin, rmax, fsearch } = search;

  const [state, setstate] = useState([]);

  let myfilter = (data) => {
    console.log(Auctions);
    let res = state;
    if (fsearch !== "") {
      return data.filter((e) => {
        return e.name.toUpperCase().indexOf(fsearch.toUpperCase()) !== -1;
      });
    }
    if (rmin > 0 && rmax > 999) {
      res = data.filter((e) => {
        return e.finalprix > rmin && e.finalprix < rmax;
      });
    }

    if (Auctions === "Today's Auctions" || Auctions === "true") {
      res = data.filter((e) => {
        return e.lastdate > new Date().toISOString().substring(0, 10);
      });
    }
    if (Auctions === "Past Auctions" || Auctions === "false") {
      res = data.filter((e) => {
        return e.lastdate < new Date().toISOString().substring(0, 10);
      });
    }
    if (Auctions === "All") {
      return data;
    }

    return res;
  };

  var delay = "600";
  let getbet = () => {
    GetAllBet().then((response) => {
      setstate(myfilter(response.data));
    });
  };

  useEffect(() => {
    const id = setInterval(getbet, delay);
    return () => clearInterval(id);
  });

  let size = (bet) => {
    return bet.listClients.length;
  };
  const [viewType, setViewType] = useState({ grid: true });

  function changeViewType() {
    setViewType({
      grid: !viewType.grid,
    });
  }
  return (
    <div>
      <HomeNavbar />
      <div className="container mt-5 py-4 px-xl-5">
        <nav aria-label="breadcrumb" className="bg-custom-light rounded">
          <ol className="breadcrumb p-3 mb-0">
            <li className="breadcrumb-item">
              <Link
                className="text-decoration-none link-secondary"
                to="/hbets"
                replace
              >
                Bets
              </Link>
            </li>
          </ol>
        </nav>

        <div className="row mb-4 mt-lg-3">
          <div className="d-none d-lg-block col-lg-3">
            <div className="border rounded shadow-sm">
              <FilterMenu
                search={search}
                handlesearsch={handlesearsch}
                searschSubmit={searschSubmit}
                Auctions={["Today's Auctions", "Past Auctions"]}
                state={["Closed", " Open"]}
              />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="d-flex flex-column h-100">
              <div className="row mb-3">
                <Categfilter />
                <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search Bet..."
                      name="fsearch"
                      onChange={handlesearsch}
                    />
                    <button className="btn btn-outline-dark">
                      <p>
                        <i class="fa fa-search"></i>
                      </p>
                    </button>
                  </div>{" "}
                  <img
                    src="/focus.gif"
                    width="20%"
                    alt="Store"
                    // eslint-disable-next-line react/style-prop-object
                    style={{ cursor: "pointer" }}
                    onClick={changeViewType}
                  />
                </div>
              </div>

              {
                <ListBet
                  size={size}
                  bets={state}
                  BethandleChange={BethandleChange}
                  BethandleSubmit={BethandleSubmit}
                  auth={auth}
                  SelectedBet={SelectedBet}
                  Isexpired={Isexpired}
                  viewType={viewType}
                />
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
