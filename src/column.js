import React from "react";
import "./column.css";

// refactor

const Column = props => {
  const GridRowProperties = {
    display: "grid",
    gridTemplateColumns: props.columnSizing,
    gridTemplateRows: props.rowSizing,
    backgroundColor: props.backgroundColor,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    opacity: props.Opacity,
    margin: "0",
    padding: "0",
    color: props.Color
  };

  return (
    <div style={GridRowProperties} className="columnContainer">
      {props.children}
    </div>
  );
};

Column.defaultProps = {
  justifyContent: "center",
  alignItems: "center"
};

export default Column;
