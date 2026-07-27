import { StatBox } from "./StatBox/StatBox";
import "./Stats.css";

// todo: estaría bueno que en mobile, transicione entre los 3 statsbox en vez de mostrar los 3

export function Stats() {
  return (
    <>
      <div className="s__container">
        <h3> Algunos números </h3>
        <div className="s__stats-grid">
          <StatBox
            title="Tiendas activas"
            number={30}
            icon="fa-solid fa-store"
            accentColor="#a3e635"
          />
          <StatBox
            title="Productos"
            number={13000}
            icon="fa-solid fa-cube"
            accentColor="#06b6d4"
          />
          <StatBox
            title="Informacion de tiendas"
            number={64}
            icon="fa-solid fa-tag"
            accentColor="#f43f5e"
          />
        </div>
      </div>
    </>
  );
}

export default Stats;
