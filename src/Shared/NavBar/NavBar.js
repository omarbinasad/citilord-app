import React from "react";
import "./NavBar.css";
import Logo from "../citiLordlogo.png.png";

const NavBar = () => {
  return (
    <div className="custom-nav-container">
      <nav className="navbar navbar-expand-lg navbar-dark custom-nav-bar px-3">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="/">
            <img className="" src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Properties
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      All Properties
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Short Let
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Long Let
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      To Buy
                    </a>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#t">
                  Tenants
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Land">
                  Landlords
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <button className="my-citi-lord-btn btn btn-default" type="submit">
              My Citi Lord
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
