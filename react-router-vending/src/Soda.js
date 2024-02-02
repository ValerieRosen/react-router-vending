import React from "react";
import { Link } from "react-router-dom";
import sodaCan from "./cherrycola.png";
//Second item in vending machine

function Soda() {
  return (
    <div className="Soda">
      <img src={sodaCan} alt="cherry cola" />
      <h1>
        <Link to="/">Go Back</Link>
      </h1>
    </div>
  );
}

export default Soda;
