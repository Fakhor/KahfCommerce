import React, { Component } from "react";
import "./TopNavbar.css";

class TopNavbar extends Component {
  render() {
    return (
      <div class="topnav fixed-top">
        <text className="text-promo">NEW: Kahf Gentle Exfoliating Face Scrub</text>
        <div class="topnav-right">
          <a href="/cartshop">
            <i class="fas fa-shopping-cart"></i>Cart
          </a>
          <a href="/">
            <i class="fas fa-heart"></i>Wish
          </a>
          <a href="/login">
            <i class="fas fa-user"></i>Login
          </a>
        </div>
      </div>
    );
  }
}

export default TopNavbar;
