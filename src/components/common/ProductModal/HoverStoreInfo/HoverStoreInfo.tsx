import "./HoverStoreInfo.css";

interface HoverStoreInfoProps {
  storeName: string;
  trustFactor: number;
  storeUrl: string;
}

export function HoverStoreInfo({
  storeName,
  trustFactor,
}: HoverStoreInfoProps) {
  return (
    <div className="hs__info" role="tooltip">
      <p className="hs__title">{storeName}</p>
      <p className="hs__text">Confianza: {trustFactor}%</p>
    </div>
  );
}
