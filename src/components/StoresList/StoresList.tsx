import { StoreModal } from "./storeModal/StoreModal.tsx"
import storesInfo  from "../../storesDump.json"

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
    const { stores } = storesInfo;
    const storeArray: Store[] = Object.values(stores).slice(0, 5)
    
    return (
        <>
            <div className="sl__container">
                <h2>
                    Tiendas que se
                    <span className="sl_hl-text"> paginan </span>
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
                        />
                    ))}
                   
                </div>
            </div> 
        </>
    )
}
// store url debería de ser un href hacai la info interna de coso
export default StoresList;