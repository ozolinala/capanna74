import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/LandingGrid.module.css";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <img
        src="/assets/Capanna-logo.svg"
        alt="Capanna"
        className={styles.logo}
      />
      <div className={styles.stampContainer}>
        <img
          src="/assets/book-text.png"
          alt="Mangia"
          className={styles.spinningText}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
