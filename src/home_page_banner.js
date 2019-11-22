import React from "react";
import Row from "./row";
import Col from "./column";
import CustomImage from "./custom_image";
import "./home_page_banner.scss";

const Banner = props => {

  const bannerProperties = {
    backgroundImage: "url(" + props.backgroundImage + ")",
    backgroundColor: props.backgroundColor,
    minHeight: props.Height
  }

  const bannerItem = {
    bottom: props.Bottom,
    top: props.Top
  }


  return (
      <div style={bannerProperties} className="banner-container">
        <Col>
          <div style={bannerItem} className="banner-container-item ">{props.bannerMain}</div>
          <div  className="banner-order">{props.bannerButton}</div>
        </Col>
      </div>
  );
};

Banner.defaultProps = {
  Height : "100%",
  Bottom : "10px"

};

export default Banner;
