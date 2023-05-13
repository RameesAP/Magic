import React, { useState } from 'react'
import './Explore.css'
import { Explorecarosil } from '../../data';




const ServicesCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNextClick = () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselWidth = carouselInner.scrollWidth;
    const cardWidth = carouselInner.firstChild.offsetWidth;

    if (scrollPosition < carouselWidth - cardWidth * 4) {
      setScrollPosition((prevPosition) => prevPosition + cardWidth);
    }
  };

  const handlePrevClick = () => {
    const cardWidth = document.querySelector('.carousel-inner').firstChild.offsetWidth;

    if (scrollPosition > 0) {
      setScrollPosition((prevPosition) => prevPosition - cardWidth);
    }
  };


  return (


    <div className='ss'>
      {Explorecarosil.map((card, index) => (
        <div className="hy">

          <div className="card" key={index}>
            <div className="ff">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">₹ {card.price} Per sqft</p>
                <p className="card-text">{card.count} Reviews</p>
                <div className='blueblock'>
                  <div className="img-wrapper"><img src={card.imgSrc} className="d-block " alt="Card" style={{ borderRadius: "50%", height: "70px", width: "70px", position: "relative", bottom: "20px" }} /></div>
                  <h4 style={{ marginTop: "2px", fontSize: "15px", alignItems: "center", position: "relative", top: "22px", color: "red" }}>{card.pro} Properties for Sale</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>

  )


}

const Explore = () => {

  return (
    <div className='Econtsiner'>
      <div className="Ecen">
        {/* <div className="Ecard">

          <div className='Etext'>
            <h2><i>Explore</i></h2>
            <h3>Popular Localities In New Delhi</h3>
          </div>

        </div> */}
        <div className="carolCard">
          <ServicesCarousel />
        </div>
      </div>

    </div>
  )
}


export default Explore