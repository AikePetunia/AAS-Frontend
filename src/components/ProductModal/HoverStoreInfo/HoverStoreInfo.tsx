import "./HoverStoreInfo.css";

interface HoverStoreInfoProps {
  storeName: string;
  trustFactor: number;
  storeUrl: string;
}

export function HoverStoreInfo({
  storeName,
  trustFactor,
  storeUrl,
}: HoverStoreInfoProps) {
  return (
    <div className="hs__info" role="tooltip">
      <p className="hs__title">{storeName}</p>
      <p className="hs__text">Trust: {trustFactor}% (manual)</p>
      <a href={storeUrl} className="hs__link">
        Ver tienda
      </a>
    </div>
  );
}
