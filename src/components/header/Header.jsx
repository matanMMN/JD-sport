import "./Header.css";
import logo from "./logo.png";

// import React, { useState } from "react";

function Header(props) {
  return (
    <div className="header">
      <nav className="nav">
        <div className="nav-text">
          <ul>
            <a
              className="nav-menu"
              id="nav-menu-id-career"
              href="/Career"
              key={0}
            >
              Career
            </a>
            <a
              className="nav-menu"
              id="nav-menu-id"
              href="/About"
              key={1}
              // onClick={changeBackground}
            >
              About Us
            </a>

            <a className="nav-menu" id="nav-menu-id" href="/Order" key={2}>
              Products
            </a>
            <a className="nav-menu" id="nav-menu-id" href="/Menu" key={3}>
              Wolf Sport
            </a>
          </ul>
        </div>

        <a className="logo-div" href="/">
          <img className="logo" src={logo} />
        </a>
      </nav>
    </div>
  );
}

export default Header;
