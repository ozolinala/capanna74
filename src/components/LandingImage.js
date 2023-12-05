import React from 'react';
import styles from '../styles/LandingImage.module.css';

const LandingImage = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/homepage-image.png" alt="Landing Image" className={styles.image} />
      <h1 className={styles.caption}>CAPANNA47</h1>
    </div>
  );
};

export default LandingImage;