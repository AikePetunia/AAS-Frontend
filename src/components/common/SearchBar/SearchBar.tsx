import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./SearchBar.css";

export function SearchBar() {
  const messages = [
    "Ryzen 5 7600x...",
    "Quest 2 VR...",
    "3090...",
    "32Gb Ram...",
    "DDR5...",
    "Hatsune Miku...",
  ];

  const navigate = useNavigate();
  const [searchedProduct] = useSearchParams();
  const q = searchedProduct.get("q") ?? "";
  const [isMenuOpen] = useState(false);
  const [isFloating] = useState(false);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isMobile] = useState(() => window.innerWidth <= 768);
  let [text, setText] = useState(q);
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

  const handleChange = (event: any) => {
    setText(event.target.value);
    if (errorMessage) setErrorMessage("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executeSearch();
    }
  };

  const handleClick = (/* event: React.MouseEvent<HTMLButtonElement> */) => {
    executeSearch();
  };

  const executeSearch = () => {
    text = text.trim();
    if (text == "") {
      // querys
      setErrorMessage("Debes de realizar una busqueda.");
      navigate("/");
    } else if (text.includes("*")) {
      setErrorMessage("vivos acá no");
    } else {
      navigate(`/search?q=${text}`);
    }
  };

  // todo: adv de que no puede buscar "" o *
  return (
    <>
      <div
        className={`sb__search-wrapper
           ${isFloating ? "floating" : ""} 
        `}
        onMouseLeave={() => {
          {
            /*} setTimeout(() => {
            setIsSearching(false);
          }, 750); */
          }
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
            required
            onKeyDown={handleKeyDown}
          />
          <i
            className="fa-solid fa-magnifying-glass search-icon"
            onClick={handleClick}
          ></i>
        </div>
        {errorMessage && <p className="sb__error">{errorMessage}</p>}
      </div>
    </>
  );
}

export default SearchBar;
              /* onClick={() => setIsSearching(true)} */
