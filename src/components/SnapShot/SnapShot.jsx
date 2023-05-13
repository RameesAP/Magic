import React from 'react'
import './SnapShot.css'
const data = [
  { count: 4054, projectname: 'Low Budget Flat', location: 'in New Delhi' },
  { count: 15, projectname: 'Properties for sale', location: 'in New Delhi' },
  { count: 10, projectname: 'Residental Property', location: 'Agents in New Delhi' },
  { count: 15, projectname: 'Residental Projects', location: 'In New Delhi' },
 
  // Add more data items as needed
];

const SnapShot = () => {
  return (
    <div className='SnapContainer'>
      <div className="SnapHeading">
        <h3>New Delhi Property Snapshot</h3>
      </div>
      <div className="Snapcover">
        <div className="SnapContentBox">
          <div className="SnapText">
            <p className="text-start">New Delhi is the most populous city in India. Being the capital city of India, New Delhi is a suburb of Delhi, situated on the banks of Yamuna. The city is known for its developing real estate market that is growing everyday due to huge number of migrants. New Delhi is the Northern Indian state, which is known for its modern and rich infrastructure and contemporary architecture. Along with all the aforementioned attraction New Delhi is a stunning....</p>
            <div className="SnapCoutData">
              {data.map((item, index) => (
                <div className="SnapBox" key={index}>
                   <p style={{fontSize:"20px"}}>{item.count}+</p>
                   <p>{item.projectname}</p>
                   <p>{item.location}</p>
                </div>

              ))}

            </div>
          </div>
        </div>
      </div>
      <div className="SnapYellow">
        <div className="SnapCo">
          <div className="SnapCoLeft">
                  <h3>Post your Property for Free</h3>
                  <h4 style={{fontWeight:"300"}}>List it on Magicbrick and get genuine leads</h4>
          </div>
          <div className="SnapCoRight">
                  <button style={{backgroundColor:"yellow",marginRight:"40px",width:"200px",height:"60px",borderRadius:"20px 20px 20px 20px",fontSize:"20px"}}>Post Property</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SnapShot