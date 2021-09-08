import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

// import { MenuItems } from "./MenuItems";
// import { Button } from "../Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="NavbarItems fixed-top">
      <h1 className="navbar-logo">Kahf</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>

        <li className="nav-item">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/shop"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/brand"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Brand
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/kahfprogram"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Kahf Program
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/discovery"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Discovery
          </NavLink>
        </li>




      </ul>
      <div>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Type to search"
            aria-label="Search"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
