import Navbar from "@/components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import  storesInfo from "../storesDump.json";
import { StoreModal } from "../components/StoresList/storeModal/StoreModal";

type Store = {
    store_name: string, 
    store_id: string,
    store_url: string,
    store_image: string,
    trust_factor_manual: number,
    seller_type: string[],
    tags: string[]
}


export function Stores() {

  const { stores } = storesInfo;
  const storeArray: Store[] = Object.values(stores).slice(0, 10)
    
  return (
    <>
      <Navbar />
           <h2 className="sm__title-w-line">
                              Tiendas que se
                              <span className="highlight-green" style={{margin: "0px 8px"}}> paginan </span>
                               en AAS
                          </h2>
                          <div className="sl__stats-texts">
                              <span>
                                  <i className="fa-solid fa-database"></i>
                                   X tiendas activas
                              </span> 
                              <span> • Y proximamente </span>
                          </div>
                          <br />
                          <br />
                          <div className="sl__container-listing">
                              {storeArray.map((store) => (
                                  <StoreModal
                                      key={store.store_id}
                                      name={store.store_name}
                                      image={store.store_image}
                                      trustFact={store.trust_factor_manual}
                                  />
                              ))}
                          </div>
                          <br />
                          <br />
          <Footer />
        </>
    );
}

export default Stores;