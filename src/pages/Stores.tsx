import Navbar from "@/components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import { StoreModal } from "../components/StoresList/storeModal/StoreModal";
import { getStores } from "../hooks/getStores";
import { useEffect, useState } from "react";
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
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
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
      <br />
      <br />
      <button onClick={handleLoadMore}>Mostrar más tiendas</button>
      <Footer />
    </>
  );
}
