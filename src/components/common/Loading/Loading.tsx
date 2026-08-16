import eye from "@assets/icons/eye.gif";
import "./Loading.css";
export function Loading({
  message = "",
  type = "",
}: {
  message?: string;
  type: string;
}) {
  return (
    <>
      <div className={`loading-container ` + type}>
        <div className="doted-container loading">
          <img width="110" src={eye} alt="ojito" />
          <h4>Cargando {message}...</h4>
        </div>
      </div>
    </>
  );
}

export default Loading;
