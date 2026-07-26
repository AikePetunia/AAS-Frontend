import { Link } from "react-router-dom"
import { StoreModal } from "./storeModal/StoreModal.tsx";
import { getStores } from "../../hooks/getStores.ts";
import { useEffect, useState } from "react";
import "./StoresList.css";

type Store = {
  store_name: string;
  store_id: string;
  store_url: string;
  store_image: string;
  trust_factor: number;
  seller_type: string[];
  tags: string[];
};

export function StoresList() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getStores("");
        setStores(data.hits);
      } catch (err) {
        setError(err.messages);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Cargando tiendas...</p>;
  if (error) return <p>Error al cargar: {error}</p>;
  const scrapedStoresLength = stores.length - 20;
  const storesLength = Object.entries(stores).length;


  return (
    <>
      <div className="sl__container sl__container-limit">
        <div className="sl__container sl__limited-height">
          <h2 className="sm__title-w-line">
            Tiendas que
            <span className="highlight-green" style={{ margin: "0px 8px" }}>
              {" "}
              paginan{" "}
            </span>
            en AAS
          </h2>
          <div className="sl__stats-texts">
            <span>
              <i className="fa-solid fa-database"></i>
              {scrapedStoresLength} tiendas activas
            </span>
            <span> • {storesLength - scrapedStoresLength} proximamente </span>
          </div>
          <br />
          <br />
          <div className="sl__container-listing">
            {stores.map((store) => (
              <StoreModal
                key={store.store_id}
                name={store.store_name}
                id={store.store_id}
                image={store.store_image}
                trustFact={store.trust_factor}
              />
            ))}
          </div>
          <Link to="/tiendas" className="sl__fade-cta">
            <button className="sl__see-more-btn">
              <i className="fa-solid fa-store"></i>
              Ver todas las tiendas
            </button>
          </Link>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

// store url debería de ser un href hacai la info interna de coso
export default StoresList;