import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <Layout currentPage="contact">
    <div className={styles.contactContainer}>
        <div className={styles.textContainer}>
          <div className={styles.infoBlock}>
            <h3>Opening hours</h3>
            <p>Tuesday, Wednesday, Thursday 17:30 - 23:00</p>
            <p>Friday & Saturday 17:00 - 00:00</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>Contacts</h3>
            <p>contact@capanna74.com</p>
            <p>+45 35 46 78 90</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>Other Restaurants</h3>
            <a href='http://mangia.dk/'>Mangia</a> 
            <a href="https://www.ristorantecircolo.dk/">Circolo</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/assets/contact-image.png" alt="Contact Image" />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
