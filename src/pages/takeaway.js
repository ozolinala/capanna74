import React, { useState } from "react";
import Layout from "../components/Layout";
import menuData from "../data/menuData";
import TakeawayMenu from "@/components/TakeawayMenu";
import TakeawayList from "@/components/TakeawayList";
import TakeawayCart from "@/components/TakeawayCart";
import styles from "../styles/TakeawayMenu.module.css";

const Takeaway = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [orderProcess, setOrderProcess] = useState(false);

  const currentCategory = menuData.categories.find((category) => category.id === selectedCategory);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      // Check if the item is already in the cart
      const existingItemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === item.id);

      // If the item is already in the cart, update its quantity
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex] = item;
        return updatedCartItems;
      }

      // If the item is not in the cart, add it
      return [...prevCartItems, item];
    });
  };

  return (
    <Layout>
      <div className={styles.takeawayContainer}>
        <div>
          <h2>Menu</h2>
          {/* <div className={styles.takeawayLeft}>
            <TakeawayMenu
              categories={menuData.categories}
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            />
            <TakeawayList items={currentCategory.items} onAddToCart={handleAddToCart} />
          </div> */}
          <div className={styles.takeawayLeft}>
            {orderProcess ? (
              <TakeawayInfo />
            ) : (
              <>
                <TakeawayMenu
                  categories={menuData.categories}
                  onSelectCategory={handleSelectCategory}
                  selectedCategory={selectedCategory}
                />
                <TakeawayList items={currentCategory.items} onAddToCart={handleAddToCart} />
              </>
            )}
          </div>
        </div>

        <TakeawayCart
          cartItems={cartItems}
          orderProcess={orderProcess}
          setOrderProcess={setOrderProcess}
        />
      </div>
    </Layout>
  );
};

export default Takeaway;
