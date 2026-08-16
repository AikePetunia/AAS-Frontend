import { Navbar } from "@components/common/Navbar/Navbar";
import { Footer } from "@components/common/Footer/Footer";
import { ProductModal } from "@components/common/ProductModal/ProductModal";
import { Filters } from "@components/Filters/Filters";
import { getProducts } from "@/hooks/getProducts";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NotFound } from "@components/common//NotFound/NotFound";
import { Loading } from "@components/common/Loading/Loading.tsx";
import NotFound404 from "../NotFound404/NotFound404";
// @ts-ignore
import type { Products } from "@types/products";
import "./Search.css";

const LIMIT = 20;

function buildPageList(current: number, total: number): (number | "...")[] {
  const pages: (number | "...")[] = [];
  let last = 0;

  for (let page = 1; page <= total; page++) {
    const isEdge = page === 1 || page === total;
    const isNearCurrent = page >= current - 1 && page <= current + 1;
    if (!isEdge && !isNearCurrent) continue;

    if (last && page - last > 1) pages.push("...");
    pages.push(page);
    last = page;
  }

  return pages;
}

export function Search() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedProduct = searchParams.get("q");
  const sortBy = searchParams.get("sort");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [pageDraft, setPageDraft] = useState("");

  // La pagina vive en la URL, no en estado: asi ?page=5 se respeta al entrar
  // directo, al recargar y al usar atras/adelante del navegador.
  const parsedPage = Number(searchParams.get("page"));
  const page = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  const totalPages = Math.max(1, Math.ceil(totalHits / LIMIT));

  const goToPage = (nextPage: number) => {
    const target = Math.min(Math.max(nextPage, 1), totalPages);
    if (target === page) return;

    // se copian los params actuales para no perder q ni los filtros
    const next = new URLSearchParams(searchParams);
    if (target === 1) {
      next.delete("page");
    } else {
      next.set("page", `${target}`);
    }
    setSearchParams(next);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const jumpToDraftPage = () => {
    const target = Number(pageDraft);
    if (!Number.isInteger(target) || target < 1) return;
    goToPage(target);
    setPageDraft("");
  };

  useEffect(() => {
    const query = searchedProduct;
    if (!query || query === "") {
      navigate("/");
      return;
    } 
    const filters: string[] = [];
    if (sortBy) filters.push(`sort=${sortBy}`);
    if (minPrice) filters.push(`minPrice=${minPrice}`);
    if (maxPrice) filters.push(`maxPrice=${maxPrice}`);

    let cancelled = false;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts(query, filters, (page - 1) * LIMIT);
        if (cancelled) return;

        setProducts(data.hits);
        setTotalHits(data.estimatedTotalHits ?? 0);
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadData();
    return () => {
      cancelled = true;
    };
  }, [searchedProduct, sortBy, minPrice, maxPrice, page]);

  // Si la URL trae una pagina fuera de rango (?page=555 con 3 paginas), se
  // corrige a la ultima disponible en vez de mostrar una lista vacia.
  useEffect(() => {
    if (totalHits === 0 || page <= totalPages) return;

    const next = new URLSearchParams(searchParams);
    next.set("page", `${totalPages}`);
    setSearchParams(next, { replace: true });
  }, [page, totalPages, totalHits]);

  if (loading) return <Loading message="productos..." type="" />;
  if (error) return <NotFound404 />;

  const pageList = buildPageList(page, totalPages);

  // si no hay products, no hay filtros.  Muestra "No h"
  // si no hay products, los filtros tienen una posicion distinta.
  const isPhone = window.innerWidth <= 758;

  return (
    <>
      <Navbar />
      {products.length === 0 ? (
        <div className="sr__container error">
          <NotFound />
        </div>
      ) : (
        <>
          {isPhone ? (
            <>
              <button
                onClick={() => setShowMobileFilter(!showMobileFilter)}
                className="sr__filter-mobile"
              >
                <i className="fa-solid fa-sliders"></i> Filtros
              </button>

              <div className="sr__filter-mobile-container">
                {showMobileFilter ? <Filters /> : ""}
              </div>
            </>
          ) : (
            ""
          )}
          <div className="sr__container">
            {isPhone ? "" : <Filters />}

            <div className="pm__grid">
              {products.length != 0 ? (
                products.map((product) => (
                  <ProductModal
                    key={product.listing_id}
                    listing_id={product.listing_id}
                    store_id={product.store_id}
                    store_url={product.store_url}
                    trust_factor={product.trust_factor}
                    product_url={product.product_url}
                    image_url={product.image_url}
                    title_raw={product.title_raw}
                    last_price={product.last_price}
                    store_image_url={product.store_image_url}
                  />
                ))
              ) : (
                <div className="sr__container error">
                  <NotFound />
                </div>
              )}
            </div>
          </div>
          {totalPages > 1 && (
            <nav className="sr__pagination-wrapper" aria-label="Paginado">
              <div className="sr__more-container">
                <button
                  className="sr__pagination"
                  onClick={() => goToPage(page - 1)}
                  disabled={page <= 1}
                  aria-label="Página anterior"
                >
                  <i
                    className="fa-solid fa-forward"
                    style={{ transform: "rotate(180deg)" }}
                  ></i>
                </button>

                {pageList.map((item, index) =>
                  item === "..." ? (
                    <span key={`gap-${index}`} className="sr__page-gap">
                      …
                    </span>
                  ) : (
                    <button
                      key={item}
                      className={`sr__page-count ${item === page ? "active" : ""}`}
                      onClick={() => goToPage(item)}
                      aria-current={item === page ? "page" : undefined}
                    >
                      {item}
                    </button>
                  ),
                )}

                <button
                  className="sr__pagination"
                  onClick={() => goToPage(page + 1)}
                  disabled={page >= totalPages}
                  aria-label="Página siguiente"
                >
                  <i className="fa-solid fa-forward"></i>
                </button>
              </div>

              {totalPages > 7 && (
                <div className="sr__page-jump">
                  <label htmlFor="sr__page-jump-input">Ir a la página</label>
                  <input
                    id="sr__page-jump-input"
                    type="number"
                    min={1}
                    max={totalPages}
                    inputMode="numeric"
                    placeholder={`1 - ${totalPages}`}
                    value={pageDraft}
                    onChange={(e) => setPageDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") jumpToDraftPage();
                    }}
                    className="generic-input"
                  />
                  <button onClick={jumpToDraftPage} disabled={!pageDraft}>
                    Ir
                  </button>
                </div>
              )}
            </nav>
          )}
        </>
      )}

      <Footer />
    </>
  );
}

export default Search;
