import React from "react";

const TakeawayCart = ({ cartItems }) => {
  return (
    <div>
      <h2>Your Order</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TakeawayCart;
