import React, { useState } from "react";
import { navLinks } from "../../constants";
import "./navbar.css";
import { close, menu, logo } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <img src={logo} alt="hoobank" width="124px" height="32px" />
      <ul className="navbar-list">
        {navLinks.map((item) => (
          <li key={item.id} className="navbar-list-item">
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="menu-icon">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className="menu-opened">
          <ul
            className="navbar-list"
            style={{
              minWidth: "130px",
              display: toggle ? "flex" : "none",
              flexDirection: "column",
              gap: "10px",
              position: "absolute",
              top: "70px",
              right: "20px",
              alignItems: "center",
              background:
                "linear-gradient(132deg, rgba(56,56,56,1) 0%, rgba(31,31,31,1) 21%, rgba(17,17,17,1) 100%)",
              padding: "15px 20px",
              borderRadius: "15px",
            }}
          >
            {navLinks.map((item) => (
              <li key={item.id} className="navbar-list-item">
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
