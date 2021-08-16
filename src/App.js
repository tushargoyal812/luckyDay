import React, { useState } from "react";
import "./styles.css";
import gitImg from "./images/github (1).png";
import linkedinImg from "./images/linkedin (2).png";
import twitterImg from "./images/twitter (1).png";

export default function App() {
  const [date, setDate] = useState();
  const [number, setNumber] = useState();
  const [output, setOutput] = useState();

  function checkHandler(i) {
    console.log(i);

    i.preventDefault();
    var sum = 0;
    var birthdate = date.split("-");
    birthdate.map((item) => {
      for (let i = 0; i < item.length; i++) {
        sum = sum + Number(item[i]);
      }
    });
    if (sum % Number(number) === 0) {
      setOutput("Hurray!you are lucky🥳🎉🎊");
    } else {
      setOutput("Oops!!Your birthday is not a lucky number!🙁");
    }
  }
  return (
    <div className="App">
      <h1 className="heading">
        Enter Your Birthdate and lucky number to continue...
      </h1>
      <div className="cake">🎂</div>
      <form onSubmit={checkHandler}>
        <div style={{ fontSize: "1.5rem", padding: "0.5rem" }}>
          select your birth date
        </div>
        <input
          className="dateInput"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <div style={{ fontSize: "1.5rem", padding: "0.5rem" }}>
          enter your lucky number
        </div>
        <input
          className="numberInput"
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          required
          min="1"
        />
        <div>
          <button className="checkBtn" type="submit">
            check
          </button>
        </div>
      </form>
      <div className="outputDiv">{output}</div>
      <footer>
        <ul>
          <li className="list-item-inline">
            <a href={"https://github.com/tushargoyal812"}>
              <img className="git-img" src={gitImg} />
            </a>
          </li>
          <li className="list-item-inline">
            <a href={"https://www.linkedin.com/in/tushar-goyal-8868741b1"}>
              <img className="linkedin-img" src={linkedinImg} />
            </a>
          </li>
          <li className="list-item-inline">
            <a href={"https://twitter.com/tushargoyal29"}>
              <img className="twitter-img" src={twitterImg} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
