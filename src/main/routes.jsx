import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../components/home/home";
import About from "../components/about/about"
import Resume from "../components/resume/resume"
import Portfolio from "../components/portfolio/portfolio"
import Contact from "../components/contact/contact"


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