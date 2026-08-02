import "./StoreModal.css";
import { Link } from "react-router-dom";

interface StoreModalProps {
  name: string;
  store_image_url: string;
  id: string;
  trustFact: number;
}

export function StoreModal({
  name,
  id,
  store_image_url,
  trustFact,
}: StoreModalProps) {
  const getTrustBadgeClass = (trust: number) => {
    if (trust > 85) return "green-trust-badge";
    if (trust > 50) return "yellow-trust-badge";
    return "red-trust-badge";
  };
  console.log("store_imageurl", store_image_url);

  return (
    <>
      <Link to={`/tiendas/${id}`}>
        <div className="sm__container">
          <div className="sm__store">
            <span
              className={`sm__trust-fact trust-badge ${getTrustBadgeClass(trustFact)}`}
            >
              {trustFact}%
            </span>
            <img
              src={store_image_url}
              alt={`${name}-logo`}
              loading="lazy"
              className="sm__store-logo"
            />
          </div>
          <div className="sm__name-container">
            <span>{name}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default StoreModal;
