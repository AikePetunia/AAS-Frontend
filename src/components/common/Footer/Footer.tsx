import "./Footer.css";
import github from "@icons/github.svg";
export function Footer() {
  return (
    <>
      <footer>
        <div className="project-information">
          <div className="project-div">
            <p>
              Este proyecto es de puro aprendizaje.
              <br />
              No pretendo competir con nadie, mas que conmigo misma.
            </p>
          </div>
          <div className="project-div">
            <p>
              Este proyecto es open source y puede aportar{" "}
              <a href="#">
                aquí
                <img
                  src={github}
                  width={20}
                  height={20}
                  className="svg-icon"
                  alt="repo link"
                ></img>{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div className="author-information">
        <p>V0.0.1 (Alpha)</p>
        <p>
          Esta pagina fue llevada a cabo por{" "}
          <a href="https://aike.tech" target="_blank">
            Aike
          </a>
          <br />
          AAS es un juego con mi mismo nombre, <br />
          "Aike armar un setup"
        </p>
      </div>
      <div className="warnings">
        <a href="">Terminos y condiciones</a>
      </div>
    </>
  );
}

export default Footer;
