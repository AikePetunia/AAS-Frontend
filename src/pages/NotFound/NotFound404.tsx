import { Link, useNavigate } from "react-router-dom";
import eye from "@assets/icons/eye.gif";
import { Footer } from "@components/common/Footer/Footer";
import "./NotFound404.css";

// como se detecta de donde es el error? hice un 404.. pero debería de ser generico.

export function NotFound404() {
  const navigate = useNavigate();

  return (
    <>
      <div className="nf__page">
        <div className="nf__container">
          <h1>Algo no salió bien ):</h1>
          <img src={eye} alt="eye-aas" />
          <div className="nf__actions">
            <Link to="/" className="nf__link-button btn">
              <button className="nf__button nf__button--primary">
                Volver al home
              </button>
            </Link>
            <button
              className="nf__button nf__button--secondary"
              onClick={() => navigate(-1)}
            >
              Ir hacia atrás
            </button>
          </div>
          <footer className="nf__footer">
            <h3>¿crees que es un error?</h3>
            <a href="">Reportalo aqui (FALTA LINK)</a>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound404;
