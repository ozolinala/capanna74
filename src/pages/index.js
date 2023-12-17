import React from "react";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel";
import Menu from "../components/Menu";
import styles from "../styles/LandingPage.module.css";

const images = [
  "/assets/wine.jpg",
  "/assets/panna-cotta.jpg",
  "/assets/Homepage-Picture1.png",
  "/assets/contacts-image.jpg",
  "/assets/our-story1.png",
  "/assets/our-story2.png",
  "/assets/our-story5.png",
  "/assets/Homepage-Picture2.png",
  "/assets/spaghettopomodoro.jpg",
  "/assets/Homepage-Picture3.png",
  "/assets/our-story4.png",

  "/assets/veggies.jpg",
  "/assets/fusillo.jpg",
];

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.backgroundColor}>
        <ImageCarousel images={images} />
        <div id="menu">
          <Menu />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
