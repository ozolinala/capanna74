import React from "react";
import Layout from "../components/Layout";
import ImageCarousel from "../components/ImageCarousel";

const images = [
  "/assets/contacts-image.jpg",
  "/assets/Homepage-Picture1.png",
  "/assets/our-story1.png",
  "/assets/our-story2.png",
  "/assets/our-story3.png",
  "/assets/Homepage-Picture2.png",
  "/assets/Homepage-Picture3.png",
  "/assets/our-story4.png",
  "/assets/our-story5.png",
];

const HomePage = () => {
  return (
    <Layout>
      <ImageCarousel images={images} />
    </Layout>
  );
};

export default HomePage;
