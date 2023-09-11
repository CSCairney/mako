import React, { useState } from "react";
import logo from "../../../assets/branding/Logo.png";
import Toggler from "./toggler";
import DropdownLink from "./dropdown/dropdownLink";
import "./styles.css";

function Menu() {
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const toggleDropdown = (status) => {
    setDropdownStatus(status);
  };

  return (
    <>
      <div className='nav-wrapper'>
        <div className='nav-container'>
          <div className='nav-segements'>
            <Toggler status={dropdownStatus} onToggle={toggleDropdown} />
            <div className='nav-branding'>
              <img src={logo} alt='Branding Logo' className='menu-logo' />
            </div>
            <div className='nav-trademark'>
              <p className='nav-company'>GlobalLogic ©</p>
            </div>
          </div>
        </div>
        {dropdownStatus ? (
          <div className='dropdown-wrapper'>
            <div className='dropdown-link-container'>
              <DropdownLink name='About' index='1' location='about' />
              <DropdownLink name='Info' index='2' location='info' />
              <DropdownLink name='Artwork' index='3' location='artwork' />
              <DropdownLink name='Goods' index='4' location='goods' />
              <DropdownLink name='Credit' index='5' location='credit' />
            </div>
            <div className='dropdown-title-container'>
              <p className='nav-large-index'>Index</p>
            </div>
          </div>
        ) : <></>}
      </div>
    </>
  );
}

export default Menu;
