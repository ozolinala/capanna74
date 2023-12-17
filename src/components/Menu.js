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
              <h5>N°1. Bruschetta al Pomodoro • 40kr.</h5>
            </b>
            <p>
              Toasted bread with diced tomatoes, garlic, basil, and olive oil
            </p>
          </div>
          <div>
            <h5>N°2. Caprese Salad • 60kr.</h5>
            <p>
              Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze
            </p>
          </div>
          <div>
            <h5>N°3. Prosciutto e Melone • 70kr.</h5>
            <p>Thinly sliced prosciutto served with melon</p>
          </div>
          <div>
            <h5>N°4. Olive Miste • 50kr.</h5>
            <p>Mixed marinated olives</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>Pasta</h3>
          <div>
            <b>
              <h5>N°1. Spaghetti alla carbonara • 99kr.</h5>
            </b>
            <p>Spaghetti with egg, guanciale and pepper</p>
          </div>
          <div>
            <h5>N°2. Fusilli al pesto • 99kr. </h5>
            <p>Fusilli with pesto alla genovese</p>
          </div>
          <div>
            <h5>N°3. Spaghetti aglio, olio e peperoncino • 119kr.</h5>
            <p>Spaghetti with oil, toasted garlic and peperoncino</p>
          </div>
          <div>
            <h5>N°4. Penne all’amatriciana • 129kr.</h5>
            <p>Penne with tomato sauce, meat and basil</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>Dolci</h3>
          <div>
            <h5>N°1. Tiramisu • 79kr.</h5>
            <p>Ladyfingers, Espresso, Mascarpone, Eggs, Sugar, Cocoa Powder</p>
          </div>
          <div>
            <h5>N°2. Panna cotta • 59kr.</h5>
            <p>Heavy cream and vanilla extract</p>
          </div>
          <div>
            <h5>N°3. Amaretti • 29kr.</h5>
            <p>Almond cookies</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>Vini</h3>
          <div>
            <b>
              <h5>N°1. Chianti Classico • 95kr.</h5>
            </b>
            <p>Red wine from Tuscany, Italy</p>
          </div>
          <div>
            <h5>N°2. Barolo • 110kr.</h5>
            <p>Red wine from Piedmont, Italy</p>
          </div>
          <div>
            <h5>N°3. Vermentino • 110kr.</h5>
            <p>White wine from Sardinia, Italy</p>
          </div>
        </div>
        <div className={styles.menuItems}>
          <h3>Cocktails</h3>
          <div>
            <h5>N°1. Aperol Spritz • 99kr.</h5>
            <p>Aperol, prosecco and soda</p>
          </div>
          <div>
            <h5>N°2. Mojito • 99kr.</h5>
            <p>White rum, lime juice and mint leaves</p>
          </div>
          <div>
            <h5>N°3. Negroni • 69kr.</h5>
            <p>Gin, red vermouth and Campari</p>
          </div>
          <div>
            <h5>N°4. Martini • 99kr.</h5>
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
