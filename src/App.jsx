
import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./routers/AppRouter";
import "./index.css";
const App = () => {
  return (
    <AppRouter/>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));