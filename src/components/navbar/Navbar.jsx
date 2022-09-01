import React from "react";
import { Cart } from "../../assets";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-heading centered">
        <img
          src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
          alt="logo"
          className="logo-icon"
        />
        <div className="logo-name">Happay</div>
      </div>
      <ul className="centered nav-links">
        <li className="cart-wrapper">
        <Cart />
        <div className="qty-badge">0</div>
        </li>
        <li><img src="https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJvd24lMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="profile-img" /></li>
      </ul>
    </nav>
  );
};
