import React from "react";
import "./Banner.css";
// import slidePhoto from "./home.jpg"
// import slidePhoto2 from "./home2.jpg"
// import slidePhoto3 from "./home3.jpg"
const Banner = () => {
  return (
    <div>
      <div className="wrapper d-flex align-items-center justify-content-center">
        <h3 className="welcome-text text-white">Welcome to Citi Lord</h3>
        <div className="slideshows">
          <div className="slideshow slideshow--hero">
            <div className="slides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
          <div className="slideshow slideshow--contrast slideshow--contrast--before">
            <div className="slides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
          <div className="slideshow slideshow--contrast slideshow--contrast--after">
            <div className="slides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
