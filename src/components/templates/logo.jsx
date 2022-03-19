import "./logo.css"
import React from "react";
import logo from "../../assets/logo-felipe1.png"

export default class Logo extends React.Component {
    render() {
        return (
            <img src={logo} alt="Logo Felipe Koerbel" />
        )
    }
} 