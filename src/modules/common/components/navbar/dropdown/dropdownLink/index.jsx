import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function DropdownLink({name, index, location}) {
  const linkJump = `#${location}`;

  return (
    <div className='dropdown-link'>
      <Link to={linkJump}>
        <p>{name}</p>
      </Link>
      <p className='dropdown-link-index'>{index}</p>
    </div>
  );
}

export default DropdownLink;
