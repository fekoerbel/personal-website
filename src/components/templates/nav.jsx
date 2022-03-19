import "./nav.css"
import React from "react";
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="menu">
                <ul>
                    <li className="first menu-hover">
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="menu-hover">
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li className="menu-hover">
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="menu-hover">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}