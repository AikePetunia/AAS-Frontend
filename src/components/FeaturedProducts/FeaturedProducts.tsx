/*
import { getProducts } from "@/hooks/getProducts";
import "./FeaturedProducts.css";
import { useEffect, useState } from "react";
import SearchBar from "../common/SearchBar/SearchBar";
import { Loading } from "@components/common/Loading/Loading";
export function FeaturedProducts() {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getProducts("");
        setProducts(data.hits);
      } catch (err) {
        setError(err.messages);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <Loading message="productos destacados" />;
  if (error) return <p>Error al cargar: {error}</p>;

  */
/*
  const isPhone = window.innerWidth <= 768;
  return (
    <>
      <div className="fp__container">
        <h2
          className={
            isPhone ? "highlight-green center" : "" + `sm__title-w-line`
          }
          style={{ color: "white" }}
        >
          Probá buscar.
        </h2>
        <br />
        <br />
        <div className="fp__test-search">
          <SearchBar />
        </div>
        {/*
        <div className="pm__grid">
          {products.map((product) => (
            <ProductModal
              key={product.listing_id}
              store_id={product.store_id}
              trust_factor={product.trust_factor}
              store_url={product.store_url}
              product_url={product.product_url}
              image_url={product.image_url}
              title_raw={product.title_raw}
              last_price={product.last_price}
            />
          ))}
        </div>
          
      </div>
    </>
  );
 
}


export default FeaturedProducts;
*/
