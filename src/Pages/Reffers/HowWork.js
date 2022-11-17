import React from 'react';
import './HowWork.css'

const HowWork = ({ item }) => {
    return (
        <div className='how_work'>
            <div className='img'>
                <img src={item.img} alt="" />
            </div>
            <div className='work_title'>
                <h6>{item.title}</h6>
                <p>{item.desc.head} <br /> {item.desc.tail}</p>
            </div>
        </div>
    );
};

export default HowWork;