import { Link } from "react-router-dom";
import TimerDown from "../../others/timer/Count";

export default function ListBet({
  bets,
  size,
  BethandleChange,
  BethandleSubmit,
  auth,
  SelectedBet,
  Isexpired,
  viewType
}) {
  return (
    <div
    className={
      "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 " +
      (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
    }
  >
      {bets.map((bet) => {
        return (
          <div class="col-md-3">
            <div class="wsk-cp-product">
              <div class="wsk-cp-img">
                <img
                  src={"/assets/" + bet.image}
                  alt="Product"
                  class="img-responsive"
                />
              </div>

              <div class="wsk-cp-text">
                <div class="title-product">
                  <h3> {bet.name}</h3>
                </div>
                <div class="description-prod">
                  <p>{bet.description}</p>
                </div>

                <div class="card-footer">
                  <div id="nbclient">
                    {size(bet)}x <i class="fa fa-user-circle"></i>
                  </div>

                  <div class="wcf-left">
                    <span class="price">Current Bid:{bet.finalprix}$</span>
                  </div>
                  {Isexpired(bet) ? (
                    <div className="timer">
                      <TimerDown deadline={bet.lastdate} />
                      <br />
                    </div>
                  ) : (
                    <p>Closed Auction</p>
                  )}
                  {Isexpired(bet) && auth ? (
                    <div>
                      <input
                        type="number"
                        min={bet.finalprix}
                        name="finalprix"
                        value={bet.value}
                        onChange={BethandleChange}
                      ></input>{" "}
                      <br /> <br />{" "}
                    </div>
                  ) : null}

                  {Isexpired(bet) ? (
                    <button
                      type="button"
                      style={{ marginRight: "25px" }}
                      className="btn btn-outline-dark"
                      onClick={() => {
                        BethandleSubmit();
                        SelectedBet(bet.idBet);
                      }}
                    >
                      BID NOW
                    </button>
                  ) : null}

                  <Link
                    to="/Betdetails"
                    className="btn btn-outline-dark"
                    replace
                    onClick={() => {
                      SelectedBet(bet.idBet);
                    }}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
