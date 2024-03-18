import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => (
  <div className="root-wrapper">
    <div className="navbar-wrapper">
      <Navbar />
    </div>
    <div className="hero-section-wrapper">
      <Hero />
    </div>

    <div className="hero-section-wrapper">
      Stats Business Billing CardDeal Testimonials Clients CTA Footer
    </div>
  </div>
);

export default App;
