import React, { useEffect } from "react";

const TableauEmbed = () => {
  useEffect(() => {
    initializeTableau();
  }, []);

  const initializeTableau = () => {
    const vizUrl = "https://public.tableau.com/views/MedicalStats/CancerPatients30-70?:language=en-US&:display_count=n&:origin=viz_share_link";
    const options = {
      hideTabs: true,
      hideToolbar: true,
    };
    const vizContainer = document.getElementById("tableauViz");
    new window.tableau.Viz(vizContainer, vizUrl, options);
  };

  return (
    <div style={{ width: "1000px", height: "700px" }}>
      {/* Placeholder for the Tableau visualization. */}
      <div id="tableauViz"></div>
    </div>
  );
};

export default TableauEmbed;
