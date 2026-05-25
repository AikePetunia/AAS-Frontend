import { useEffect, useState } from "react";
import "./SearchBar.css";

export function SearchBar() {
  const messages = [
    "Ryzen 5 7600x...",
    "Quest 2 VR...",
    "3090...",
    "32Gb Ram...",
    "DDR5...",
  ];

  const [isMenuOpen] = useState(false);
  const [isFloating] = useState(false);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isMobile] = useState(() => window.innerWidth <= 768);

  const isDrawerMode = isFloating || isMobile;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isDrawerMode ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isDrawerMode]);

  useEffect(() => {
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % messages.length);
      return;
    }

    if (!isDeleting && subIndex === messages[index].length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 30 : 100,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, messages]);

  // resta y suma partes del string (substring -1, +1)

  return (
    <>
      <div
        className={`search-wrapper
           ${isFloating ? "floating" : ""} 
           ${isSearching ? "is-searching" : ""}
            `}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsSearching(false);
          }, 750);
        }}
      >
        <div className="search-input-container ">
          <input
            type="text"
            placeholder={messages[index].substring(0, subIndex)}
            aria-label="Search"
            className="search-input"
            onClick={() => setIsSearching(true)}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        {isSearching ? (
          <>
            <div className="separator"></div>
            <div className="search-input-suggestions">
              {messages.map((item, key) => (
                <span key={key}>{item}</span>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default SearchBar;
