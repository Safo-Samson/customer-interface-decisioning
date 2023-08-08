import "./App.css";
import NewLoan from "./components/HomeLoan/NewLoan";
import CombinedBar from "./components/UIComponents/CombinedBar";

import { useState } from "react";
import "./App.css";
import StartLoan from "./components/startLoan/startLoan.jsx";
function App() {
  return (
    <>
      <CombinedBar />
      <NewLoan />
    </>
  );
}

export default App;
