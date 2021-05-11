import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Title from "./Title";
import Input from "./Input";
import Grid from "./Grid";

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Input />
    <Grid />
  </React.StrictMode>,
  document.getElementById("root")
);
