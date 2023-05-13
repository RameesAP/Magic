import React, { useState } from 'react'
import './New.css'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { NewData } from '../../data';

const New = () => {

    const [key, setKey] = useState('West Enclave');

    return (
        <div className='NewCont'>
            <div className="NContainer">
                <h4>New Projects in New Delhi</h4>
            </div>
            <div className="NewItembox">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >

                    {NewData.map((option, index) => (
                        <Tab key={index} className='NewTab' eventKey={option.title} title={option.title}>
                            <div className="Newborder">
                                <div className="NewGroup">
                                    {NewData.map((option, index) => (
                                       
                                            <div className="NewOp" key={index}>
                                                <div className="Newdatas"> {option.cat}</div>

                                            </div>
                                        
                                    ))}
                                </div>
                            </div>
                        </Tab>
                    ))}


                </Tabs>
            </div>
        </div>
    )
}

export default New