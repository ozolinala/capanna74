import React from "react";
import Layout from "../components/Layout";
import OurStoryGrid from "@/components/OurStoryGrid";
import styles from "../styles/OurStory.module.css";

const OurStory = () => {
  return (
    <Layout currentPage="yourComponent">
      <OurStoryGrid></OurStoryGrid>
      <div className={styles.others}>
        <h2 classNamestyle={{ color: "var(--accent-color)" }}>
          All about family
        </h2>
        <p>
          Currently, we’re a family of three.
          <br></br>Visit our sister restaurants
          <br></br>

          <a href="http://mangia.dk/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/Mangia-logo.svg"
              alt="Mangia"
              className={styles.mangiaLogo}
            />
          </a>
          <span> & </span>
          <a
            href="https://www.ristorantecircolo.dk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Circolo-logo.svg"
              alt="Circolo"
              className={styles.circoloLogo}
            />
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default OurStory;
