import React from "react";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel";
import Menu from "../components/Menu";

const images = [
  "/assets/wine.jpg",
  "/assets/panna-cotta.jpg",
  "/assets/dried-pasta.jpg",
  "/assets/pasta-carbonara.jpg",
  "/assets/pasta-carbonara.png",
  "/assets/our-story2.png",
  "/assets/contact-pasta.png",
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
      <div>
        <ImageCarousel images={images} />
        <div id="menu">
          <Menu />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
