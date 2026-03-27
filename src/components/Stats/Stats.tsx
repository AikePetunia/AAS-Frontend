import { StatBox } from "./StatBox/StatBox"
import { useEffect, useState}  from "react"
import { animate } from "animejs"

import storesDump from "../../storesDump.json" // no srive xq son tiendas, pero no estan todas scrapeadas
import allProducts from "../../allProducts.json"

import "./Stats.css"

export function Stats() {

    const scrapedStoresLength = Object.keys(allProducts).length
    
    const productsLength = Object.values(allProducts).reduce((total, store) => {
        return total + (Array.isArray(store) ? store.length : 0)
    }, 0)

    const { stores } = storesDump;
    const storesLength = Object.entries(stores).length;


   
    const [animatedStats, setAnimatedStats] = useState([0, 0, 0])

    useEffect(() => {
        const targets = [scrapedStoresLength, productsLength, storesLength]

        const animations = targets.map((target, index) => {
            const counter = { value: 0 }

            return animate(counter, {
                value: target,
                duration: 1000,
                easing: "easeOutExpo",
                delay: index * 500,
                onUpdate: () => {
                    setAnimatedStats((prev) => {
                        const next = [...prev]
                        next[index] = Math.round(counter.value)
                        return next
                    })
                }
            })
        })

        const entrance = animate(".s__stats-grid > *", {
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 700,
            delay: (_el: unknown, i: number) => i * 120,
            easing: "easeOutCubic"
        })

        return () => {
            animations.forEach((a) => a?.pause?.())
            entrance?.pause?.()
        }
    }, [scrapedStoresLength, productsLength, storesLength])

    
    return <>
        <div className="s__container">
            <h3> Algúnos números </h3>
            <div className="s__stats-grid">
                <StatBox
                    title="Tiendas con productos"
                    number={animatedStats[0]}
                    icon="fa-solid fa-store"
                    accentColor="#a3e635"
                />
                <StatBox
                    title="Productos"
                    number={animatedStats[1]}
                    icon="fa-solid fa-cube"
                    accentColor="#06b6d4"
                />
                <StatBox
                    title="Informacion de tiendas"
                    number={animatedStats[2]}
                    icon="fa-solid fa-tag"
                    accentColor="#f43f5e"
                />
                {/* 
                <StatBox
                    title="% de subida de precios"
                    number={storesLength}
                    icon="fa-solid fa-tag"
                    accentColor="#f43f5e"
                />
                */}
            </div>
        </div>
    </>
} 

export default Stats;