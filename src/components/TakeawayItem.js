import React, { useState } from "react";

const TakeawayItem = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    onAddToCart({ ...item, quantity: updatedQuantity });
  };

  const handleRemoveClick = () => {
    if (quantity > 0) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      onAddToCart({ ...item, quantity: updatedQuantity });
    }
  };

  return (
    <li>
      <span>
        {item.name} - ${item.price}
      </span>
      <button onClick={handleRemoveClick}>-</button>
      <span>{quantity}</span>
      <button onClick={handleAddClick}>+</button>
    </li>
  );
};

export default TakeawayItem;