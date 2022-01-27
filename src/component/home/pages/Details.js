import { Link } from "react-router-dom";
import TimerDonw from "../../others/timer/Count";
import ScrollToTopOnMount from "./../../others/ScrollToTopOnMount";
import "font-awesome/css/font-awesome.min.css";
import HomeNavbar from "../layout/navbar";
import BetArticles from "./BetArticles";
import ScrollToBottom from "./../../others/Scrolldown";

export default function Detail({
  BetSelected,
  BethandleChange,
  Isexpired,
  auth,
  BethandleSubmit,
  SelectedBet,
  index,
}) {
  let {
    name,
    idBet,
    image,
    description,
    initialprix,
    finalprix,
    lastdate,
    state,
   
  } = BetSelected;
  let statue = ($state) => {
    if ($state) {
      return "Active";
    } else {
      return "Expired";
    }
  };
  return (
    <div className="container mt-5 py-4 px-xl-5">
      <HomeNavbar />
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/hbets">
              Bets
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {name}
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
              {BetSelected.listArticle.length > 0 ? <p> WATCHLIST</p> : <></>}
              {Array.from(
                { length: BetSelected.listArticle.length },
                (_, i) => {
                  let selected = i !== 1 ? "opacity-6" : "";
                  index++;

                  return (
                    <span key={i} href="!#" onClick={ScrollToBottom}>
                      <img
                        className={"rounded mb-2 ratio " + selected}
                        alt=""
                        src={"/assets/" + BetSelected.listArticle[index].image}
                      />
                    </span>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={"/assets/" + image}
              />
            </div>
          </div>

          {/* <div className="row mt-2">
            <div className="col-12">
              <div
                className="d-flex flex-nowrap"
                style={{ overflowX: "scroll" }}
              >
                {Array.from({ length: 8 }, (_, i) => {
                  return (
                    <a key={i} href="!#">
                      <img
                        className="cover rounded mb-2 me-2"
                        width="70"
                        height="70"
                        alt=""
                        src={Image}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">{name}</h2>

            <div className="row g-3 mb-4">
              <div className="col">
                {Isexpired(BetSelected) ? (
                  <button
                    type="button"
                    style={{ marginRight: "25px" }}
                    className="btn btn-outline-dark py-2 w-100"
                    onClick={() => {
                      BethandleSubmit();
                      SelectedBet(idBet);
                    }}
                  >
                    BID NOW
                  </button>
                ) : null}{" "}
              </div>

              {Isexpired(BetSelected) && auth ? (
                <div>
                  <p>{BetSelected.finalprix + 100}$ MIN-BID</p>
                  <input
                    type="number"
                    min={BetSelected.finalprix}
                    name="finalprix"
                    placeholder={BetSelected.value}
                    value={BetSelected.value}
                    onChange={BethandleChange}
                  ></input>{" "}
                  <br /> <br />{" "}
                </div>
              ) : null}
            </div>

            <h4 className="mb-0">Details</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Code</dt>
              <dd className="col-sm-8 mb-3">{idBet}</dd>

              <dt className="col-sm-4">Articles</dt>
              <dd className="col-sm-8 mb-3">
                {BetSelected.listArticle.length} Items
              </dd>

              <dt className="col-sm-4">Brand</dt>
              <dd className="col-sm-8 mb-3">{name}</dd>

              <dt className="col-sm-4">Status</dt>

              <dd className="col-sm-8 mb-3">{statue(state)}</dd>

              <dt className="col-sm-4">Start Bid</dt>

              <dd className="col-sm-8 mb-3">{initialprix}$</dd>
              <dt className="col-sm-4">Current Bid</dt>

              <dd className="col-sm-8 mb-3">{finalprix}$</dd>
              <dt className="col-sm-4">lastdate</dt>

              <dd className="col-sm-8 mb-3">{lastdate}</dd>
              <dt className="col-sm-4">
                <p>Time Remaining:</p>

                <img src="./time.gif" alt="" width={50} />
              </dt>

              <dd style={{ color: "red" }}>
                {" "}
                {Isexpired(BetSelected) ? (
                  <div className="timer">
                    <TimerDonw deadline={lastdate} />
                    <br />
                  </div>
                ) : (
                  <h5>Closed Auction</h5>
                )}
              </dd>
              <dd className="col-sm-8 mb-3"></dd>
            </dl>

            <h4 className="mb-0">Description</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>{description}</small>
            </p>
          </div>
        </div>
      </div>
      {BetSelected.listArticle.length > 0 ? (
        <div className="row">
          <div className="col-md-12 mb-4">
            <hr />
            <h4 className="text-muted my-4">Articles</h4>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
              {BetSelected.listArticle
                ? BetSelected.listArticle.map((article) => {
                    return <BetArticles article={article} />;
                  })
                : console.log(BetSelected.listArticle)}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
