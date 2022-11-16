import React from 'react';
import "./Navbar.css";
import logo from '../../Assets/logo.png';
import profile from '../../Assets/profile.svg';
import {FiChevronDown} from 'react-icons/fi';

const Navbar = () => {
    return (
        <section className='container'>
            <nav className='nav'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu">
                    <a href="">My Assignment</a>
                    <a href="">Chat with Mentor</a>
                    <span className='profile'>
                        <a href="">
                            <img className='profile_icon' src={profile} alt="" />
                            ProfileName <FiChevronDown/>
                        </a>
                    </span>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;