import React from "react";
import HomepageCarousel from "../../components/Carousel/HomepageCarousel";
import HomeDescription from "../../components/Home/HomeDescription";
import HomeFeatures from "../../components/Home/HomeFeatures";
import Places from "../../components/Home/Places";
import Position from "../../components/Home/Position";
import Review from "../../components/Home/Review";
import Rooms from "../../components/Home/Rooms";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";

function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <HomepageCarousel />
      <HomeFeatures />
      <HomeDescription />
      <Position />
      <Places />
      <Rooms />
      <Review />
      <Footer />
    </div>
  );
}

export default Homepage;
