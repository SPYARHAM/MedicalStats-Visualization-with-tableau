import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard1 from "../components/Dashboard";
import DynamicLoad from "../components/LifeExpectency";
import MedicalDoctors from "../components/MedicalDoctors";
import CancerPatients from "../components/Cancer Patients";
import TobaccoConsumption from "../components/Tobacco Consumption";

import Home from "../components/Home";

function Main() {
  return (
    <section>
      <Route path="/" exact component={Home} />
      <Route path="/Dashboard/" component={Dashboard1} />
      <Route path="/Life-Expectency/" component={DynamicLoad} />
      <Route path="/Medical-Doctors/" component={MedicalDoctors} />
      <Route path="/Cancer-Patients/" component={CancerPatients} />
      <Route path="/Tobacco-Comsumption/" component={TobaccoConsumption} />

      {/* testing sending string prop and destructure in component */}
    </section>
  );
}

export default Main;
