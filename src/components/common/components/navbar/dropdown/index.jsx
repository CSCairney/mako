import DropdownLink from "./dropdownLink";
import "./styles.css";

const Dropdown = () => {

    return (
        <div className='dropdown-wrapper'>
            <div className='dropdown-link-container'>
              <DropdownLink name='About' index='1' location='#about' />
              <DropdownLink name='Info' index='2' location='#info' />
              <DropdownLink name='Artwork' index='3' location='#artwork' />
              <DropdownLink name='Goods' index='4' location='#goods' />
              <DropdownLink name='Credit' index='5' location='#credit' />
            </div>
            <div className='dropdown-title-container'>
              <p className='nav-large-index'>Index</p>
            </div>
          </div>
    )
}

export default Dropdown;