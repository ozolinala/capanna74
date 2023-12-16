import React, { useState } from "react";

const TakeawayItem = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = () => {
    setQuantity((prevQuantity) => {
      const updatedQuantity = prevQuantity + 1;
      onAddToCart({ ...item, quantity: updatedQuantity });
      return updatedQuantity;
    });
  };

  const handleRemoveClick = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => {
        const updatedQuantity = prevQuantity - 1;
        onAddToCart({ ...item, quantity: updatedQuantity });
        return updatedQuantity;
      });
    }
  };

  return (
    <li>
      <span>
        {item.name} : {item.description} - DKK{item.price}
      </span>
      <button onClick={handleRemoveClick} disabled={quantity === 0}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={handleAddClick}>+</button>
    </li>
  );
};

export default TakeawayItem;
