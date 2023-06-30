import React from "react";
import logo from "../images/tableau.png";
import gitHubLogo from "../images/github.svg";

export default function Home() {
  const githubStyle = {
    width: "50px",
    height: "50px"
  };

  const indicatorStyle = {
    fontSize: "3rem",
    width: "100%",
    textAlign: "center"
  };

  return (
    <div>
      <img src={logo} alt="Tableau" />
      <h1>Welcome to the Tableau Dashboard</h1>
      <p>By Arham Jain</p>
      <p style={indicatorStyle}>👇</p>
      <a href="https://github.com/SPYARHAM" target="_blank" rel="noreferrer">
        <img id="githubLink" src={gitHubLogo} style={githubStyle} alt="GitHub Logo" />
      </a>
    </div>
  );
}
