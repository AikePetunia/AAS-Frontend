import { StatBox } from "./StatBox/StatBox";

import "./Stats.css";

export function Stats() {
  return (
    <>
      <div className="s__container">
        <h3> Algúnos números </h3>
        <div className="s__stats-grid">
          <StatBox
            title="Tiendas con productos"
            number={34}
            icon="fa-solid fa-store"
            accentColor="#a3e635"
          />
          <StatBox
            title="Productos"
            number={15000}
            icon="fa-solid fa-cube"
            accentColor="#06b6d4"
          />
          <StatBox
            title="Informacion de tiendas"
            number={64}
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
  );
}

export default Stats;
