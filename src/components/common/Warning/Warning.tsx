import eye from "@assets/icons/eye.gif";
import "./Warning.css";
import { useState } from "react";
export function Warning() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <div className="warning-container">
          <div className="doted-container warning">
            <img width="110" src={eye} alt="ojito" />
            <h4>¿hola? ¿como has llegado aquí?</h4>
            <p>
              Esta página simplemente está en un desarrollo *muy* maduro, el
              acceso en sí es limitado.
              <br />
              El proyecto avanza lentamente pues:
              <br />
              1. Es un proyecto de aprendizaje y no se usa IA agenticas en
              etapas iniciales.{" "}
              {/*  Una cuestión de aprender fundamentos de las implementaciones que hago*/}
              <br />
              2. Se que es una herramienta. En este caso, se usó de consultor.{" "}
              <br />
              Se puede observar un .agents en .gitignore, solo tiene un prompt
              de tech lead
              <br />
              3. En etapas futuras, cuando ya tenga algo realmente armado, se
              usará como la ia.
              <br />
              Para entender más el por que, invito a que lean este articulo que
              escribí:
              <br />
              <a href="https://aike.tech/blog/project/joyofcoding">
                {" "}
                La diversión de programar
              </a>
              <br /> Cualquier error, sugerencia o simplemente que tengas puedes
              hablarme a mi!
              <br />
              Discord: venus.s.s
            </p>
            <button onClick={() => setIsVisible(false)}>Entiendo</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Warning;
