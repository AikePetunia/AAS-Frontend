import { useParams, Navigate, useNavigate } from "react-router-dom";

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import storesDump from "../storesDump.json";

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
      <button onClick={() => navigate(-1)}>
        <h3> Volver hacia atras</h3>
      </button>
      <h1>{store.store_name}</h1>
      <p>Trust: {store.trust_factor_manual}%</p>
      <a href={store.store_url} target="_blank" rel="noreferrer">
        Visitar tienda
      </a>
      <Footer />
    </>
  );
}

export default StoreDetailPage;
