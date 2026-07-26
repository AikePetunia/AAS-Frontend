import "./ProductModal.css";
import { useState } from "react";
import { HoverStoreInfo } from "./HoverStoreInfo/HoverStoreInfo";

interface Product {
  listing_id: string;
  store_id: string;
  trust_factor: number;
  store_url: string;
  product_url: string;
  image_url: string;
  title_raw: string;
  last_price: number;
}

export function ProductModal({
  listing_id,
  store_id,
  trust_factor,
  product_url,
  image_url,
  title_raw,
  last_price,
}: Product) {
  const getStoreImage = (store_id: string) => {
    const key = `/src/assets/stores/${store_id}.webp`;
    return key || `/src/assets/icons/eye.gif`;
  };

  const getDiscountBadgeClass = (productDiscount: number) => {
    if (productDiscount <= 15) return "green-discount-badge";
    if (productDiscount <= 30) return "yellow-discount-badge";
    return "red-discount-badge";
  };

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  return (
    <>
      <article key={listing_id} className="pm__card">
        <a
          href={product_url}
          target="_blank"
          rel="noopener noreferrer"
          className="pm__product-link"
        >
          <div className="pm__image-wrapper">
            <span className={`pm__discount-badge ${getDiscountBadgeClass(50)}`}>
              50
            </span>
            <img
              src={image_url}
              alt={title_raw}
              className="pm__image"
              loading="lazy"
            />
          </div>

          <div className="pm__body">
            <h3 className="pm__title">{title_raw}</h3>
            <p className="pm__current-price">
              $ {last_price ? last_price.toLocaleString("es-AR") : "Ver Precio"}
            </p>
          </div>
        </a>
        <div
          className="pm__store-wrap"
          onMouseEnter={() => setHoveredCardId(listing_id)}
          onMouseLeave={() => setHoveredCardId(null)}
        >
          <div className="pm__store-info">
            <a href="" className="pm__store-left">
              <img
                src={getStoreImage(store_id)}
                alt={store_id}
                className="pm__store-icon"
                loading="lazy"
              />
              <span className="pm__store-name">{store_id}</span>
            </a>
            <span className="pm__trust-badge">{trust_factor}%</span>
          </div>

          {isHovered && (
            <HoverStoreInfo
              storeName={store_id}
              trustFactor={trust_factor}
              storeUrl=""
            />
          )}
        </div>
      </article>
      <br />
      <br />
    </>
  );
}

export default ProductModal;