import React from "react";
import chipBag from "./doritos.png";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Chips.css";

//First item in vending machine

function Chips() {
  return (
    <div className="Chips">
      <Message>
        <img src={chipBag} alt="Chips" />
        <h1>
          <Link to="/">GO BACK</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Chips;
