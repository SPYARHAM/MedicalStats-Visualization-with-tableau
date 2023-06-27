import React, { useState, useEffect } from "react";
const { tableau } = window;

function Events() {
  const [url] = useState("https://public.tableau.com/views/MedicalStats/LifeExpentancyAtBirth?:language=en-US&:display_count=n&:origin=viz_share_link");
  const [viz, setViz] = useState(null);
  const initViz = () => {
    let options = {
      hideTabs: true,
      hideToolbar: true,
    };
    let containerDiv = document.getElementById("container");
    setViz(new tableau.Viz(containerDiv, url, options));
  };
  useEffect(initViz, []);
  return (
    <div>
      <div style={setVizStyle} id="container" />
    </div>
  );
}

const setVizStyle = {
  margin: "25px",
  width: "1440px",
  height: "670px"
};
const selectStyle = {
  
  margin:"50px"
};

export default Events;
