import React from "react";
import HomepageCarousel from "../../components/Carousel/HomepageCarousel";
import HomeDescription from "../../components/Home/HomeDescription";
import HomeFeatures from "../../components/Home/HomeFeatures";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";

function Homepage() {
  return (
    <div className="homepage-container">
      <HomepageCarousel />
      <HomeFeatures />
      <HomeDescription />
    </div>
  );
}

export default Homepage;
