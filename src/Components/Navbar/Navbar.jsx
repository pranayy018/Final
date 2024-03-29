import React from "react";
import "./navbar.css";

import logo from "../../data/logo.svg"
import Login from "@react-login-page/page11";
import { Register } from "../../Container";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src={logo}></img>
        <a href="#">MedDoc</a>
      </div>
      <div className="navbar-right">
        <a href="/login" className="login" onClick={() => <Login/>}>
          Log In
        </a>
        <a href="/signup" className="register" onClick={() => <Register/>}>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
