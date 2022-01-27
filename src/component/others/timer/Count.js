import React from "react";
import Clock from "./Cloc";

const TimerDonw = ({ deadline }) => {

  return (
    <div className="App">
      <Clock deadline={deadline} />
    </div>
  );
};

export default TimerDonw;

