import React from "react";
import "../header/Header.css";
import logo from "../../assets/images/blogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navColor">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-side">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/aboutus"
                >
                  About US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blogs">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
