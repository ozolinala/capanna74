import React, { useState } from "react";
import styles from "../styles/TakeawayMenu.module.css";

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
    <li className={styles.listItem}>
      <span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </span>
      <span className={styles.priceAndQuantity}>
        <h5>DKK {item.price}</h5>
        <div className={styles.quantity}>
          <button onClick={handleRemoveClick} disabled={quantity === 0}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={handleAddClick}>+</button>
        </div>
      </span>
    </li>
  );
};

export default TakeawayItem;
