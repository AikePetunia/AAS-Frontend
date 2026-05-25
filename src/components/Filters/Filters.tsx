import { useState } from "react";
import "./Filters.css";

export function Filters() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const stores = ["aca", "deben", "haber", "tiendas"];

  return (
    <aside className="filters-container">
      <div className="filter-header">
        <h3>
          <i className="fa-solid fa-sliders"></i> Filtros
        </h3>
        <button className="clear-filters-btn">Limpiar</button>
      </div>

      <div className="filter-group">
        <label className="filter-title">Precio</label>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Mínimo"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="generic-input"
          />
          <span className="price-separator">-</span>
          <input
            type="number"
            placeholder="Máximo"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="generic-input"
          />
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-title">Tiendas</label>
        <div className="checkbox-list">
          {stores.map((store) => (
            <label key={store} className="checkbox-item">
              <input type="checkbox" className="custom-checkbox" />
              <span className="checkbox-label">{store}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-title">Ordenar por</label>
        <select className="generic-select">
          <option value="relevance">Relevancia</option>
          <option value="price_asc">Menor precio</option>
          <option value="price_desc">Mayor precio</option>
        </select>
      </div>
    </aside>
  );
}
