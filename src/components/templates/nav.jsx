import React from "react";
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        )
    }
}