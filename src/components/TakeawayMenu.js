import React from "react";

const TakeawayMenu = ({ categories, onSelectCategory }) => {
  return (
    <nav>
      {categories.map((category) => (
        <button key={category.id} onClick={() => onSelectCategory(category.id)}>
          {category.name}
        </button>
      ))}
    </nav>
  );
};

export default TakeawayMenu;
