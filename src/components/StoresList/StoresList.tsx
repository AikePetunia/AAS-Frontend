import { Link } from "react-router-dom"
import { StoreModal } from "./storeModal/StoreModal.tsx"
import storesDump  from "../../storesDump.json"
import allProducts from "../../allProducts.json"

import "./StoresList.css";

type Store = {
    store_name: string, 
    store_id: string,
    store_url: string,
    store_image: string,
    trust_factor_manual: number,
    seller_type: string[],
    tags: string[]
}

export function StoresList() {
    const { stores } = storesDump;
    const storeToShow: Store[] = Object.values(stores).slice(0, 20)
    const scrapedStoresLength = Object.keys(allProducts).length
    const storesLength = Object.entries(stores).length;

    return (
        <>
            <div className="sl__container sl__container-limit">
                <h2 className="sm__title-w-line">
                    Tiendas que se
                    <span className="highlight-green" style={{margin: "0px 8px"}}> paginan </span>
                     en AAS
                </h2>
                <div className="sl__stats-texts">
                    <span>
                        <i className="fa-solid fa-database"></i>
                         {scrapedStoresLength} tiendas activas
                    </span> 
                    <span> • {storesLength - scrapedStoresLength} proximamente </span>
                </div>
                <br />
                <br />
                <div className="sl__container-listing">
                    {storeToShow.map((store) => (
                        <StoreModal
                            key={store.store_id}
                            name={store.store_name}
                            image={store.store_image}
                            trustFact={store.trust_factor_manual}
                        />
                    ))}
                </div>
                <Link to="/tiendas" className="sl__fade-cta">
                    <button className="sl__see-more-btn">
                    <i className="fa-solid fa-store"></i>
                        Ver todas las tiendas
                    </button>
                </Link>
                <br />
                <br />
            </div> 
        </>
    )
}

// store url debería de ser un href hacai la info interna de coso
export default StoresList;