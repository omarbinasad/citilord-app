import React from "react";
import "./Footer.css";
import Logo from "../citiLordlogo.png.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-4 pb-3">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, road 54321, UK, London</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="/">
                      <img src={Logo} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text"></div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#a">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#b">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#c">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">Property</a>
                    </li>
                    <li>
                      <a href="#services">Landlord</a>
                    </li>
                    <li>
                      <a href="#tenants">Tenants</a>
                    </li>
                    <li>
                      <a href="#aboutt">About</a>
                    </li>
                    <li>
                      <a href="#c">Rooms</a>
                    </li>
                    <li>
                      <a href="#p">Property Share</a>
                    </li>
                    <li>
                      <a href="#e">Report Repair</a>
                    </li>
                    <li>
                      <a href="#c">EPC Check</a>
                    </li>
                    <li>
                      <a href="#l">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p className="text-start">Don’t miss to subscribe</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2022, All Right Reserved{" "}
                    <a href="https://codepen.io/anupkumar92/">Omar</a>
                  </p>
                </div>
              </div>
              {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#terms">Terms</a>
                    </li>
                    <li>
                      <a href="#privacy">Privacy</a>
                    </li>
                    <li>
                      <a href="#policy">Policy</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
