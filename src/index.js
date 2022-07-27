import React from "react";
import ReactDOM from "react-dom";
const fname = "Chan";
const lname = "park";
const num = 7;

ReactDOM.render(
  <>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>your lucky number {num}</p>
  </>,
  document.getElementById("root")
);
