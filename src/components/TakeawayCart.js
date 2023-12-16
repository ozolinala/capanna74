import React from "react";

const TakeawayCart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Your Order</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - DKK{item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: DKK{calculateTotal()}</p>
    </div>
  );
};

export default TakeawayCart;
