import React from 'react';
import './RefferEarn.css';

const RefferEarn = () => {
    return (
        <div className='reffer_earn'>
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
                </div>
                <button className='withdraw'>Withdraw Balance</button>
            </div>
        </div>
    );
};

export default RefferEarn;