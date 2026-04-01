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

      <div className="ms__posta">
        {isPhone ? (
          <>
        <p className="ms__posta-text">
          En <strong>AAS</strong>, salís de acá cuando tomás una decisión,
          por el <span className="highlight-green">precio</span> y la{" "}
          <span className="highlight-green">buena tienda</span>.
        </p>
            </>
        ) : (
        <>
         <p className="ms__posta-text">
          En <strong>AAS</strong>, salís de acá cuando tomás una decisión,
        </p>
        <p className="ms__posta-text">
          por el <span className="highlight-green">precio</span> y la{" "}
          <span className="highlight-green">buena tienda</span>.
        </p>
        </>
        )}
       
      </div>
      {/* some stass?? 
      <div className="ms__stats">
        <div className="ms__stat-card glass-effect">
          <span className="ms__stat-value highlight-green">∞</span>
          <span className="ms__stat-label">TIENDAS</span>
        </div>
        <div className="ms__stat-card glass-effect">
          <span className="ms__stat-value highlight-green">∞</span>
          <span className="ms__stat-label">TIEMPO AHORRADO</span>
        </div>
        <div className="ms__stat-card glass-effect">
          <span className="ms__stat-value highlight-green">∞</span>
          <span className="ms__stat-label">PLATA AHORRADA</span>
        </div>
      </div>
      <div className="ms__scroll-hint">
        <span className="ms__sparkle" aria-hidden="true">
          ✦
        </span>
          </div>
          */}
    </section>
  );
}

export default MainSection;
