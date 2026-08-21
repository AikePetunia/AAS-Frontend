import Navbar from "@/components/common/Navbar/Navbar";
import { Footer } from "@components/common/Footer/Footer";
import { StoresStats } from "@components/Stats/storesStats/StoresStats";
import { StoreModal } from "../components/StoresList/storeModal/StoreModal";
import { Loading } from "@components/common/Loading/Loading.tsx";
// @ts-ignore
import type { Store } from "@types/stores";
import APIError from "@/components/common/APIError/APIError";
import { useStores } from "@/hooks/useStores";
export default function Stores() {
  const { data, isLoading, error } = useStores();

  if (isLoading) return <Loading message="tiendas" type="" />;
  if (error) return <APIError />;

  const stores = data.hits;
  return (
    <>
      <Navbar />
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
        {stores.map((store: Store) => (
          <StoreModal
            key={store.store_id}
            name={store.store_name}
            id={store.store_id}
            store_image_url={store.store_image_url}
            trustFact={store.trust_factor}
          />
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
