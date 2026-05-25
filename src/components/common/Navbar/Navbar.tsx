import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import eye from "@icons/eye.gif";
import hot from "@icons/hot.svg";
import shop from "@icons/shop.svg";

import { SearchBar } from "../SearchBar/SearchBar";
import "./Navbar.css";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isPhone = window.innerWidth <= 768;
  const [isFloating, setIsFloating] = useState(false);
  const isDrawerMode = isFloating || isMobile;
  // todo: repito states aca y en searchBar tsx, pasarlos

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsFloating(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const onViewportChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", onViewportChange);

    return () => mediaQuery.removeEventListener("change", onViewportChange);
  }, []);

  return (
    <>
      <nav
        className={`main-navbar ${isFloating ? "floating glass-effect" : ""}`}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={`page-slogan ${isFloating ? "floating" : ""}`}>
            <img
              src={eye}
              alt="Eye"
              loading="lazy"
              style={{ opacity: isFloating ? 0.5 : 1 }}
            ></img>
            {!isPhone && (
              <>
                <h1 style={{ opacity: isFloating ? 0.5 : 1 }}> | </h1>
                <h1 style={{ opacity: isFloating ? 0.5 : 1 }}>AAS</h1>
              </>
            )}
          </div>
        </Link>

        <SearchBar />

        {/* HAM */}
        <button
          className={`hamburger-btn ${isMenuOpen ? "active" : ""} ${isFloating ? "floating" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="nav-drawer"
        >
          <img src={hot} alt="Menu" loading="lazy" className="hamburger-icon" />
        </button>

        {!isDrawerMode && (
          <div className="ham-categories">
            {/* 
            <a onClick={closeMenu}>
              <img src={energy} alt="Lo mas buscado" loading="lazy"></img>
              Lo mas buscado
            </a>
            <a onClick={closeMenu}>
              <img src={pc} alt="Armado de pc" loading="lazy"></img>
              Cosas de pc
            </a>
            <a onClick={closeMenu}>
              <img src={hot} alt="Setup" loading="lazy"></img>
              Setup
            </a>
            */}
            <Link to="/tiendas" onClick={closeMenu}>
              <img src={shop} alt="Tiendas" loading="lazy"></img>
              Tiendas
            </Link>
          </div>
        )}
      </nav>

      {isDrawerMode && (
        <>
          <div
            ref={overlayRef}
            className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
            onClick={closeMenu}
          ></div>

          <div
            id="nav-drawer"
            ref={menuRef}
            className={`ham-categories drawer ${isMenuOpen ? "active" : ""}`}
          >
            <button
              type="button"
              className="drawer-close-btn"
              aria-label="Cerrar menu"
              onClick={closeMenu}
            >
              <i className="fa-solid fa-x"></i>
            </button>
            {/* 
            
            <a >
              <img src={energy} alt="Lo mas buscado" loading="lazy"></img>
              Lo mas buscado
            </a>
            <a >
              <img src={pc} alt="Armado de pc" loading="lazy"></img>
              Cosas de pc
            </a>
            <a >
              <img src={hot} alt="Setup" loading="lazy"></img>
              Setup
            </a>
            */}
            <Link to="/tiendas">
              <img src={shop} alt="Tiendas" loading="lazy"></img>
              Tiendas
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
