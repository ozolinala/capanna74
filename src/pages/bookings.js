import React from "react";
import Layout from "../components/Layout";
import BookingForm from "../components/BookingForm";

const Bookings = () => {
  return (
    <Layout>
      <h2>Book a table</h2>
      <BookingForm />
    </Layout>
  );
};

export default Bookings;
