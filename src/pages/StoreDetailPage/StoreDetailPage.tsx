import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";

import { ProductModal } from "../../components/common/ProductModal/ProductModal";
import { getStoresDetail } from "@/hooks/getStores";
import { Loading } from "@components/common/Loading/Loading.tsx";

import "./StoreDetailPage.css";
export function StoreDetailPage() {
  // obtiene el store_id de los parametros d la ruta
  // si o si tiene que conicidir store_id de useParams con store_id de Routes
  const navigate = useNavigate();
  const { store_id } = useParams();

  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getStoresDetail(store_id);
        console.log("data", data);
        setStore(data);
      } catch (err) {
        setError(err.messages);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // crear componente de carga.
  if (loading) return <Loading message="detalle de tienda" />;
  if (error) {
    return <Navigate to="/404" replace />;
  }

  const products = store.products;
  const getTrustBadgeClass = (trust: number) => {
    if (trust > 85) return "green-trust-badge";
    if (trust > 50) return "yellow-trust-badge";
    return "red-trust-badge";
  };

  console.log("product", products);
  return (
    <>
      <Navbar />
      <div className="sdp__container">
        <div className="sdp__store-info">
          <button
            className="btn-primary sdp__go-back"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Volver</span>
          </button>

          <div>
            <h1 className="sdp__store-name highlight-green">
              {store.store_name}
            </h1>{" "}
            <span className="sdp__store-id">#{store.store_id}</span>
          </div>
          <br />
          <a className="sdp__store-link" href={store.store_url} target="_blank">
            URL: {store.store_url}
          </a>
          <p className="sdp__store-trust">
            Confianza de pagina:{" "}
            <span
              className={`trust-badge ${getTrustBadgeClass(store.trust_factor)}`}
            >
              {" "}
              {store.trust_factor}%
            </span>
          </p>
          <div className="sdp__store-tagging">
            <div className="sdp__store-types-container">
              {store.store_role ??
                store.store_role.map((item, index) => (
                  <span className="sdp__store-type" key={index}>
                    {item} {index < store.store_role.length - 1 && ""}
                  </span>
                ))}
            </div>
            <div className="sdp__store-tags-container">
              {store.tags.map((item, index) => (
                <span className="sdp__store-tags" key={index}>
                  {item} {index < store.tags.length - 1 && " "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="sdp__store_image_url-container">
          <a href={store.store_url} target="_blank">
            <img
              src={store.store_image_url}
              alt={{ store_id } + "image"}
              className="sdp__store-image"
            />
          </a>
        </div>
      </div>
      <div className="pm__grid">
        {products.length != 0 ? (
          products.map((product) => (
            <ProductModal
              key={product.listing_id}
              store_id={product.store_id}
              trust_factor={product.trust_factor}
              store_url={product.store_url}
              product_url={product.product_url}
              image_url={product.image_url}
              title_raw={product.title_raw}
              last_price={product.last_price}
              store_image_url={product.store_image_url}
            />
          ))
        ) : (
          <h3>
            No se han extraido productos de {store.store_name} por el momento
          </h3>
        )}
      </div>
      <Footer />
    </>
  );
}

export default StoreDetailPage;
