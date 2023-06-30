import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../components/Home";
import Dashboard1 from "../components/Dashboard";
import DynamicLoad from "../components/LifeExpectency";
import MedicalDoctors from "../components/MedicalDoctors";
import CancerPatients from "../components/Cancer Patients";
import TobaccoConsumption from "../components/Tobacco Consumption";

function Main() {
  return (
    <section>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard1} />
      <Route path="/Life-Expectancy" component={DynamicLoad} />
      <Route path="/Medical-Doctors" component={MedicalDoctors} />
      <Route path="/Cancer-Patients" component={CancerPatients} />
      <Route path="/Tobacco-Consumption" component={TobaccoConsumption} />
    </section>
  );
}

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
                  pathname: "/dashboard",
                  state: {
                    title: "Dashboard",
                  },
                }}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Life-Expectancy">Life Expectancy</Link>
            </li>
            <li>
              <Link to="/Medical-Doctors">Medical Doctors</Link>
            </li>
            <li>
              <Link to="/Cancer-Patients">Cancer Patients</Link>
            </li>
            <li>
              <Link to="/Tobacco-Consumption">Tobacco Consumption</Link>
            </li>
          </ul>
        </nav>
        <Main />
      </div>
    </Router>
  );
}

export default Header;
