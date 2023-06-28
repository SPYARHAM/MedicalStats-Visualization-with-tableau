import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function BasicEmbed(props) {
  const [url] = useState(
    "https://public.tableau.com/app/profile/mdart.dic.pu/viz/HospitalDepartmentsAnalysis_16872489857530/Dashboard5"
  );
  const [viz, setViz] = useState(null);
  const [option, setOption] = useState("");

  const initViz = () => {
    let options = {
      hideTabs: true,
      // hideToolbar: true,
    };
    let containerDiv = document.getElementById("container");

    setViz(new tableau.Viz(containerDiv, url, options));
  };

  useEffect(initViz, []);

  return (
    <div style={containerStyle}>
      <div style={setVizStyle} id="container" />
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const setVizStyle = {
  
    margin: "0 auto", // Add this line to center align the dashboard
    width : "100vw",
    height:"80vh",
  // width: "1440px",
  // height: "670px",
    "& > iframe":{
      margin:"0 auto"
    }
};

export default BasicEmbed;
