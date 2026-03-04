import "./ProductModal.css";
import { useState } from "react";
import { HoverStoreInfo } from "./HoverStoreInfo/HoverStoreInfo";

interface Product {
  listing_id: string;
  title_raw: string;
  image_url: string;
  price: {
    raw: string;
    value: number;
    currency: string;
  };
  product_url: string;
}

interface ProductModalProps {
  products: Product[];
  storeName: string;
  storeId: string;
  trustFactor: number;
}

export function ProductModal({
  products,
  storeName,
  storeId,
  trustFactor,
}: ProductModalProps) {
  const getStoreImage = (storeName: string) => {
    const key = `/src/assets/stores/${storeName}.webp`;
    return key || `/src/assets/icons/eye.gif`;
  };

  const calculateDiscount = (price: number) => {
    const originalPrice = Math.round(price * 1.33);
    return originalPrice;
  };

  const getDiscountBadgeClass = (productDiscount: number) => {
    if (productDiscount <= 15) return "green-discount-badge";
    if (productDiscount <= 30) return "yellow-discount-badge";
    return "red-discount-badge";
  };

  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <div className="pm__grid">
      {products.map((product) => {
        const originalPrice = calculateDiscount(product.price.value);
        const isHovered = hoveredCardId === product.listing_id;

        return (
          <article key={product.listing_id} className="pm__card">
            <a
              href={product.product_url}
              target="_blank"
              rel="noopener noreferrer"
              className="pm__product-link"
            >
              <div className="pm__image-wrapper">
                <span
                  className={`pm__discount-badge ${getDiscountBadgeClass(50)}`}
                >
                  50
                </span>
                <img
                  src={product.image_url}
                  alt={product.title_raw}
                  className="pm__image"
                  loading="lazy"
                />
              </div>

              <div className="pm__body">
                <h3 className="pm__title">{product.title_raw}</h3>
                <p className="pm__original-price">
                  $ {originalPrice.toLocaleString("es-AR")}
                </p>
                <p className="pm__current-price">
                  $ {product.price.value.toLocaleString("es-AR")}
                </p>
              </div>
            </a>

            <div
              className="pm__store-wrap"
              onMouseEnter={() => setHoveredCardId(product.listing_id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <div className="pm__store-info">
                <a href="" className="pm__store-left">
                  <img
                    src={getStoreImage(storeId)}
                    alt={storeName}
                    className="pm__store-icon"
                    loading="lazy"
                  />
                  <span className="pm__store-name">{storeName}</span>
                </a>
                <span className="pm__trust-badge">{trustFactor}%</span>
              </div>

              {isHovered && (
                <HoverStoreInfo
                  storeName={storeName}
                  trustFactor={trustFactor}
                  storeUrl=""
                />
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductModal;