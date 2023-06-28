import React, { useState, useEffect } from "react";
const { tableau } = window;

function Filter() {
  const [url,seturl] = useState("https://public.tableau.com/views/MedicalStats/CancerPatients30-70?:language=en-US&:display_count=n&:origin=viz_share_link");
  const [viz, setViz] = useState(null);

 

  const initViz = () => {
    
    let containerDiv = document.getElementById("container");
   
    setViz(new tableau.Viz(containerDiv, url, ));
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
  marginLeft: "10px"
};

export default Filter;
