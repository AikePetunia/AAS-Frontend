import "./MainSection.css";
import { useState, useEffect } from "react";
  const messages = [
    "componentes",
    "decorativos",
    "keycaps",
    "gameroom",
    "integraciones",
    "mobiliario",
  ];

export function MainSection() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [subIndex, setSubIndex] = useState(0);
  const [index, setIndex] = useState(0);

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
      isDeleting ? 150 : 300,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  const isPhone = window.innerWidth <= 768;

  return (
    <section className="ms">
      <div className="ms__hero">
        <h1 className="ms__title">
          Que la parte <span className="highlight-green">aburrida</span> de
          buscar{" "}
          <span className="ms__changing-span">
            {messages[index].substring(0, subIndex)}
          </span>
          , <span className="highlight-gray">página por página,</span>
          <br />
          deje de ser <span className="highlight-red">agotador</span>
        </h1>
      </div>

      {/*  <div className="ms__extra-features">
        <p>
          <br />y que la compu no es lo único que importa, por que el donde
          jugas, también importa
        </p>
      </div>
*/}
      <div className="doted-container">
        {isPhone ? (
          <>
            <p className="ms__doted-text">
              En <strong>ARmar</strong>, salís tomando la decision por el{" "}
              <span className="highlight-green">precio</span> y la{" "}
              <span className="highlight-green">buena tienda</span>.
            </p>
          </>
        ) : (
          <>
            <p className="ms__doted-text">
              En <strong>ARmar</strong>, salís tomando la decision
            </p>
            <p className="ms__doted-text">
              por el <span className="highlight-green">precio</span> y la{" "}
              <span className="highlight-green">buena tienda</span>.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default MainSection;
