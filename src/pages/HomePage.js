import React from "react";
import "../components/homepage/Home.css";
import FAQ from "../components/homepage/faq/FAQ";
import Header from "../components/homepage/Header";
import Line from "../components/helper/Line";
import Footer from "../components/Footer/Footer";
import "../components/homepage/Home.css";

function HomePage() {
  return (
    <div className="home">
      <Header />
      <FAQ />
      <Line />
      <Footer />
    </div>
  );
}

export default HomePage;
