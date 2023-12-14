import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <article className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoText}>
            <div>
              <h4>Opening hours</h4>
              <p>
                Tuesday, Wednesday, Thursday <b>17:30 - 23:00</b>
              </p>
              <p>
                Friday & Saturday <b>17:00 - 00:00</b>
              </p>
            </div>
            <div>
              <h4>Contacts</h4>
              <p>Gammel Kongevej 74, Frederiksberg</p>
              <a href="mailto:info@capannadi74.dk">info@capanna74.dk</a>
              <p>+45 35 00 00 90</p>
            </div>
            <div>
              <h4>Other restaurants</h4>
              <div className={styles.otherRestaurants}>
                <a href="https://mangia.dk/">Mangia</a>
                <a href="https://www.ristorantecircolo.dk/">Circolo</a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/contacts-image.jpg"
          alt="Landing Image"
          className={styles.contactsImage}
        />
      </article>
    </Layout>
  );
};

export default Contact;
