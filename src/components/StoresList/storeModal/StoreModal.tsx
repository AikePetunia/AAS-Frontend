import "./StoreModal.css"
import armytech from "@stores/armytech.webp"

interface StoreModalProps {
    name: string;
    image: string;
}
export function StoreModal({name, image}: StoreModalProps) {

    return (
        <>
            <div className="sm__container">
                <div className="sm__store">
                    <img src={armytech || image } alt={`${name}-logo`} className="sm__store-logo" />
                </div>
                <div className="sm__name-container">
                    <span>{name}</span>
                </div>
            </div>
        </>
    )
}

export default StoreModal;