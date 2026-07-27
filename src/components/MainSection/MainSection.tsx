import "./MainSection.css";

export function MainSection() {
  
  const isPhone = window.innerWidth <= 768;

  return (
    <section className="ms">
      <div className="ms__hero">
        <h1 className="ms__title">
          Que la parte <span className="highlight-green">aburrida</span> de
          buscar componentes,{" "}
          <span className="highlight-gray">página por página,</span>
          <br />
          deje de ser <span className="highlight-red">agotador</span>
        </h1>
      </div>
      <div className="ms__extra-features">
        <p>
          <br />y que la compu no es lo único que importa, por que el donde
          jugas, también importa
        </p>
      </div>

      <div className="doted-container">
        {isPhone ? (
          <>
            <p className="ms__doted-text">
              En <strong>AAS</strong>, salís de acá cuando tomás una decisión,
              por el <span className="highlight-green">precio</span> y la{" "}
              <span className="highlight-green">buena tienda</span>.
            </p>
          </>
        ) : (
          <>
            <p className="ms__doted-text">
              En <strong>AAS</strong>, salís de acá cuando tomás una decisión,
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
