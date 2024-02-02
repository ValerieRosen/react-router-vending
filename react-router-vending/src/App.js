import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import CandyBar from "./CandyBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/candybar" element={<CandyBar />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
