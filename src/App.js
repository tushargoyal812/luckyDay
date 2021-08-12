import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState();
  const [number, setNumber] = useState();
  const [output, setOutput] = useState();

  function checkHandler() {
    var sum = 0;
    var birthdate = date.split("-");
    console.log(birthdate);
    birthdate.map((item) => {
      for (let i = 0; i < item.length; i++) {
        sum = sum + Number(item[i]);
      }
      console.log(item.length);
    });
    console.log(sum);
    if (sum % Number(number) === 0) {
      setOutput("you are lucky");
    } else {
      setOutput("not lucky");
    }
  }
  return (
    <div className="App">
      <h1 className="heading">
        Enter Your Birthdate and lucky number to continue...
      </h1>
      <div style={{ fontSize: "1.5rem", padding: "0.5rem" }}>
        select your birth date
      </div>
      <input
        className="dateInput"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        required="required"
      />
      <div style={{ fontSize: "1.5rem", padding: "0.5rem" }}>
        enter your lucky number
      </div>
      <input
        className="numberInput"
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        required="required"
        min="0"
      />
      <div>
        <button className="checkBtn" onClick={checkHandler}>
          check
        </button>
      </div>
      <div>{output}</div>
    </div>
  );
}
