import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../screens/home";
import About from "../screens/about"
import Resume from "../screens/resume"
import Portfolio from "../screens/portfolio"
import Contact from "../screens/contact"


export default class Router extends React.Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        )
    }
}