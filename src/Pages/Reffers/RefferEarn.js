import React, { useEffect, useState } from 'react';
import HowWork from './HowWork';
import './RefferEarn.css';

const RefferEarn = ({ page, setPage }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(result => setData(result));
    }, []);
    return (
        <div className='reffer_earn'>
            <div className="refferal_sec">
                <div className="refferal_card">
                    <div className="refferal_acc">
                        <div>
                            <h6>Referral Earning</h6>
                            <p>2500</p>
                        </div>
                        <div>
                            <h6>Total Refferal</h6>
                            <p>7</p>
                        </div>
                        <div>
                            <h6>Wallet Balance</h6>
                            <p>500s</p>
                        </div>
                        <div className='withdraw1'>
                            <button>Withdraw Balance</button>
                        </div>
                    </div>
                    <div className='withdraw2'>
                        <button>Withdraw Balance</button>
                    </div>

                </div>
                <div className="refferal_code">
                    <h2>Your Refferal Code</h2>
                    <p>E D C H 5 4</p>
                </div>
            </div>
            <div>
                <h2 style={{ color: "#800080", marginBottom: '20px', marginTop: '40px' }}>How does it work ?</h2>
                <div className='works'>
                    {data.map((item, index) => <HowWork key={index} item={item} />)}
                </div>
            </div>
            <div className="terms">
                <p onClick={() => setPage('first')}>Friends Who Enrolled</p>
                <p>Terms & Condition</p>
            </div>
        </div>
    );
};

export default RefferEarn;