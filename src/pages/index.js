import React from "react";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel";
import Menu from "../components/Menu";

const images = [
  "/assets/wine.jpg",
  "/assets/panna-cotta.jpg",
  "/assets/dried-pasta.jpg",
  "/assets/pasta-carbonara.jpg",
  "/assets/kitchen.jpg",
  "/assets/kitchen2.jpg",
  "/assets/laughing.jpg",
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
