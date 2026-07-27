import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import eye from "@icons/eye.gif";

import { SearchBar } from "../SearchBar/SearchBar";
import "./Navbar.css";

export function Navbar() {

  const menus = {
    tienda: {
      linkTo: "/tiendas",
      icon: "fa-solid fa-shop",
    },
    faq: {
      linkTo: "/faq",
      icon: "fa-solid fa-question",
    },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isPhone = window.innerWidth <= 768;
  const [isFloating, setIsFloating] = useState(false);
  const isDrawerMode = isFloating || isMobile;

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
          <i className="fa-solid fa-bars hamburger-icon fa-lg"></i>
        </button>

        {!isDrawerMode && (
          <div className="ham-categories">
            <Link to="/tiendas" onClick={closeMenu}>
              <i className="fa-solid fa-shop"></i>
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
            <Link to="/tiendas">
              <i className="fa-solid fa-shop fa-lg"></i>
              <span className="nav__categorie-name">Tiendas</span>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
