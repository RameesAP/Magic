import React from 'react'
import './Guid.css'
import { MDBContainer } from "mdb-react-ui-kit";
import { MdSlowMotionVideo } from 'react-icons/md'
import { IoNewspaperOutline } from 'react-icons/io5'
const Guid = () => {
    return (
        <div className='GuidContainer'>
            <div className="GuideHeading">
                <h3>Your Real Estate Guide</h3>
            </div>

            <div className="GBox">
                <div className="SBox">
                    <div className="SHeading">
                        <h4>Locality Videos</h4>
                    </div>
                    <div className="FvideoBox">
                        <div className="GSaprate">
                            <div className="Videotemp">

                                <MDBContainer>
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                            title="YouTube video"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                </MDBContainer>
                            </div>
                            <span>Locality Review - Lajpat Nagar, New Delhi</span>
                        </div>
                        <div className="GSaprate">
                            <div className="Videotemp">
                                <MDBContainer>
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                            title="YouTube video"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                </MDBContainer>
                            </div>
                            <span>
                                Locality Review - East of Kailash, New Delhi
                            </span>
                        </div>
                    </div>
                    <h3>See All</h3>
                </div>



                <div className="SBox">
                    <div className="SHeading">
                        <h4>industry Insights</h4>
                    </div>
                    <div className="lisitems">
                        <div className='Glists'>
                            <div className="Gicon">
                                <MdSlowMotionVideo style={{ width: "25px", height: "25px", display: "flex", marginLeft: "5px", marginRight: "5px", color: "red" }} />
                            </div>
                            <div className='GTest'>
                                <span>What Does RERA Carpet area Mean & How is it..</span>
                            </div>
                        </div>

                        <div className='Glists'>
                            <div className="Gicon">
                                <IoNewspaperOutline style={{ width: "25px", height: "25px", display: "flex", marginLeft: "5px", marginRight: "5px", color: "red" }} />
                            </div>
                            <div className='GTest'>
                                <span>Sale Deed - Meaning, Format, and Components..</span>
                            </div>
                        </div>
                        <div className='Glists'>
                            <div className="Gicon">
                                <IoNewspaperOutline style={{ width: "25px", height: "25px", display: "flex", marginLeft: "5px", marginRight: "5px", color: "red" }} />
                            </div>
                            <div className='GTest'>
                                <span>12 Cheapest Platforms To Pay Rent With Credit..</span>
                            </div>
                        </div>
                        <div className='Glists'>
                            <div className="Gicon">
                                <MdSlowMotionVideo style={{ width: "25px", height: "25px", display: "flex", marginLeft: "5px", marginRight: "5px", color: "red" }} />
                            </div>
                            <div className='GTest'>
                                <span>Circle Rate in Delhi - Area-Wise Categorization..</span>
                            </div>
                        </div>
                        <div className='Glists'>
                            <div className="Gicon">
                                <IoNewspaperOutline style={{ width: "25px", height: "25px", display: "flex", marginLeft: "5px", marginRight: "5px", color: "red" }} />
                            </div>
                            <div className='GTest'>
                                <span>Delhi Land Records (DLRC) 2023: How to Check..</span>
                            </div>
                        </div>
                    </div>
                    <h3>See All</h3>
                </div>


                <div className="SBox">
                    <div className="SHeading">
                        <h4>Legal Updates</h4>
                    </div>
                    <div className="GvideoBox">
                        <div className="SingleBox">
                            <div className="imagebox">
                                <img src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img" style={{ height: "70px", width: "80px" }} />
                            </div>
                            <div className="Gdiscrip">
                                <p>Inheritance Laws in india - All You Need to Know</p>
                                <h4>Read article</h4>
                            </div>
                        </div>
                        <div className="SingleBox">
                            <div className="imagebox">
                                <img src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img" style={{ height: "70px", width: "80px" }} />
                            </div>
                            <div className="Gdiscrip">
                                <p>Sale Deed - Menaing,Format,and Components of a Sale Deed</p>
                                <h4>Read article</h4>
                            </div>
                        </div>
                    </div>
                    <div className="GExplore">
                    <h3>See All</h3>
                    
                        <h4>Explore</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Guid