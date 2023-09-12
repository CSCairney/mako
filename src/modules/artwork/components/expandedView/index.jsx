import React, { useState } from "react";
import "./styles.css";

const ExpandedView = ({ label, image, visible }) => {

  return (
    <>
      {visible && (
        <div className='artwork-large-container'>
          <img className='artwork-large-image' alt={label} src={image}></img>
        </div>
      )}
    </>
  );
};

export default ExpandedView;
