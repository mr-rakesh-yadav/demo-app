import React, { useState, useCallback } from "react";

import {
  faHome,
  faCogs,
  faProjectDiagram,
  faInfoCircle,
  faEnvelope,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navbarData } from "../util";
import logo from "../assets/solfin-logo.svg";
import "./style.css";

const icons = {
  home: faHome,
  cogs: faCogs,
  "project-diagram": faProjectDiagram,
  "info-circle": faInfoCircle,
  envelope: faEnvelope,
  user: faUser,
};

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setDropdown(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setDropdown(null);
  }, []);

  const toggleMenu = useCallback(() => {
    const navbar = document.querySelector(".navbar__menu");
    navbar.classList.toggle("navbar__menu-active");
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Solfin Logo" className="navbar__logo" />
        <div className="navbar__brand">
          <h1 className="navbar__title">Solfin</h1>
          <p className="navbar__subtitle">Sustainable Finance</p>
        </div>
      </div>

      <ul className="navbar__menu">
        {navbarData.map((item, index) => (
          <li
            key={index}
            className="navbar__item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.link} className="navbar__link">
              <FontAwesomeIcon
                icon={icons[item.icon]}
                className="navbar__icon"
              />
              {item.title}
            </a>
            {item.subItems && dropdown === index && (
              <ul className="navbar__dropdown">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="navbar__dropdown-item">
                    <a href={subItem.link} className="navbar__dropdown-link">
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar__right">
        <a href="/login" className="navbar__login-button">
          <FontAwesomeIcon icon={faUser} className="navbar__icon" />
          Login
        </a>
        <FontAwesomeIcon
          icon={faBars}
          className="navbar__hamburger-icon"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
