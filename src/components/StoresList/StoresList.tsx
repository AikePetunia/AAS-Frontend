import { Link } from "react-router-dom"
import { StoreModal } from "./storeModal/StoreModal.tsx";
import { StoresStats } from "@components/Stats/storesStats/StoresStats.tsx";
import { getStores } from "../../hooks/getStores.ts";
import { useEffect, useState } from "react";
import "./StoresList.css";
import { Loading } from "@components/common/Loading/Loading.tsx";
// @ts-ignore
import type { Store } from "@types/stores.ts";

export function StoresList() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getStores();
        setStores(data.hits);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <Loading message="tiendas" />;
  if (error) return <p>Error al cargar: {error}</p>;

  return (
    <>
      <div className="sl__container sl__container-limit">
        <div className="sl__container sl__limited-height">
          <h2 className="sm__title-w-line">
            Tiendas que
            <span className="highlight-green" style={{ margin: "0px 8px" }}>
              {" "}
              encontrás{" "}
            </span>
            en ARmar
          </h2>
          <StoresStats />
          <br />
          <br />
          <div className="sl__container-listing">
            {stores.slice(0, 8).map((store: Store) => (
              <StoreModal
                key={store.store_id}
                name={store.store_name}
                id={store.store_id}
                store_image_url={store.store_image_url}
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