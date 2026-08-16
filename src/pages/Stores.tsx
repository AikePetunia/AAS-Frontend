import Navbar from "@/components/common/Navbar/Navbar";
import { Footer } from "@components/common/Footer/Footer";
import { StoresStats } from "@components/Stats/storesStats/StoresStats";
import { StoreModal } from "../components/StoresList/storeModal/StoreModal";
import { getStores } from "../hooks/getStores";
import { useEffect, useState } from "react";
import { Loading } from "@components/common/Loading/Loading.tsx";
// @ts-ignore
import type { Store } from "@types/stores";

export default function Stores() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //  const [offset, setOffset] = useState(0);
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

  if (loading) return <Loading message="tiendas" type="" />;
  if (error) return <p>Error al cargar: {error}</p>;

  /*
  const handleLoadMore = async () => {
    try {
      const nextOffset = offset + 50;
      const newData = await getStores(nextOffset);

      setStores([...stores, ...newData.hits]);

      setOffset(nextOffset);
    } catch (err) {
      console.error("Error al cargar más:", err);
    }
  };
  */

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
