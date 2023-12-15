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
            <b>
              <h5>N°1. SPAGHETTI ALLA CARBONARA • DKK99</h5>
            </b>
            <p>Spaghetti with egg, guanciale and pepper</p>
          </div>
          <div>
            <h5>N°2. ALLA GRISCIA • DKK99 </h5>
            <p>Spaghetti with guanciale og peber</p>
          </div>
          <div>
            <h5>N°3. CACIO E PEPE • DKK119</h5>
            <p>Spaghetti with cacio ost og peber</p>
          </div>
          <div>
            <h5>N°4. FUSILLI AL PESTO • DKK129</h5>
            <p>Fusilli with Genoan pesto</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>VINI</h3>
          <div>
            <h5>N°1. VINO ROSSO DELLA CASA • DKK69</h5>
            <p>Red house wine</p>
          </div>
          <div>
            <h5>N°2. VINO BIANCO DELLA CASA • DKK69 </h5>
            <p>White house wine</p>
          </div>
          <div>
            <h5>N°3. ORTRUGO • DKK89</h5>
            <p>Red wine from Emilia Romagna region</p>
          </div>
          <div>
            <h5>N°4. LUGANA • DKK119</h5>
            <p>White wine from Garda lake</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>DOLCI</h3>
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
          <h3>COCKTAILS</h3>
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
