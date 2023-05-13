import React, { useState } from 'react'
import './SNav.css'



function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  const buttonId = `${props.name}`;
  return (
    <div className="dropdownS">
      <button className="dropbtnsS" onClick={toggleDropdown} >{buttonId}</button>
      {isOpen && (
        <div className="dropdownS-content">
          <a href="www.google.com">Link 1</a>
          <a href="www.google.com">Link 2</a>
          <a href="www.google.com">Link 3</a>
        </div>
      )}
    </div>
  );
}

const SNav = () => {
  return (
    <div className='containersS'>
      <div className="headersSec">
        <ul className='sul'>
          <li><Dropdown name="Buy"/></li>
          <li><Dropdown name="Rent"/></li>
          <li><Dropdown name="Sell"/></li>
          <li><Dropdown name="Home Lons"/></li>
          <li><Dropdown name="Property Services"/></li>
          <li><Dropdown name="MB Advice"/></li>
          <li><Dropdown name="Help"/></li>
        </ul>
      </div>
      
    </div>
  
  )
}

export default SNav