import "./logo.css"
import React from "react";
import logo from "../../assets/logo-felipe1.png"
import { NavLink } from 'react-router-dom';

export default class Logo extends React.Component {
    render() {
        return (
            <NavLink to="/"><img src={logo} alt="Logo Felipe Koerbel" /></NavLink>
        )
    }
} 