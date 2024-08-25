import React from "react";
import ImageGrid from "../components/Grid"; // Ensure the correct path
import HeroSection from "../components/HeroSection"; // Ensure the correct path
import FeatureSection from "../components/FeatureSection"; // Ensure the correct path
import Marquee from "../components/Marquee"; // Ensure the correct path
import Footer from "../components/Footer"; // Ensure the correct path
import Navbar from "../components/NavigationBar";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ImageGrid />
      <FeatureSection />
      <Marquee />
      <Footer />
    </div>
  );
};

export default Home;
