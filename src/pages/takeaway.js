import React, { useState } from "react";
import Layout from "../components/Layout";
import menuData from "../data/menuData";
import TakeawayMenu from "@/components/TakeawayMenu";
import TakeawayList from "@/components/TakeawayList";
import TakeawayCart from "@/components/TakeawayCart";

const Takeaway = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const currentCategory = menuData.categories.find((category) => category.id === selectedCategory);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Layout>
      <h2>Menu</h2>
      <div style={{ display: "flex" }}>
        <div>
          <TakeawayMenu
            categories={menuData.categories}
            onSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
          <TakeawayList items={currentCategory.items} onAddToCart={handleAddToCart} />
        </div>

        <TakeawayCart cartItems={cartItems} />
      </div>
    </Layout>
  );
};

export default Takeaway;
