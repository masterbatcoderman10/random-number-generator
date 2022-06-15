import React from "react";
import {motion} from 'framer-motion'
import "../App.css"

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <h1 className="brand">0123..</h1>
            </div>
            <div className="nav-menu">
                <ul className="nav-items">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Generator</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar