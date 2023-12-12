import React from "react";
import styles from "../styles/TakeawayMenu.module.css";

const TakeawayMenu = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <nav>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`${styles.category} ${
            selectedCategory === category.id ? styles.selected : styles.notselected
          }`}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
};

export default TakeawayMenu;
