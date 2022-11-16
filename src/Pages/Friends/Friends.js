import React from 'react';
import EnrolledCard from './EnrolledCard';
import './Friends.css';

const Friends = () => {
    return (
        <div className='friends'>
            <p><a href="">UI/Ux</a> {'>'} <a href="">Refer & Earn</a> {'>'} <a href="">Friends Reffered</a></p>
            <div className='reffer_ac'>
                <div >
                    <p className='ref'>Your Refferal Code</p>
                    <p className="code">E D C H 5 4</p>
                </div>
                <div className='wallet'> 
                    <p style={{color:"#800080"}}>Wallet Balance</p>
                    <p style={{fontSize:"16px",fontWeight:"500"}}>₹ 500</p>
                </div>
            </div>
            <EnrolledCard />
        </div>
    );
};

export default Friends;