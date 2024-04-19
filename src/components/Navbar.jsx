import { useState } from "react";
import logo from "../assets/assets/logo.png";
import "./styles/navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
      <div className="navbar">
        <img src={logo} height={50} />
        <div className="hamburger" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <li>pricing</li>
          <li>team</li>
          <li>contact us</li>
        </ul>
      </div>
  );
};

export default Navbar;
