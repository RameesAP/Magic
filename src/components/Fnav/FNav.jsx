import React, { useState } from 'react'
import './Fnav.css'


function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }
    const buttonId = `${props.name}`;
    return (
        <div className="dropdownF">
            <button className="dropbtn"  onClick={toggleDropdown} >{buttonId}</button>
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

const FNav = () => {
    return (
        <div className='containerf'>
            <div className='HeaderMain'>

                <div className='LeftHeader'>
                    <div className='logo'>magicBricks</div>
                    <h4><Dropdown name="New-Delhi"/></h4>
                    

                </div>



                <div className='RightHeader'>
                    <ul className='ulF'>
                       
                        <li><Dropdown name="MB Prime"/></li>
                        <li><Dropdown name="Login"/></li>
                        <li ><button style={{ backgroundColor: "white", borderRadius: "50px", padding: "6px 35px", cursor: "pointer" ,borderStyle:"none"}}>Post Property</button></li>
                    </ul>

                </div>
            </div>
        </div>
    )

}

export default FNav