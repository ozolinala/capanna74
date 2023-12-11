import React from "react";
import styles from "../styles/LandingGrid.module.css";

const LandingGrid = () => {
  return (
    <div className={styles.container}>
      <img
        src="/assets/Homepage-Picture1.png"
        alt="Landing Image"
        className={styles.Picture1}
      />
      <img
        src="/assets/Homepage-Picture2.png"
        alt="Landing Image"
        className={styles.Picture2}
      />
      <img
        src="/assets/Homepage-Picture3.png"
        alt="Landing Image"
        className={styles.Picture3}
      />
    </div>
  );
};

export default LandingGrid;
