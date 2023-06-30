import React, { useEffect } from "react";

const TableauEmbed = () => {
  useEffect(() => {
    initializeTableau();
  }, []);

  const initializeTableau = () => {
    const vizUrl = "https://public.tableau.com/views/MedicalStats/Story1?:language=en-US&:display_count=n&:origin=viz_share_link";
    const options = {
      hideTabs: true,
      hideToolbar: true,
    };
    const vizContainer = document.getElementById("tableauViz");
    new window.tableau.Viz(vizContainer, vizUrl, options);
  };

  return (
    <div style={{ width: "1400px", height: "650px" }}>
      {/* Placeholder for the Tableau visualization. */}
      <div id="tableauViz"></div>
    </div>
  );
};

export default TableauEmbed;
