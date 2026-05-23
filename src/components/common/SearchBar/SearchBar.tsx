import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import { splitText, animate, stagger } from "animejs";

/*
tienen que apsar 3 cosas:
- animar el ojo para que mire el search bar (y irse)
- desaparezca el ojo del menu (aas)
- aparezca un dropdown con opciones
*/

export function SearchBar() {
  const [index, setIndex] = useState(0);
  const messages = [
    "Ryzen 5 7600x...",
    "Quest 2 VR...",
    "3090...",
    "32Gb Ram...",
    "DDR5...",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { chars } = splitText(containerRef.current, { chars: true });
      animate(chars, {
        y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 750, ease: "in(3)" }],
        duration: 750,
        ease: "out(3)",
        delay: stagger(50),
        loop: true,
      });
    }
  }, [index]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      <input type="text" aria-label="Search" className="search-input"></input>

      <span ref={containerRef} className="search-suggestions">
        {messages[index]}
      </span>
      <i className="fa-solid fa-magnifying-glass search-icon "></i>
    </>
  );
}

export default SearchBar;
