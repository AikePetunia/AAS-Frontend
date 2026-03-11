import eye from "@icons/eye.gif";
import energy from "@icons/energy.svg";
import hot from "@icons/hot.svg";
import pc from "@icons/pc.svg";
import shop from "@icons/shop.svg";
import search from "@icons/search.svg";

import "./Navbar.css";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="main-navbar glass-effect">
        <div className="page-slogan">
          <img src={eye} alt="Eye" loading="lazy"></img>
          <h1> | </h1>
          <h1>AAS</h1>
        </div>
        <div className="search-wrapper">
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
          className={`hamburger-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img
            src={hot}
            alt="Menu"
            loading="lazy"
            className="hamburger-icon"
          ></img>
        </button>

        <div className={`ham-categories ${isMenuOpen ? "active" : ""}`}>
          <a onClick={() => setIsMenuOpen(false)}>
            <img src={energy} alt="Lo mas buscado" loading="lazy"></img>
            Lo mas buscado
          </a>
          <a onClick={() => setIsMenuOpen(false)}>
            <img src={pc} alt="Armado de pc" loading="lazy"></img>
            Cosas de pc
          </a>
          <a onClick={() => setIsMenuOpen(false)}>
            <img src={hot} alt="Setup" loading="lazy"></img>
            Setup
          </a>
          <a onClick={() => setIsMenuOpen(false)}>
            <img src={shop} alt="Tiendas" loading="lazy"></img>
            Tiendas
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
