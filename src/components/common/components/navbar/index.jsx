import React, { useState } from "react";
import logo from "../../../../assets/branding/Logo.png";
import Toggler from "./toggler";
import "./styles.css";
import Dropdown from "./dropdown";

function NavBar() {
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
        {dropdownStatus && <Dropdown />}
      </div>
    </>
  );
}

export default NavBar;
