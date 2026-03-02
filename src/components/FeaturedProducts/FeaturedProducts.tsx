import { ProductModal } from "../ProductModal/ProductModal";
import armyTechData from "../../products/armyTech.json";

import "./FeaturedProducts.css";

export function FeaturedProducts() {
  const products = armyTechData.products.slice(0, 1230);
  return (
    <>
      <div className="fp__container">
        <ProductModal
          products={products}
          storeName={armyTechData.store_name}
          trustFactor={armyTechData.trust_factor_manual}
        />
      </div>
    </>
  );
}

export default FeaturedProducts;
