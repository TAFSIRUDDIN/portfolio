import React from 'react';
import avatar from '../img/ttt.jpg';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="NavBar">
            <nav className="nave">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                    <a href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">What I do</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Testimonial</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <footer className="menu-footer">
                    <p>
                        @2022 Tafsir uddin
                    </p>
                </footer>
            </nav>
            
        </div>
    );
};

export default Navbar;