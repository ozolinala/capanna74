import React from "react";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <article className={styles.menuList}>
      <h2>The Menu</h2>
      <div className={styles.menuItemsContainer}>
        <div className={styles.menuItems}>
          <h3>PASTA</h3>
          <div>
            <p>N°1. SPAGHETTI ALLA CARBONARA • DKK99</p>
            <p>Spaghetti with egg, guanciale and pepper</p>
          </div>
          <div>
            <p>N°2. ALLA GRISCIA • DKK99 </p>
            <p>Spaghetti with guanciale og peber</p>
          </div>
          <div>
            <p>N°3. CACIO E PEPE • DKK119</p>
            <p>Spaghetti with cacio ost og peber</p>
          </div>
          <div>
            <p>N°4. FUSILLI AL PESTO • DKK129</p>
            <p>Fusilli with Genoan pesto</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>VINI</h3>
          <div>
            <p>N°1. VINO ROSSO DELLA CASA • DKK69</p>
            <p>Red house wine</p>
          </div>
          <div>
            <p>N°2. VINO BIANCO DELLA CASA • DKK69 </p>
            <p>White house wine</p>
          </div>
          <div>
            <p>N°3. ORTRUGO • DKK89</p>
            <p>Red wine from Emilia Romagna region</p>
          </div>
          <div>
            <p>N°4. LUGANA • DKK119</p>
            <p>White wine from Garda lake</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>DOLCI</h3>
          <div>
            <p>N°1. TIRAMISU • DKK79</p>
            <p>Ladyfingers, Espresso, Mascarpone, Eggs, Sugar, Cocoa Powder</p>
          </div>
          <div>
            <p>N°2. PANNA COTTA • DKK59</p>
            <p>Heavy cream and vanilla extract</p>
          </div>
          <div>
            <p>N°3. AMARETTI • DKK29</p>
            <p>Almond cookies</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>COCKTAILS</h3>
          <div>
            <p>N°1. APEROL SPRITZ • DKK99</p>
            <p>Aperol, prosecco and soda</p>
          </div>
          <div>
            <p>N°2. MOJITO • DKK99</p>
            <p>White rum, lime juice and mint leaves</p>
          </div>
          <div>
            <p>N°3. NEGRONI • DKK69</p>
            <p>Gin, red vermouth and Campari</p>
          </div>
          <div>
            <p>N°4. MARTINI • DKK99</p>
            <p>Gin stirred with dry vermouth</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Menu;
