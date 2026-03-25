import { StatBox } from "./StatBox/StatBox"
import storesDump from "../../storesDump.json"

import "./Stats.css"

export function Stats() {

    const { stores } = storesDump;
    const storesLength = Object.entries(stores).length;
    console.log("tiendas", storesLength)

    return <>
        <div className="s__container">
            <h3> Algúnos números </h3>
            <StatBox />
        </div>
    </>
} 

export default Stats;