import eye from "@assets/icons/eye.gif";
import "./Warning.css";
import { useState } from "react";
export function Warning({ message = "" }: { message?: string }) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <div className="warning-container">
          <div className="doted-container warning">
            <img width="110" src={eye} alt="ojito" />
            <h4>¿hola? ¿como has llegado aquí?</h4>
            <p>
              Esta página simplemente está en un desarrollo *muy* maduro.
              <br />
              El proyecto avanza lentamente pues:
              <br />
              1. Es de aprendizaje y no se usa IA.
              <br />
              2. Hacer cosas con ia no es aprendizaje.
              <br />
              3. Se que es una herramienta. En este caso, se usó de consultor.
              <br />
              Cualquier error o sugerencia que tengas puedes hablarme a mi!
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
