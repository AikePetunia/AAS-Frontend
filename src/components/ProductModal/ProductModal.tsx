import "./ProductModal.css";

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
  trustFactor: number;
}

export function ProductModal({
  products,
  storeName,
  trustFactor,
}: ProductModalProps) {
  // Calcula descuento fake del 25% para demo (en prod vendrá de price_history o similar)
  const calculateDiscount = (price: number) => {
    const originalPrice = Math.round(price * 1.33);
    return originalPrice;
  };

  return (
    <div className="pm__grid">
      {products.map((product) => {
        const originalPrice = calculateDiscount(product.price.value);

        return (
          <article key={product.listing_id} className="pm__card">
            <div className="pm__image-wrapper">
              <span className="pm__discount-badge">TODO</span>
              <img
                src={product.image_url}
                alt={product.title_raw}
                className="pm__image"
                loading="lazy"
              />
            </div>

            {/* Cuerpo de la card */}
            <div className="pm__body">
              <h3 className="pm__title">{product.title_raw}</h3>

              {/* Precio tachado */}
              <p className="pm__original-price">
                $ {originalPrice.toLocaleString("es-AR")}
              </p>

              {/* Precio actual en verde */}
              <p className="pm__current-price">
                $ {product.price.value.toLocaleString("es-AR")}
              </p>

              {/* Info de tienda con badge de confianza */}
              <div className="pm__store-info">
                <span className="pm__store-name">{storeName}</span>
                <span className="pm__trust-badge">{trustFactor}%</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductModal;
