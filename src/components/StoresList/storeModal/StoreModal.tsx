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
  return (
    <>
      <Link to={`/tiendas/${id}`}>
        <div className="sm__container">
          <div className="sm__store">
            <span className="sm__trust-fact">{trustFact}</span>
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