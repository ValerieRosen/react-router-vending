import React from "react";
import { Link } from "react-router-dom";
import candy from "./snickers.png";
//Third item in vending machine

function CandyBar() {
  return (
    <div className="CandyBar">
      <img src={candy} alt="Candy Bar" />
      <h1>
        <Link to="/">Go Back</Link>
      </h1>
    </div>
  );
}

export default CandyBar;
