import React from 'react'
import './Property.css'
import { PropertyData } from '../../data';

const ImageText = () => {
    return (
        <div className='PContainer'>
            <div className="ProHeding">
                <h3>We've got properties for everyone</h3>
            </div>
            
            <div className="Pcards">
                {PropertyData.map((data, index) => (
                    <div className="Icontainer" key={index}>
                        <div className="bg-image hover-zoom">
                            <img src={data.img} alt='prop'   className='imggs'/>
                        </div>
                        <div className="bottom-Number">{data.count}</div>
                        <div className="bottom-Name">{data.item}</div>
                        <div className="bottom-left">Explore</div>
                    </div>
                ))}
            </div>
        </div>
    );
};




export default ImageText