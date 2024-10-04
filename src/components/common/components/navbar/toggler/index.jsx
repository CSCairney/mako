import React from "react";
import "./styles.css";

function Toggler({ status, onToggle }) {
  const dropdownHandler = () => {
    onToggle(!status);
  };

  return (
    <div className='nav-dropdown-toggle' onClick={dropdownHandler}>
      <div className='nav-toggler'>
        <div className='toggler' />
        <div className='toggler' />
        <div className='toggler' />
      </div>
    </div>
  );
}

export default Toggler;