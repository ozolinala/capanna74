import React from "react";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel";
import Menu from "../components/Menu";

const images = [
  "/assets/dried-pasta.webp",
  "/assets/wine.webp",
  "/assets/header-strampelli.webp",
  
  "/assets/pasta-carbonara.webp",
  
  "/assets/panna-cotta.webp",
  "/assets/kitchen.webp",
  "/assets/kitchen2.webp",
  "/assets/laughing.webp",
  "/assets/veggies.webp",
  "/assets/fusillo.webp",
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
