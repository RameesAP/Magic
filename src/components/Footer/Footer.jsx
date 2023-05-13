import React from 'react'
import './Footer.css'
import { FiInstagram } from 'react-icons/fi'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='FooterContiners'>
            <div className="Fcaps">


                <div className="LeftFoot">
                    <div className="FFooter">
                        <h4>About Magicbricks</h4>
                        <span>Magicbricks is a full stack service provider for all real estate needs...</span>
                    </div>
                    <div className="SFooter">
                        <h4>More from our Network</h4>

                        <ul class="five-column-list">
                            <li>Times of India</li>
                            <li>Economic Times</li>
                            <li>Navbharat times</li>
                            <li>India Times</li>
                            <li>Filmfare</li>
                        </ul>

                    </div>
                    <div className="Tfooter">
                        < FiInstagram style={{ width: "30px", height: "30px" }} />
                        <BsFacebook style={{ width: "30px", height: "30px" }} />
                        <AiFillTwitterCircle style={{ width: "30px", height: "30px" }} />
                        <BsYoutube style={{ width: "30px", height: "30px" }} />

                    </div>
                </div>




                <div className='RightFoot'>
                    <div className="RFFooter">
                        <h4>Properties in India</h4>
                        <span>Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad</span>
                    </div>
                    <div className="RSFooter">
                        <h4>New Projects in India</h4>
                        <span>New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai | New Projects in Pune | New Projects in Noida | New Projects in Gurgaon | New Projects in Bangalore | New Projects in Ahmedabad</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer