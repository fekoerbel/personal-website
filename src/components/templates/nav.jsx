import "./nav.css"
import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="menu">
                <ul>
                    <li className="first menu-hover">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu-hover">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="menu-hover">
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li className="menu-hover">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="menu-hover">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}