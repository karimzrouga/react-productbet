import "../../../Styles/card.css";
import React, { useState, useEffect } from "react";
import { GetAllEvent } from "../../../services/Event_services";
import HomeNavbar from "../layout/navbar";

export default function HEvent() {
  const [state, setstate] = useState([]);
  let getevents = () => {
    GetAllEvent().then((response) => {
      setstate(response.data);
    });
  };
  useEffect(() => {
    const id = setInterval(getevents, 600);
    return () => clearInterval(id);
  });
  return (
    <div className="eventbody">
      <HomeNavbar />
      <div className="event">
        {state.map((event) => {
          return (
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={"/assets/" + event.image}
                    class="card-img"
                    alt={event.image}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{event.name}</h5>
                    <p class="card-text">{event.description}</p>
                    <p class="card-text">
                      <small class="text-muted">
                        Nombres Bet {event.listBet.length}
                      </small>
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary position-absolute bottom-0 end-0"
                  >
                    View Lot
                  </button>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
