import { useParams, Navigate, useNavigate } from "react-router-dom";

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import storesDump from "../storesDump.json";
import armytech from "@stores/armytech.webp";

import "./StoreDetailPage.css";
export function StoreDetailPage() {
  // obtiene el store_id de los parametros d la ruta
  // si o si tiene que conicidir store_id de useParams con store_id de Routes
  const { store_id } = useParams();
  const store = Object.values(storesDump.stores).find(
    (item) => item.store_id === store_id,
  );

  const navigate = useNavigate();
  if (!store) {
    return <Navigate to="/404" replace />;
  }

  const getTrustBadgeClass = (trust: number) => {
    if (trust > 85) return "green-trust-badge";
    if (trust > 50) return "yellow-trust-badge";
    return "red-trust-badge";
  };

  return (
    <>
      <Navbar />
      <div className="sdp__container">
        <div className="sdp__store-info">
          <button
            className="btn-primary sdp__go-back"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Volver</span>
          </button>

          <div>
            <h1 className="sdp__store-name highlight-green">
              {store.store_name}
            </h1>{" "}
            <span className="sdp__store-id">#{store.store_id}</span>
          </div>
          <br />
          <a className="sdp__store-link" href={store.store_url} target="_blank">
            URL: {store.store_url}
          </a>
          <p className="sdp__store-trust">
            Confianza de pagina:{" "}
            <span
              className={`trust-badge ${getTrustBadgeClass(store.trust_factor_manual)}`}
            >
              {" "}
              {store.trust_factor_manual}%
            </span>
          </p>
          <div className="sdp__store-tagging">
            {store.seller_type.map((item, index) => (
              <span className="sdp__store-type" key={index}>
                {item} {index < store.seller_type.length - 1 && ""}
              </span>
            ))}
            <br />
            <br />
            {store.tags.map((item, index) => (
              <span className="sdp__store-tags" key={index}>
                {item} {index < store.tags.length - 1 && " "}
              </span>
            ))}
          </div>
        </div>
        <div className="sdp__store_image-container">
          <a href={store.store_url}>
            <img
              src={armytech}
              alt={{ store_id } + "image"}
              className="sdp__store-image"
            />
          </a>
        </div>
        {/* productos */}
      </div>

      <Footer />
    </>
  );
}

export default StoreDetailPage;
