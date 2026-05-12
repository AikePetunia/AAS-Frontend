import "./StoreModal.css"
import armytech from "@stores/armytech.webp"
import { Link } from "react-router-dom";

interface StoreModalProps {
  name: string;
  image: string;
  id: string;
  trustFact: number;
}

export function StoreModal({ name, id, image, trustFact }: StoreModalProps) {

    const getTrustBadgeClass = (trust: number) => {
      if (trust > 85) return "green-trust-badge";
      if (trust > 50) return "yellow-trust-badge";
      return "red-trust-badge";
    };

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
                src={armytech || image}
                alt={`${name}-logo`}
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