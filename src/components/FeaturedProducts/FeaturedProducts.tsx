import { ProductModal } from "../common/ProductModal/ProductModal";
import armyTechData from "../../products/armyTech.json";

import "./FeaturedProducts.css";

export function FeaturedProducts() {
  const products = armyTechData.products.slice(0, 30);
  return (
    <>
      <div className="fp__container">
        <ProductModal
          products={products}
          storeName={armyTechData.store_name}
          storeId={armyTechData.store_id}
          trustFactor={armyTechData.trust_factor_manual}
        />
      </div>
    </>
  );
}

export default FeaturedProducts;
