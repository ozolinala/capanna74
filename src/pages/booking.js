import React from "react";
import Layout from "../components/Layout";
import BookingForm from "../components/BookingForm";
import styles from "../styles/Contact.module.css"
const Bookings = () => {
  return (
    <Layout>
       <div className={styles.imageContainer}>
       <img src="/assets/contact-page.jpg" alt="Logo"></img>
          </div>
      <BookingForm />
    </Layout>
  );
};

export default Bookings;
