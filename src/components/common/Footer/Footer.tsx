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
              humanly made by{" "}
              <a href="https://aike.tech" target="_blank">
                Aike
              </a>{" "}
            </p>
          </div>
        </div>
      </footer>
      <div className="warnings">
        <a href="https://github.com/AikePetunia/AAS-Frontend#contribuciones-y-apoyo">
          Apoya el proyecto desde aca 🧉
        </a>
      </div>

      <br />
      <br />
    </>
  );
}

export default Footer;
