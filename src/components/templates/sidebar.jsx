import "./sidebar.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from '../../assets/sidebar-photo3.png'

export default class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <img src={logo} alt="Felipe Koerbel dos Anjos" />
                <div className="sidebar-info">
                    <h1>
                        FELIPE KOERBEL
                    </h1>
                </div>
                <hr />
                <div className="sidebar-about">
                    <h2>About</h2>
                    <p>
                    Hi, I'am Felipe. I like building things. I'am graduated in Systems Analysis and Development. I also have degree in law. The knowledge in technology is my passion and I am currently developing my career in the I.T area. I have a broad knowledge of hardware, software and programming, teamworking skills and a logical approach to problem solving. 
                    </p>
                </div>
                <hr />
                <div className="sidebar-social">
                    <h2>Social Networks</h2>
                    <ul className="social-links">
                        <li>
                        <a href="https://www.linkedin.com/in/fekoerbel/" className="social-sidebar-color">
                            <FontAwesomeIcon icon={brands('linkedin')} />
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/fekoerbel" className="social-sidebar-color">
                            <FontAwesomeIcon icon={brands('github')} />
                        </a>
                        </li>
                        <li>
                        <a href="mailto:fekoerbel@hotmail.com" className="social-sidebar-color">
                            <FontAwesomeIcon icon={solid('envelope')} />
                        </a>
                        </li>
                    </ul>
                    
                    
                </div>
            </aside>
        )
    }
}