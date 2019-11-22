import React from "react";
import ReactDOM from "react-dom";
import "./product_card.scss";
import Row from "./row";
import Col from "./column";
import { tsPropertySignature } from "@babel/types";

const ProductCard = props => {
  function purchase() {
    //Paypal Redirect
  }

  //Card Size
  const wrapper = {
    width: props.Width,
    height: props.Height
  };

  //Picture Size
  const productCardImage = {
    height: props.productCardImageHeight,
    width: props.productCardImageWidth
  };

  //Product Card Name
  const productCardName = {
    color: props.productCardNameColor,
    fontFamily: props.productCardNameFont,
    fontSize: props.productCardNameSize
  };

  //Product Card Description
  const productCardDescription = {
    color: props.productCardDescriptionColor,
    fontFamily: props.productCardDescriptionFont,
    fontSize: props.productCardDescriptionSize
  };

  return (
    <div className="product-card-wrapper" style={wrapper}>
      <div className="product-card-container">
        {/* Picture */}
        <div style={productCardImage}>{props.children}</div>

        {/* Card Body */}
        <Row backgroundColor="white" columnSizing="calc(100% / 1)">
          <Col Color="black">
            <div>
              <Col>
                <span className="product-card-name" style={productCardName}>
                  {props.productName}
                </span>
                <span
                  className="product-card-description"
                  style={productCardDescription}
                >
                  {props.productDescription}
                </span>
              </Col>
            </div>
          </Col>

          {/* Purchase Button */}
          {/* <Col backgroundColor={props.iconColor} className="product-card-bottom-right"  rowSizing={bodySize}>
            <div className="product-card-bottom-right" onClick={purchase}>
              <i  className="material-icons">shopping_cart</i>
            </div>
          </Col> */}
        </Row>
      </div>

      {/* Product Info Contents */}
      <div
        className="product-card-info"
        style={{ display: !props.toggleProductCardInfo ? "block" : "none" }}
      >
        <div className="icon">
          <i className="material-icons">info_outline</i>
        </div>
        <div className="contents">{props.productInfo}</div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  productName: "Name",
  productDescription: "Description",
  productCardImageHeight: "400px",
  productCardImageWidth: "300px",
  productCardNameColor: "black",
  productCardNameFont: "Gotham Black",
  productCardNameSize: "2.25vh",
  productCardNameSize: "1.5vw",
  productCardDescriptionColor: "#444",
  productCardDescriptionFont: "Lora",
  productCardDescriptionSize: "2vh",
  iconColor: "#eae6e6"
};

export default ProductCard;
