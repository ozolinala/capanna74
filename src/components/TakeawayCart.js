import React from "react";
import styles from "../styles/TakeawayMenu.module.css";
import { useState, useEffect } from "react";

const TakeawayCart = ({ cartItems, orderProcess, setOrderProcess }) => {
  const [showFullList, setShowFullList] = useState(false);

  const visibleItems = showFullList ? cartItems : cartItems.slice(-2);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
   };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Order</h2>
      <ul className={`${styles.cartList} ${showFullList ? styles.showCartList : ''}`}>

        {visibleItems.map((item) => (
          <li className={styles.cartListItem} key={item.id}>
            <div>
              {item.name} × {item.quantity}
            </div>
            <div>{item.price}kr.</div>
          </li>
        ))}
      </ul>
      {cartItems.length > 2 && (
        <button className={styles.showMoreButton} onClick={() => setShowFullList(!showFullList)}>
          {showFullList ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#FFFFFF"
              class="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#FFFFFF"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          )}
        </button>
      )}
      <div className={styles.cartFlex}>
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
    </div>
  );
};

export default TakeawayCart;
