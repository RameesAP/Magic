import React, { useState } from 'react'
import './Options.css'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { options } from '../../data';

const Options = () => {
    const [key, setKey] = useState('Buy');
    return (
        <div className='OptionsContainer'>
            <div className="OptionHeding">
                <h3>Property Options in New-Delhi</h3>
            </div>
            <div className="OptionsBox">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >

                    {options.map((option, index) => (
                        <Tab key={index} className='FirestTab' eventKey={option.title} title={option.title}>
                            <div className="Opborder">
                                <div className="OptionGroup">
                                    {options.map((option, index) => (
                                        <div className="Optionrap">
                                            <div className="Optioheading" key={index}>
                                                <div className="Odata"> {option.cat}</div>

                                                <div className="Optionlist">
                                                    <ul className='opul'>
                                                        {option.items.map((item, i) => (
                                                            <li className='opli' key={i}>
                                                                <div className="optinitem">{item}</div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Tab>
                    ))}


                </Tabs>
            </div>
        </div>
    );
};

export default Options

// listStyle: "none"