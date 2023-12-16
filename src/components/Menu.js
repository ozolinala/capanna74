import React from "react";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <article className={styles.menuList}>
      <h2>The Menu</h2>
      <div className={styles.menuItemsContainer}>
      <div className={styles.menuItems}>
          <h3>Antipasti</h3>
          <div>
            <b>
              <h5>N°1. Bruschetta al Pomodoroo • DKK40</h5>
            </b>
            <p>Toasted bread with diced tomatoes, garlic, basil, and olive oil</p>
          </div>
          <div>
            <h5>N°2. Caprese Salad • DKK60</h5>
            <p>Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze</p>
          </div>
          <div>
            <h5>N°3. Prosciutto e Melone • DKK70</h5>
            <p>Thinly sliced prosciutto served with melon</p>
          </div>
          <div>
            <h5>N°4. Olives Miste • DKK50</h5>
            <p>Mixed marinated olives</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>Pasta</h3>
          <div>
            <b>
              <h5>N°1. Spaghetti alla carbonara • DKK99</h5>
            </b>
            <p>Spaghetti with egg, guanciale and pepper</p>
          </div>
          <div>
            <h5>N°2. Fusilli al pesto • DKK99 </h5>
            <p>Fusilli with pesto alla genovese</p>
          </div>
          <div>
            <h5>N°3. Spaghetti aglio, olio e peperoncino • DKK119</h5>
            <p>Spaghetti with oil, toasted garlic and peperoncino</p>
          </div>
          <div>
            <h5>N°4. Penne all’amatriciana • DKK129</h5>
            <p>Penne with tomato sauce, meat and basil</p>
          </div>
        </div> 
        <div className={styles.menuItems}>
          <h3>Dolci</h3>
          <div>
            <h5>N°1. TIRAMISU • DKK79</h5>
            <p>Ladyfingers, Espresso, Mascarpone, Eggs, Sugar, Cocoa Powder</p>
          </div>
          <div>
            <h5>N°2. PANNA COTTA • DKK59</h5>
            <p>Heavy cream and vanilla extract</p>
          </div>
          <div>
            <h5>N°3. AMARETTI • DKK29</h5>
            <p>Almond cookies</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>Vini</h3>
          <div>
            <b>
              <h5>N°1. Chianti Classico • DKK95</h5>
            </b>
            <p>Red wine from Tuscany, Italy</p>
          </div>
          <div>
            <h5>N°2. Barolo • DKK110</h5>
            <p>Red wine from Piedmont, Italy</p>
          </div>
          <div>
            <h5>N°3. Vermentino • DKK110</h5>
            <p>White wine from Sardinia, Italy</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>Cocktails</h3>
          <div>
            <h5>N°1. APEROL SPRITZ • DKK99</h5>
            <p>Aperol, prosecco and soda</p>
          </div>
          <div>
            <h5>N°2. MOJITO • DKK99</h5>
            <p>White rum, lime juice and mint leaves</p>
          </div>
          <div>
            <h5>N°3. NEGRONI • DKK69</h5>
            <p>Gin, red vermouth and Campari</p>
          </div>
          <div>
            <h5>N°4. MARTINI • DKK99</h5>
            <p>Gin stirred with dry vermouth</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className={styles.address}
          src="/assets/number-74.svg"
          alt="Landing Image"
        />
      </div>
    </article>
  );
};

export default Menu;
