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

  return (
    <>
      <Navbar />
      <div className="sdp__container">
        <div className="sdp__store-info">
          <button className="btn-primary" onClick={() => navigate(-1)}>
            <span> Volver hacia atras</span>
          </button>
          <h1>{store.store_name}</h1>
          <h2>{store.store_id}</h2>
          <h2>{store.store_url}</h2>
          <p>{store.trust_factor_manual}%</p>
          <h2>{store.seller_type}</h2>
          <h2>{store.tags}</h2>
        </div>
        <div className="sdp__store_image">
          <img src={armytech} alt={{ store_id } + "image"} />
        </div>
        {/* productos ?? */}
      </div>

      <Footer />
    </>
  );
}

export default StoreDetailPage;
