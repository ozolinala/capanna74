import React from "react";
import styles from "../styles/TakeawayMenu.module.css";
import { useState, useEffect } from "react";

const TakeawayCart = ({ cartItems, orderProcess, setOrderProcess }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Order</h2>
      <ul className={styles.cartList}>
        {cartItems.map((item) => (
          <li className={styles.cartListItem} key={item.id}>
            <div>
              {item.name} × {item.quantity}
            </div>
            <div>{item.price}kr.</div>
          </li>
        ))}
      </ul>
      <p className={styles.total}>
        Total: <b>{calculateTotal()}kr.</b>
      </p>
      {orderProcess ? (
        <p></p>
      ) : (
        <button
          className={styles.orderButton}
          onClick={() => {
            setOrderProcess(true);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default TakeawayCart;
