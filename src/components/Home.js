import React from "react";
import logo from "../images/tableau.png";
import gitHubLogo from "../images/github.svg";
//public / static / images / tableau.png

export default function Home() {
  return (
    <div>
      <img src={logo} alt="tableauImage" />
      <h1>Welcome to the Tableau DashboardI</h1>
      <p>By Arham Jain</p>
      <p style={indicatorStyle}>👇</p>
      <a href="https://github.com/SPYARHAM" target="_blank">
        {" "}
        <img id="githubLink" src={gitHubLogo} style={githubStyle} alt="github logo" />
      </a>
    </div>
  );
}

const githubStyle = {
  width: "50px",
  height: "50px"
};

const indicatorStyle = {
  fontSize: "3rem",
  width: "100%",
  textAlign: "center"
};
