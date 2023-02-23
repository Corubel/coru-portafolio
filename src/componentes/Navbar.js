import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../estilos/navbar.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar__div">
      <h1>Corubel</h1>
      <nav ref={navRef}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "navbar__enlace")}
        >
          Principal
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "navbar__enlace")}
        >
          Proyectos
        </NavLink>
        {/* <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "navbar__enlace")}
        >
          Sobre mi
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "navbar__enlace")}
        >
          Contacto
        </NavLink>
        <button
          to="/"
          className="nav__btn nav__close__btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className="nav__btn " onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
