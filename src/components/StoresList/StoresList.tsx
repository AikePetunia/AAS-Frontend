import { Link } from "react-router-dom"
import { StoreModal } from "./storeModal/StoreModal.tsx";
import { StoresStats } from "@components/Stats/storesStats/StoresStats.tsx";
import "./StoresList.css";
import { Loading } from "@components/common/Loading/Loading.tsx";
import { APIError } from "@components/common/APIError/APIError.tsx";
// @ts-ignore
import type { Store } from "@types/stores.ts";
import { useStores } from "@/hooks/useStores.ts";

export function StoresList() {
  const { data, isLoading, error } = useStores();
  if (isLoading) return <Loading message="tiendas" type="storelist" />;
  if (error) return <APIError />;

  const stores = data.hits;
  // anda cuando se recibe fetch de sotres

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