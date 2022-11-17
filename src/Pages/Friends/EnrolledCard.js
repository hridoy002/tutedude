import React from 'react';
import './EnrolledCard.css';

const EnrolledCard = () => {
    return (
        <div>
            <p className='enrolled'>Friends who enrolled <span style={{ color: '#626262' }}>(3)</span></p>

            <div className="card_container">
                <div className="card">
                    <div className="title">
                        <h5>Dhiraj Saxena</h5>
                        <p>14 Sep,2022</p>
                    </div>
                    <p style={{marginTop:"-10px"}}>Course Enrolled(6)</p>
                    <div className="course_title1">
                        <p>UI/UX</p>
                        <p>Photoshop</p>
                        <p>Illustrator</p>
                    </div>
                    <div className="course_title2">
                        <p>Phyton</p>
                        <p>MERN</p>
                        <p>Java</p>
                    </div>
                    <p style={{marginTop:"-10px"}}>Referral Amount<span  style={{fontSize:'24px',fontWeight:"600"}}> ₹185</span></p>
                </div>
                <div className="card">
                    <div className="title">
                        <h5>Subhash Mishra</h5>
                        <p>15 Sep,2022</p>
                    </div>
                    <p style={{marginTop:"-10px"}}>Course Enrolled(23)</p>
                    <div className="course_title1">
                        <p>UI/UX</p>
                        <p>Photoshop</p>
                        <p>Illustrator</p>
                    </div>
                    <div className="course_title2">
                        <p>Phyton</p>
                        <p>MERN</p>
                        <p>Java</p>
                        <p>C++</p>
                    </div>
                    <p style={{marginTop:"-10px"}}>Referral Amount<span  style={{fontSize:'24px',fontWeight:"600"}}> ₹485</span></p>
                </div>
                <div className="card">
                    <div className="title">
                        <h5>Prafull Kumar</h5>
                        <p>16 Sep,2022</p>
                    </div>
                    <p style={{marginTop:"-10px"}}>Course Enrolled(23)</p>
                    <div className="course_title1">
                        <p>UI/UX</p>
                        <p>Photoshop</p>
                        <p>Illustrator</p>
                    </div>
                    <div className="course_title2">
                        <p>Phyton</p>
                        <p>MERN</p>
                        <p>Java</p>
                        <p>C++</p>
                    </div>
                    <p style={{marginTop:"-10px"}}>Referral Amount<span  style={{fontSize:'24px',fontWeight:"600"}}> ₹185</span></p>
                </div>
                
            </div>

        </div>
    );
};

export default EnrolledCard;