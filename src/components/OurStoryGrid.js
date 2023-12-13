import React from "react";
import styles from "../styles/OurStory.module.css";

const OurStoryGrid = ({}) => {
  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.item} ${styles.image}`}>
        <img src="/assets/our-story1.png" alt="Pasta in a pan"></img>
      </div>
      <div id={styles.logo} className={styles.item}>
        <img src="/assets/Orange-capanna-logo.svg" alt="Logo"></img>
        <p>
          Capanna Di Settantaquattro is not just a restaurant; it's a journey
          through the authentic flavors of Italy, a culinary escape tucked away
          in a small house on Gammel Kongevej.
          <br></br>
          <br></br> The inspiration for the concept and name of the restaurant
          comes from a place in Italy - a hut up on a hill with all of the
          classic Italian dishes.
          <br></br>
          <br></br>Our concept is born from the belief that exceptional Italian
          cuisine should be an everyday delight, accessible to all. Families,
          students, and lovers of good food – our doors are open to you.
        </p>
      </div>
      <div className={`${styles.itemInvisible} ${styles.item} ${styles.image}`}>
        <img src="/assets/our-story2.png" alt="Cocktails"></img>
      </div>

      <div className={`${styles.itemInvisible} ${styles.item}`}></div>
      <div className={`${styles.item} ${styles.image}`}>
        <img src="/assets/our-story3.png" alt="Chef in the kitchen"></img>
      </div>
      <div className={styles.item}>
        <h4>Simple ingredients, Rich flavours</h4>
        <p>
          Step into our kitchen, where pasta is not merely prepared; it's a
          craft. Our journey begins with the finest durum wheat semolina, pure
          water, and a commitment to quality. The simplicity of our ingredients
          mirrors the authenticity of Italian pasta, creating a symphony of
          flavors on your plate. <br></br>
          <br></br> From our hands to your table, it's more than pasta—it's a
          heartfelt connection to the heart of Italy.
        </p>
      </div>

      <div className={`${styles.itemInvisible} ${styles.item} ${styles.image}`}>
        <img src="/assets/our-story4.png" alt="Making pasta"></img>
      </div>
      <div className={styles.item}>
        <h4>Our heart and soul</h4>
        <p>
          Without our awesome team, Capanna Di Settantquattro just wouldn't be
          the same. They're the ones who make the magic happen in the kitchen
          and bring our Italian pasta dream to life.
          <br></br>
          <br></br>Join us in giving a big shout-out to the heart and soul of
          Capanna Di Settantquattro. Every delicious dish and every moment of
          laughter at our tables are thanks to their hard work. <br></br>
          <br></br> Mangiamo! Let's enjoy a meal, share some laughs, and make
          memories together with our fantastic crew.
        </p>
      </div>
      <div className={`${styles.item} ${styles.image}`}>
        <img src="/assets/our-story5.png" alt="The team"></img>
      </div>
    </div>
  );
};

export default OurStoryGrid;
