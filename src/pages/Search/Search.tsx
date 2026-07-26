import { Navbar } from "@components/common/Navbar/Navbar";
import { Footer } from "@components/common/Footer/Footer";
import { ProductModal } from "@components/common/ProductModal/ProductModal";
import { Filters } from "@components/Filters/Filters";
import { getProducts } from "@/hooks/getProducts";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Search.css";

export function Search() {

  const [searchParams] = useSearchParams();
  const searchedProduct = searchParams.get("q");
  console.log("producto buscado", searchedProduct);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!searchedProduct) return;

    async function loadData() {
      try {
        setLoading(true);
        const data = await getProducts(searchedProduct);
        setProducts(data.hits);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [searchedProduct]);

  if (loading) return <p>Cargando productos xasd ...</p>;
  if (error) return <p>Error al cargar: {error}</p>;

  console.log("products", products);
  return (
    <>
      <Navbar />
      <div className="sr__container">
        <Filters />
        <div className="pm__grid">
          {products.map((product) => (
            <ProductModal
              key={product.listing_id}
              store_id={product.store_id}
              trust_factor={product.trust_factor}
              product_url={product.product_url}
              image_url={product.image_url}
              title_raw={product.title_raw}
              last_price={product.last_price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
