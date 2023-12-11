import React from "react";
import styles from "../styles/LandingGrid.module.css";
import Link from "next/link";

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
      <Link className={styles.button} href="/bookings">
        Book a table
      </Link>
    </div>
  );
};

export default LandingGrid;
