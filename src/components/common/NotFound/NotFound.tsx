import eye from "@assets/icons/eye.gif";
import "./NotFound.css";
export function NotFound() {
  return (
    <>
      <div className="notfound-container">
        <div className="doted-container notfound">
          <img width="110" src={eye} alt="ojito" />
          <h4>No se encontraron productos ):</h4>
        </div>
      </div>
    </>
  );
}

export default NotFound;

// todo: recomendar buscar en marketplac o mercado libre
