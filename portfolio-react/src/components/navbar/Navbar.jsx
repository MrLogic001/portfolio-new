import "./navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from "react";
import theme_pattern from "../../assets/theme_pattern.svg"

const Navbar = () => {

  const menuRef = useRef();
  const [menu, setMenu] = useState("home");

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

   const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className="navbar">
       <img src={theme_pattern} alt="main-logo" /> 
       <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" /> 
      <ul ref={menuRef} className="nav-menu">
        {/* <img src={menu_close} onClick={closeMenu} alt="" /> */}
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="active" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="active" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="active" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="active" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="active" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Let's Connect
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
