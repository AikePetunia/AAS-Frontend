import { Navbar } from "@components/common/Navbar/Navbar";
import { Footer } from "@components/common/Footer/Footer";
import { ProductModal } from "@components/common/ProductModal/ProductModal";
import { Filters } from "@components/Filters/Filters";
import { getProducts } from "@/hooks/getProducts";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NotFound } from "@components/common//NotFound/NotFound";
import { Loading } from "@components/common/Loading/Loading.tsx";
import "./Search.css";
import NotFound404 from "../NotFound404/NotFound404";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedProduct = searchParams.get("q");
  const sortBy = searchParams.get("sort");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const filters = [];

  if (sortBy) filters.push(`sort=${sortBy}`);
  if (minPrice) filters.push(`minPrice=${minPrice}`);
  if (maxPrice) filters.push(`maxPrice=${maxPrice}`);

  useEffect(() => {
    if (!searchedProduct) return;

    async function loadData() {
      try {
        setLoading(true);
        const data = await getProducts(searchedProduct, filters);
        setProducts(data.hits);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [searchedProduct, sortBy, minPrice, maxPrice]);

  if (loading) return <Loading message="cargando productos..." />;
  if (error) return <NotFound404 />;

  const isPhone = window.innerWidth >= 758;

  return (
    <>
      <Navbar />
      {!isPhone ? (
        <>
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="sr__filter-mobile"
          >
            <i className="fa-solid fa-sliders"></i> Filtros
          </button>

          <div className="sr__filter-mobile-container">
            {showMobileFilter ? <Filters /> : ""}
          </div>
        </>
      ) : (
        ""
      )}

      <div className="sr__container">
        {!isPhone ? "" : <Filters />}

        <div className="pm__grid">
          {products.length != 0 ? (
            products.map((product) => (
              <ProductModal
                key={product.listing_id}
                store_id={product.store_id}
                trust_factor={product.trust_factor}
                product_url={product.product_url}
                image_url={product.image_url}
                title_raw={product.title_raw}
                last_price={product.last_price}
                store_image_url={product.store_image_url}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
