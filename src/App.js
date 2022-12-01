import React from "react";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";
import Hero from "./components/Hero/Hero";
import CreatePackage from "./components/CreatePackage/CreatePackage";
import Itineraries from "./components/Itineraries/Itineraries";
import Packages from "./components/Packages/Packages";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <CreatePackage />
      <Itineraries />
      <Packages />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
