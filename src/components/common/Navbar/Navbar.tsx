import eye from "@icons/eye.gif";
import energy from "@icons/energy.svg";
import hot from "@icons/hot.svg";
import pc from "@icons/pc.svg";
import shop from "@icons/shop.svg";
import search from "@icons/search.svg";
import { animate } from "animejs";

import "./Navbar.css";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!isDrawerMode && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isDrawerMode, isMenuOpen]);

  useEffect(() => {
    if (!isDrawerMode) {
      return;
    }

    const menuElement = menuRef.current;
    const overlayElement = overlayRef.current;

    if (!menuElement || !overlayElement) {
      return;
    }

    if (isMenuOpen) {
      animate(menuElement, {
        opacity: [0, 1],
        translateX: [42, 0],
        duration: 260,
        easing: "easeOutCubic",
      });

      animate(overlayElement, {
        opacity: [0, 1],
        duration: 220,
        easing: "linear",
      });

      return;
    }

    animate(menuElement, {
      opacity: [1, 0],
      translateX: [0, 42],
      duration: 190,
      easing: "easeInCubic",
    });

    animate(overlayElement, {
      opacity: [1, 0],
      duration: 170,
      easing: "linear",
    });
  }, [isDrawerMode, isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isDrawerMode ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isDrawerMode]);

  const isPhone = window.innerWidth <= 768;

  return (
    <>
      <nav className={`main-navbar ${isFloating ? "floating glass-effect" : ""}`}>
        <div className={`page-slogan ${isFloating ? "floating" : ""}`}>
          <img src={eye} alt="Eye" loading="lazy" style={{ opacity: isFloating ? 0.5 : 1 }} ></img>
          {isPhone ? '' : `
          <h1 style={{ opacity: isFloating ? 0.5 : 1 }}> | </h1>
          <h1 style={{ opacity: isFloating ? 0.5 : 1 }}>AAS</h1>
          `}
          </div>
        <div className={`search-wrapper ${isFloating ? "floating" : ""} `}>
          <input
            type="text"
            placeholder="Ryzen 7 7600x..."
            aria-label="Search"
            className="search-input"
          ></input>
          <img
            src={search}
            alt="Search"
            className="search-icon"
            loading="lazy"
          ></img>
        </div>

        {/* HAM */}
        <button
          className={`hamburger-btn ${isMenuOpen ? "active" : ""} ${isFloating ? "floating" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="nav-drawer"
        >
          <img
            src={hot}
            alt="Menu"
            loading="lazy"
            className="hamburger-icon"
          />
        </button>

        {!isDrawerMode && (
          <div className="ham-categories">
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
            <a onClick={closeMenu}>
              <img src={shop} alt="Tiendas" loading="lazy"></img>
              Tiendas
            </a>
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
            <a >
              <img src={shop} alt="Tiendas" loading="lazy"></img>
              Tiendas
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
