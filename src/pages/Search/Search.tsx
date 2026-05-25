import { Navbar } from "@components/common/Navbar/Navbar";
import { Footer } from "@components/common/Footer/Footer";
import { ProductModal } from "@components/common/ProductModal/ProductModal";
import { Filters } from "@components/Filters/Filters";
import armyTechData from "../../products/armyTech.json";

import "./Search.css";
export function Search() {
  const products = armyTechData.products.slice(0, 3);
  return (
    <>
      <Navbar />
      <div className="sr__container">
        <Filters />
        <ProductModal
          products={products}
          storeName={armyTechData.store_name}
          storeId={armyTechData.store_id}
          trustFactor={armyTechData.trust_factor_manual}
        />
      </div>
      <Footer />
    </>
  );
}

export default Search;
