import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export function SearchBar() {
  const messages = [
    "Ryzen 5 7600x...",
    "Quest 2 VR...",
    "3090...",
    "32Gb Ram...",
    "DDR5...",
  ];

  const navigate = useNavigate();
  const [isMenuOpen] = useState(false);
  const [isFloating] = useState(false);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isMobile] = useState(() => window.innerWidth <= 768);
  const [text, setText] = useState("");
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

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const searchProdcut = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // querys
      navigate("/search?" + text);
    }
  };

  return (
    <>
      <div
        className={`sb__search-wrapper
           ${isFloating ? "floating" : ""} 
           ${isSearching ? "sb__is-searching" : ""}
            `}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsSearching(false);
          }, 750);
        }}
      >
        <div className="sb__input-container">
          <input
            type="text"
            placeholder={messages[index].substring(0, subIndex)}
            aria-label="Search"
            className="sb__search-input"
            value={text}
            onChange={handleChange}
            onClick={() => setIsSearching(true)}
            onKeyDown={searchProdcut}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        {isSearching ? (
          <>
            <div className="separator-red"></div>
            <div className="sb__input-suggestions">
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
