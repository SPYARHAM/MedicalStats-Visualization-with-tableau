import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main";

function Header() {
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/dashboard/",
                  state: {
                    title: "Dashboard"
                  }
                }}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Life-Expectency">Life Expectency</Link>
            </li>
            <li>
              <Link to="/Medical-Doctors">Medical Doctors</Link>
            </li>
            <li>
              <Link to="/Cancer-Patients">Cancer Patients</Link>
            </li>
            <li>
              <Link to="/Tobacco-Comsumption">Tobacco Consumption</Link>
            </li>
           
           
      
          </ul>
        </nav>

        <Main />
      </div>
    </Router>
  );
}

export default Header;
