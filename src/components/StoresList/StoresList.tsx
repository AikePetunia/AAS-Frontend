import "./StoresList.css";
import storesInfo  from "../../storesDump.json"
import { StoreModal } from "./storeModal/StoreModal.tsx"

export function StoresList() {

    console.log(storesInfo)
    
    return (
        <>
            <div>
                <h3>Tiendas que se paginan en AAS</h3>
                <div>
                    <svg></svg> 
                    <span>12 tiendas activas</span> -
                    <span> 2 proximamente </span>
                </div>
                    <StoreModal />
            </div> 
        </>
    )
}

export default StoresList;