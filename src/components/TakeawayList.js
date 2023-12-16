import React, { useState } from "react";
import TakeawayItem from "./TakeawayItem";

const TakeawayList = ({ items, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onAddToCart({ ...item, quantity: quantity + 1 });
  };

  const handleRemoveClick = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onAddToCart({ ...item, quantity: quantity - 1 });
    }
  };
  return (
    <ul>
      {items.map((item) => (
        <TakeawayItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </ul>
  );
};

export default TakeawayList;
