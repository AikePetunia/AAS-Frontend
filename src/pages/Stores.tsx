import Navbar from "@/components/common/Navbar/Navbar";
import { Footer } from "@components/common/Footer/Footer";
import { StoresStats } from "@components/Stats/storesStats/StoresStats";
import { StoreModal } from "../components/StoresList/storeModal/StoreModal";
import { getStores } from "../hooks/getStores";
import { useEffect, useState } from "react";
import { Loading } from "@components/common/Loading/Loading.tsx";
type Store = {
  store_name: string;
  store_id: string;
  store_url: string;
  store_image: string;
  trust_factor: number;
  seller_type: string[];
  tags: string[];
};

export default function Stores() {
  const [stores, setStores] = useState<Store>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //  const [offset, setOffset] = useState(0);
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

  if (loading) return <Loading message="tiendas" />;
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
        Tiendas que se
        <span className="highlight-green" style={{ margin: "0px 8px" }}>
          {" "}
          paginan{" "}
        </span>
        en AAS
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
            image={store.store_image}
            trustFact={store.trust_factor}
          />
        ))}
      </div>
      <br />
      <br />
      {/* <button onClick={handleLoadMore}>Mostrar más tiendas</button> */}
      <Footer />
    </>
  );
}
