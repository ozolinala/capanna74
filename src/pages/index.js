import React from "react";
import Layout from "../components/Layout";
import LandingGrid from "@/components/LandingGrid";
import Menu from "@/components/Menu";

const HomePage = () => {
  return (
    <Layout>
      <LandingGrid />
      <Menu />
    </Layout>
  );
};

export default HomePage;
