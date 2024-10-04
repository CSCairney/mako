import React from "react";
import "./styles.css";

const ArtworkImage = ({ title, image, label, visibilityHandler }) => {
  return (
    <>
      <div className='artwork-container' onClick={visibilityHandler}>
        <img className='artwork-image' alt={label} src={image}></img>
        <p className='artwork-title'>{title}</p>
      </div>
    </>
  );
};

export default ArtworkImage;
