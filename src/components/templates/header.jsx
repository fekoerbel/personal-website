import "./header.css"
import React from "react";
import Logo from "./logo";
import Nav from './nav'
export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo />
                <Nav />
            </header>

        )
    }
}