import "./Filters.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const [draftFilters, setDraftFilters] = useState({
    sort: searchParams.get("sort") ?? "",
    minPrice: searchParams.get("minPrice") ?? "",
    maxPrice: searchParams.get("maxPrice") ?? "",
  });

  const hasFilters =
    !!searchParams.get("sort") ||
    !!searchParams.get("minPrice") ||
    !!searchParams.get("maxPrice");

  const handleChange = (key: string, value: string) => {
    setDraftFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyFilters = () => {
    const next = new URLSearchParams(searchParams);

    Object.entries(draftFilters).forEach(([key, value]) => {
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
    });

    // Otros filtros = otro set de resultados, se vuelve a la primera pagina.
    next.delete("page");
    setSearchParams(next);
    setIsOpen(false);
  };

  const cleanFilters = () => {
    const next = new URLSearchParams(searchParams);
    Object.keys(draftFilters).forEach((key) => {
      next.delete(key);
    });
    next.delete("page");
    setSearchParams(next);
    setDraftFilters({ sort: "", minPrice: "", maxPrice: "" });
  };

  return (
    <>
      <aside className="filters-container">
        <div className="filter-header">
          <h3>
            <i className="fa-solid fa-sliders"></i> Filtros
          </h3>
        </div>
        {/*
        ordenar por:
        relevancia (Normal)
        precio bajo
        preico alto
        */}
        <div className="filter-group">
          <label className="filter-title">Ordenar por</label>
          <select
            value={draftFilters.sort}
            onChange={(e) => handleChange("sort", e.target.value)}
            className="generic-select"
          >
            <option value="">Relevancia</option>
            <option value="last_price:asc">Menor precio</option>
            <option value="last_price:desc">Mayor precio</option>
            <option value="trust_factor:asc"> Confianza de página</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-title">Precio</label>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Mínimo"
              value={draftFilters.minPrice}
              inputMode="numeric"
              onKeyDown={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => {
                handleChange("minPrice", e.target.value);
              }}
              className="generic-input"
            />
            <span className="price-separator">-</span>
            <input
              type="number"
              placeholder="Máximo"
              value={draftFilters.maxPrice}
              onKeyDown={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              inputMode="numeric"
              onChange={(e) => handleChange("maxPrice", e.target.value)}
              className="generic-input"
            />
          </div>
        </div>
        <button onClick={applyFilters}>Aplicar</button>
        <button
          onClick={cleanFilters}
          className={`filter_clean-btn  ${hasFilters ? "active" : "inactive"}`}
        >
          <i className="fa-solid fa-trash"></i>
          Limpiar Filtros
        </button>
        {/* 
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
      */}
      </aside>
    </>
  );
}
