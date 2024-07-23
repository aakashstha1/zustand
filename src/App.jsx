import React from "react";
import ManageCounter from "./counterApp/ManageCounter";
import CounterValue from "./counterApp/CounterValue";
import "./App.css";

const App = () => {
  return (
    <div className="App-header">
      <ManageCounter />
      <CounterValue />
    </div>
  );
};

export default App;
