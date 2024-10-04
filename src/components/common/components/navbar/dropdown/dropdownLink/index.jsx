import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function DropdownLink({name, index, location}) {

  return (
    <div className='dropdown-link'>
      <Link 
      to={location}
      spy={true}
      >
        <p>{name}</p>
      </Link>
      <p className='dropdown-link-index'>{index}</p>
    </div>
  );
}

export default DropdownLink;
