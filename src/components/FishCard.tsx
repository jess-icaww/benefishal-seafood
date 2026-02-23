import React from "react";
import "./FishCard.css";

type FishCardProps = {
  name: string;
  type: string;
  description: string;
  image: string;
  price: string;
  sustainability: string;
  available: boolean;
  onAddToOrder: () => void;
};

const FishCard = ({
  name,
  type,
  description,
  image,
  price,
  sustainability,
  available,
  onAddToOrder,
}: FishCardProps) => {
  return (
    <div className={`fish-card ${!available ? 'unavailable' : ''}`}>
      <div className="fish-image">
        <img src={image} alt={name} />
        <div className="sustainability-badge">{sustainability}</div>
      </div>
      <div className="fish-info">
        <div className="fish-type">{type}</div>
        <h3 className="fish-name">{name}</h3>
        <p className="fish-description">{description}</p>
        <div className="fish-footer">
          <span className="fish-price">{price}</span>
          {available ? (
            <button className="add-to-order-btn" onClick={onAddToOrder}>
              + Add to Order
            </button>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FishCard;