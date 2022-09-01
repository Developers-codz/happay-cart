import React from "react";
import { Cart } from "../../assets";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-heading centered pointer">
        <img
          src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
          alt="logo"
          className="logo-icon"
        />
        <div className="logo-name">Happay</div>
      </Link>
      <ul className="centered nav-links">
        <Link  to="/order-summary" className="cart-wrapper pointer">
        <Cart />
        <div className="qty-badge">0</div>
        </Link>
        <li><img src="https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJvd24lMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="profile-img" /></li>
      </ul>
    </nav>
  );
};
