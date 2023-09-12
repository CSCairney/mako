import React from "react";
import "./homepage.css";
import Menu from "../../modules/common/components/navbar";

import bluegirl from "../../assets/artwork/BlueGirl.webp";
import redgirl from "../../assets/artwork/RedGirl.webp";
import yellowgirl from "../../assets/artwork/YellowGirl.webp";
import Artwork from "../../modules/artwork/components";
import ScrollBar from "../../modules/common/components/scrollBar";
import About from "../../modules/about";
import Contact from "../../modules/contact";

function Homepage() {
  return (
    <>
      <Menu />
      <div className='parallax-container'>
        <div className='main-container' />
        <div className='main-background' />
        <ScrollBar />
        <div className='viewport-wrapper'>
          <About />
          <Contact />
          <div className='artwork'>
            <h1 id='artwork' className='section-title'>
              Artwork
            </h1>
            <div className='artwork-wrapper'>
              <Artwork title='REVENGE POP' label='REVENGE POP artwork' image={redgirl} />
              <Artwork title='POP' label='POP artwork' image={bluegirl} />
              <Artwork title='REVENGE' label='REVENGE artwork' image={yellowgirl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
