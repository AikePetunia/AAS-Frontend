import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="project-information">
          <div className="project-div" style={{ textAlign: "left" }}>
            <p>
              Este proyecto es de puro aprendizaje.
              <br />
              No pretendo competir con nadie, mas que conmigo misma.
            </p>
            <br />
            <p>
              Este proyecto es open source y podes aportar o ver el codigo{" "}
              <a href="#">
                aquí <i className="fa-brands fa-github"></i>
              </a>
            </p>
          </div>
          <div className="project-div-right">
            <p>V0.0.1 </p>
            <br />

            <p>
              Esta pagina fue llevada a cabo por{" "}
              <a href="https://aike.tech" target="_blank">
                Aike
              </a>{" "}
              AAS es un juego con mi mismo nombre, "Aike armar un setup".
              Horrendo el nombre, pero no se me ocurre otro xD
            </p>
          </div>
        </div>
      </footer>
      <div className="warnings">
        <a href="https://ko-fi.com/aikemilanesa">
          Apoya el proyecto desde aca 🧉
        </a>
      </div>

      <br />
      <br />
    </>
  );
}

export default Footer;
