import React from "react";

const CustomImage = props => {
  function ShapeSelector() {
    switch (props.Shape) {
      case "Circle":
        return "50%";
      case "Square":
        return "0%";
      case "Rounded":
        return "10px 10px 10px 10px";
      default:
        return "0%";
    }
  }

  const properties = {
    borderRadius: ShapeSelector(),
    margin: props.Margin,
    marginLeft: props.MarginLeft,
    marginRight: props.MarginRight,
    marginTop: props.MarginTop,
    marginBottom: props.MarginBottom,
    padding: props.Padding,
    paddingLeft: props.PaddingLeft,
    paddingRight: props.PaddingRight,
    paddingTop: props.PaddingTop,
    paddingBottom: props.PaddingBottom,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight
  };

  return (
    <div>
      <img
        alt="loading"
        className="customImage"
        style={{ height: props.Height, width: props.Width, ...properties }}
        src={props.Image}
      />
    </div>
  );
};

CustomImage.defaultProps = {
  Height: "100%",
  Width: "100%"
};
export default CustomImage;
