import React, { useState } from 'react'
import './Main.css'
import Carousel from 'react-bootstrap/Carousel';
import { carosildata } from '../../data';


function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  const buttonId = `${props.name}`;
  return (
    <div className="dropdownM">
      <button className="dropbtnM" onClick={toggleDropdown} >{buttonId}</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="www.google.com">Link 1</a>
          <a href="www.google.com">Link 2</a>
          <a href="www.google.com">Link 3</a>
        </div>
      )}
    </div>
  );
}

const CarouselExample = () => {
  return (
    <Carousel>
      {carosildata.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.imageSrc} alt={`Slide ${index + 1}`} />
          <Carousel.Caption>
            <h3>{item.captionTitle}</h3>
            <p>{item.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};



const Main = () => {

  return (
    <div className='MainConainer'>


      <div className='MainContent'>
        <div className="mineMenus">
          <div className="mainHeader">
            <h2>Find a home you'll Love</h2>
          </div>
          <div className="mainUls">
            <ul className='mainul'>
              <li>Buy</li>
              <li>Rent</li>
              <li>PG</li>
              <li>Plot</li>
              <li>Commercial</li>
              <li>Post Free Property Ad</li>
            </ul>
          </div>
          <div className="mainInput">
            <div className="finput">
              <input placeholder='Add More..'></input>
              <Dropdown name="Flat" />
              <Dropdown name="Budget" />
              <button className='MainButton'>Search</button>
            </div>
          </div>
        </div>
        <div className='carosil'>

          {/* <UncontrolledExample /> */}
          <CarouselExample />

        </div>
      </div>


    </div>
  )
}

export default Main