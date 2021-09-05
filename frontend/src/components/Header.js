import React, { useState } from "react";
// import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/">
            <div className="navbar-brand  fs-3">PROSHOP</div>
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setCollapse(!collapse)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse collapse ${collapse ? "show" : null}`}
            id="navbarColor03"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link " to="/cart">
                  <i className="fas fa-shopping-cart"></i> CART
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  <i className="fas fa-user"></i> SIGNIN
                </Link>
              </li>
            </ul>
            {/* <form class="d-flex">
              <input class="form-control me-sm-2" type="text" placeholder="Search"></input>

              <button type="submit" class="btn btn-dark">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
