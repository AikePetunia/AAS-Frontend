import { Link, useLocation } from "react-router";
import "./APIError.css";
import eyeError from "@assets/icons/eyeError.gif";

export function APIError() {
  const page = useLocation();
  return (
    <>
      <div className="ae__container">
        <img src={eyeError} alt="Algo salió mal" />
        <div>
          <p>Oh no! Algo exploto y no es tu culpa.</p>
          <p> Probá volver más tarde</p>
          {page.pathname === "/tiendas" ? (
            <Link to="/" className="nf__link-button btn">
              <button className="nf__button nf__button--primary">
                Volver al inicio
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default APIError;
