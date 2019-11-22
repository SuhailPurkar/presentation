import React from "react";
import "./row.css";

const Row = props => {
  const freshGridRowProperties = {
    display: "grid",
    gridTemplateColumns: props.columnSizing,
    gridTemplateRows: props.rowSizing,
    backgroundColor: props.backgroundColor,
    margin: props.Margin,
    marginLeft: props.MarginLeft,
    marginRight: props.MarginRight,
    marginTop: props.MarginTop,
    marginBottom: props.MarginBottom,
    padding: "0"
  };

  return (
    <div style={freshGridRowProperties} className="rowContainer">
      {props.children}
    </div>
  );
};

export default Row;
