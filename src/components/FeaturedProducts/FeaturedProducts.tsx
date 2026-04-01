import { ProductModal } from "../common/ProductModal/ProductModal";
import armyTechData from "../../products/armyTech.json";

import "./FeaturedProducts.css";

export function FeaturedProducts() {
  const products = armyTechData.products.slice(0, 3);
  const isPhone = window.innerWidth <= 768;
  return (
    <>
      <div className="fp__container">
        <h2 className={isPhone ? "highlight-green" : "" + `sm__title-w-line`} style={{color: "white"}}>
            Productos destacados
        </h2>
        <br />
        <br />
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
