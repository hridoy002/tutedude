import React from 'react';
import EnrolledCard from './EnrolledCard';
import './Friends.css';
import {FiArrowLeft} from 'react-icons/fi'

const Friends = ({setPage}) => {
    return (
        <div className='friends'>
            <button onClick={()=>setPage('second')} className='go'><FiArrowLeft style={{fontSize:'20px'}}/> Go Back</button>
            <div className='reffer_ac'>
                <div >
                    <p className='ref'>Your Refferal Code</p>
                    <p className="code">E D C H 5 4</p>
                </div>
                <div className='wallet'>
                    <p style={{ color: "#800080" }}>Wallet Balance</p>
                    <p style={{ fontSize: "16px", fontWeight: "500" }}>₹ 500</p>
                </div>
            </div>
            <EnrolledCard />
            
            <p style={{color:'#800080',fontSize:'16px',fontWeight:'500px',textDecoration:'none'}}>Terms & Conditons</p>
        </div>
    );
};

export default Friends;