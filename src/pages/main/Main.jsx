import React from "react";
import "./main.css";

import ScrollBar from "../../components/common/components/scrollBar";
import About from "../../components/about/About";
import Contact from "../../components/contact";
import NavBar from "../../components/common/components/navbar";
import ParallaxBackground from "../../components/parallax/ParallaxBackground";
import {ArtworkComponent} from "../../components/artwork/ArtworkComponent";

function Main() {
  return (
      <>
        <ParallaxBackground />
        <NavBar />
        <ScrollBar />
        <div className="container">
          <About />
          <Contact />
          <ArtworkComponent />
        </div>
      </>
  );
}

export default Main;
