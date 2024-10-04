import React from "react";
import "./main.css";

import bluegirl from "../../assets/artwork/BlueGirl.webp";
import redgirl from "../../assets/artwork/RedGirl.webp";
import yellowgirl from "../../assets/artwork/YellowGirl.webp";
import ScrollBar from "../../components/common/components/scrollBar";
import About from "../../components/about";
import Contact from "../../components/contact";
import Artwork from "../../components/artwork/components";
import NavBar from "../../components/common/components/navbar";

function Main() {
  return (
      <>
        <NavBar />
        <div className="parallax-wrapper">
          <div className="parallax-container"></div>
          <div className="main-container"></div>
          <div className="main-background"></div>
          <ScrollBar />
          <div className="viewport-wrapper">
            <About />
            <Contact />
            <div className="artwork">
              <h1 id="artwork" className="section-title">
                Artwork
              </h1>
              <div className="artwork-wrapper">
                <Artwork title="REVENGE POP" label="REVENGE POP artwork" image={redgirl} />
                <Artwork title="POP" label="POP artwork" image={bluegirl} />
                <Artwork title="REVENGE" label="REVENGE artwork" image={yellowgirl} />
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Main;
