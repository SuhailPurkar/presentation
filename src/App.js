import React from "react";
import logo from "./logo.svg";
import Row from "./row";
import Col from "./column";
import CustomImage from "./custom_image";
import ProductCard from "./product_card";
import Banner from "./home_page_banner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="parallax">
        <Row rowSizing="40vh" columnSizing="49.5%  49.5%">
          <Col backgroundColor="#252525">
            <div className="header-text-1">Capitalist Crisis</div>
          </Col>

          <Col>
            <div className="header-text-2">Indigenous Solutions</div>
          </Col>
        </Row>

        <Row columnSizing="49.5%  49.5%">
          <Col backgroundColor="#252525">
            <div className="header-image-1">
              <CustomImage
                Height="50vh"
                Width="40vw"
                Image="https://media.giphy.com/media/QQBjldJtlep6E/giphy.gif"
              />
            </div>
          </Col>

          <Col>
            <div className="header-image-2">
              <CustomImage
                Height="50vh"
                Width="40vw"
                Image="https://i.gifer.com/fyZd.gif"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="parallax-7"></div>

      <Col backgroundColor="#000454">
        <Row columnSizing="100%">
          <div className="carbon-sink-description"> Man Made Climate Change </div>
        </Row>
        <Row columnSizing="33% 33% 33%">
          <Col rowSizing="700px">
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Global Monthly Tempratures"
              productDescription=""
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="https://grist.files.wordpress.com/2016/05/ccsm4_rcp85_global_temperature_change_spiral.gif"
              />
            </ProductCard>
          </Col>

          

          <Col>
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Global Carbon Dioxide Emissions"
              productDescription=""
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="https://i.imgur.com/JGdWaxG.png"
              />
            </ProductCard>
          </Col>

          

          <Col rowSizing="700px">
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Emissions by Sector"
              productDescription=""
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="https://i.imgur.com/WqEhdKm.png"
              />
            </ProductCard>
          </Col>
        </Row>
      </Col>

      <div className="parallax-8"></div>

      <Col backgroundColor="#000454">
        <Row columnSizing="100%">
          <div className="carbon-sink-description"> Carbon Stores </div>
        </Row>
        <Row columnSizing="33% 33% 33%">
          <Col rowSizing="700px">
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Oceans"
              productDescription=""
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="https://cdn.pixabay.com/photo/2013/06/08/17/09/divers-123286_960_720.jpg"
              />
            </ProductCard>
          </Col>

          

          <Col>
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Greenhouse Gas Effect"
              productName="Earth"
              productDescription=""
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="http://www.arc2020.eu/wp-content/uploads/2016/01/8053614949_982fecf12d_k.jpg"
              />
            </ProductCard>
          </Col>

          

          <Col rowSizing="700px">
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Greenhouse Gas Effect"
              productName="Atmosphere"
              productDescription=""
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="https://photos.demandstudios.com/getty/article/81/167/86533753.jpg"
              />
            </ProductCard>
          </Col>
        </Row>
      </Col>

      <div className="parallax-3"></div>

      <Col backgroundColor="#18362c">
        <Row columnSizing="100%">
          <div className="carbon-sink-description">
            {" "}
            Indigenous Technologies{" "}
          </div>
        </Row>
        <Row columnSizing="33% 33% 33%">
          <Col rowSizing="700px">
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Biochar"
              productDescription="Charcoal made from biomass via Pyrolysis"
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="https://wiki.opensourceecology.org/images/thumb/d/d0/Montana_16_bg_062406.jpg/500px-Montana_16_bg_062406.jpg"
              />
            </ProductCard>
          </Col>

          

          <Col>
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Perennial Crops"
              productDescription=""
              productDescription="Long Term Horticulture"
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="https://www.researchmagazine.lu.se/wp-content/uploads/2017/05/2shutterstock_322848197.jpg"
              />
            </ProductCard>
          </Col>

          <Col rowSizing="700px">
            <ProductCard
              Width="100%"
              Height="70%"
              toggleProductCardInfo
              productCardImageWidth="100%"
              productName="Greenhouse Gas Effect"
              productName="Aquaponics"
              productDescription="Aquaculture with hydroponics in a symbiotic environment"
            >
              <CustomImage
                Height="400px"
                Width="500px"
                alt="loading "
                Image="https://images.squarespace-cdn.com/content/v1/4f6c8d6ae4b08696a7443c8b/1496959525385-2SN9U75ESPVEOGQK78EA/ke17ZwdGBToddI8pDm48kJo34on3WKrdN4xH-9uAZ157gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYdNfxOG2t6haxCb3V57IGKYRZ9i4e8765UbqiCgVvkYGQ/image-asset.jpeg?format=500w"
              />
            </ProductCard>
          </Col>
        </Row>
      </Col>

      <div className="parallax-4"></div>

      <Col backgroundColor="#c96340">
        <Row columnSizing="100%">
          <div className="carbon-sink-description"> Biochar </div>
        </Row>

        <Row columnSizing="50% 50%">
          <Col>
            <div className="bio-char-items">
              <CustomImage
                Height="500px"
                Width="500px"
                alt="loading "
                Image="https://openendedsocialstudies.files.wordpress.com/2016/08/4-terra-preta-biochar-soils-of-the-amazon-1024x768.jpg"
              />
            </div>
          </Col>

          <Col>
            <div className="bio-char-items">
              <CustomImage
                Height="500px"
                Width="500px"
                alt="loading "
                Image="https://ciorg.imgix.net/images/default-source/graphics/map_forest-cover-and-loss.jpg?sfvrsn=85e04a42_3?&auto=compress&auto=format&w=800"
              />
            </div>
          </Col>
        </Row>

        <Row columnSizing="50% 50%">
          <Col>
            <div className="bio-char-items">
              <CustomImage
                Height="500px"
                Width="500px"
                alt="loading "
                Image="https://s3.amazonaws.com/user-media.venngage.com/980958-8c48d1d3fe60ed0bdee98b5213ff2947.jpg"
              />
            </div>
          </Col>

          <Col>
            <div className="bio-char-items">
              <CustomImage
                Height="500px"
                Width="500px"
                alt="loading "
                Image="https://i.imgur.com/inxDzR3.jpg"
              />
            </div>
          </Col>
        </Row>
      </Col>

      <div className="parallax-2"></div>

      <Col backgroundColor="#863729">
        <Row columnSizing="100%">
          <div className="carbon-sink-description"> Perennial Crops</div>
        </Row>

        <div className="bio-char-items">
          <CustomImage
            Height="500px"
            Width="1000px"
            alt="loading "
            Image="https://www.ceplas.eu/fileadmin/_processed_/a/7/csm_Research_Area_A_eng_rgb_f3784e4c8d.jpg"
          />
        </div>

        <div className="bio-char-items">
          <CustomImage
            Height="500px"
            Width="1000px"
            alt="loading "
            Image=" https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/0/9b/09bc2615-d2d7-501f-971f-c0d525341c70/5dab9cee4067d.image.jpg?resize=1200%2C548"
          />
        </div>
       </Col>
       <div className="parallax-5"></div>

       <Col backgroundColor="#91cfd1">
        <Row columnSizing="100%">
          <div className="carbon-sink-description"> Aquaponics </div>
        </Row>

        <Row columnSizing="50% 50%">
          <Col>
            <div className="bio-char-items">
              <CustomImage
                Height="500px"
                Width="500px"
                alt="loading "
                Image="https://cdn.britannica.com/91/123391-004-8C252D93.jpg"
              />
            </div>
          </Col>

          <Col>
            <div className="bio-char-items">
              <CustomImage
                Height="500px"
                Width="500px"
                alt="loading "
                Image="https://i.pinimg.com/originals/bb/6a/81/bb6a81705b3cb247d553da7d9f9198e6.jpg"
              />
            </div>
          </Col>
        </Row>

        <div className="bio-char-items">
          <CustomImage
            Height="500px"
            Width="1000px"
            alt="loading "
            Image="https://www.greenandvibrant.com/sites/default/files/inline-images/Aquaponics/Aquaponics.png"
          />
        </div>
       </Col>
    </div>
  );
}

export default App;
