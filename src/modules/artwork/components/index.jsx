import React, { useState } from "react";
import ExpandedView from "./expandedView";

const Artwork = ({ title, image, label }) => {
  const [visible, setVisibility] = useState(false);

  const visibilityHandler = () => {
    setVisibility(!visible)
  }  
  return (
    <>
      <div className='artwork-container' onClick={visibilityHandler}>
        <img className='artwork-image' alt={label} src={image}></img>
        <p className='artwork-title'>{title}</p>
      </div>
      {visible && <ExpandedView label={label} title={title} image={image}/>}
    </>
  );
};

export default Artwork;
