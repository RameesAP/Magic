import React from 'react'
import './Services.css'
import { Row, Card } from 'react-bootstrap';
import { PServiceData } from '../../data';

const Services = () => {


  return (
    <div className='services'>
      <div className="serviceHeading">
        <h3>Property Services</h3>
      </div>
      <div className="cen">
        
          {PServiceData.map((card, idx) => (
            <Row key={idx} xs={1} md={1} className="g-4 ">
<div className="cards">
              <Row >
                <Card >
                  <Card.Img variant="top" src={card.img} style={{ width: "290px", height: "110px", objectFit: "cover" }} />
                  <Card.Body className='CArdbody' style={{ width: "300px", height: "100px" }}>
                    <Card.Title style={{ color: "black" }}>{card.title}</Card.Title>
                    <Card.Text style={{ color: "black" }}>{card.sub}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              </div>
            </Row>
          ))}
        </div>
      </div>
    
  );
};



export default Services