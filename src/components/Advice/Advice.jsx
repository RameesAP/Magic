import React from 'react'
import './Advice.css'
import { MdHomeWork } from 'react-icons/md'
import { Advicedata } from '../../data'

const Advice = () => {
    return (
        <div className='AContainer'>
            <div className="Aheader">
                <h3>Advice & Tool</h3>
            </div>
            <div className="AboxContainer">
                {Advicedata.map((item, index) => (
                    <div className="boxData" key={index}>
                        {item.icon}
                        <div className="boxHead"><h3>{item.title}</h3></div>
                        <div className="Aclass"><p>{item.description}</p></div>
                        <div className="action">Read More </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Advice