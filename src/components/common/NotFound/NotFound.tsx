import eye from "@assets/icons/eye.gif";
import "./NotFound.css";
import impuestito from "@assets/icons/impuestito.ico";
interface RecommendedSite {
  name: string;
  icon: string;
  accent: string;
  buildUrl: (query: string) => string;
}

const RECOMMENDED_SITES: RecommendedSite[] = [
  {
    name: "Mercado Libre",
    icon: "fa-solid fa-cart-shopping",
    accent: "#ffe600",
    buildUrl: (query) =>
      `https://listado.mercadolibre.com.ar/${encodeURIComponent(query)}`,
  },
  {
    name: "Amazon",
    icon: "fa-brands fa-amazon",
    accent: "#ff9900",
    buildUrl: (query) =>
      `https://www.amazon.com/s?k=${encodeURIComponent(query)}`,
  },
  {
    name: "AliExpress",
    icon: "fa-solid fa-bag-shopping",
    accent: "#ff4747",
    buildUrl: (query) =>
      `https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(query)}`,
  },
  {
    name: "Google Shopping",
    icon: "fa-brands fa-google",
    accent: "#fefffc",
    buildUrl: (query) =>
      `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(query)}`,
  },
];

export function NotFound({
  message = "",
  query = "",
}: {
  message?: string;
  query?: string;
}) {
  return (
    <div className="notfound-container">
      <div className="doted-container notfound">
        <img width="110" src={eye} alt="ojito" />
        <h4>{message}</h4>

        {query ? (
          <div className="notfound__recommendations">
            <p className="notfound__recommendations-title">
              Probá buscarlo en:
            </p>
            <div className="notfound__sites">
              {RECOMMENDED_SITES.map((site) => (
                <a
                  key={site.name}
                  className="notfound__site-card"
                  href={site.buildUrl(query)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    { "--site-accent": site.accent } as React.CSSProperties
                  }
                >
                  <i className={site.icon}></i>
                  <span>{site.name}</span>
                </a>
              ))}
            </div>

            <a
              className="notfound__tax-callout"
              href="https://www.impuestito.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={impuestito} width={25} />
              <span>
                ¿Querés comprar afuera? mirá sus guías de importación o calculá
                los impuestos de importación con <strong>Impuestito</strong>
              </span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NotFound;
