import "./sidebar.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <img src="https://via.placeholder.com/150x150" alt="Felipe Koerbel dos Anjos" />
                <div className="sidebar-info">
                    <h1>
                        FELIPE KOERBEL
                    </h1>
                    <a href="mailto:fekoerbel@hotmail.com">FEKOERBEL@HOTMAIL.COM</a>
                </div>
                <hr />
                <div className="sidebar-about">
                    <h2>About</h2>
                    <p>
                    Hi, I'am Felipe. I like building things. I'am Graduating in Systems Analysis and Development. I also have degree in law. The knowledge in technology is my passion and I am currently developing my career in the I.T area. I have a broad knowledge of hardware, software and programming, teamworking skills and a logical approach to problem solving. 
                    </p>
                </div>
                <hr />
                <div className="sidebar-social">
                    <h2>Social Networks</h2>
                    <ul className="social-links">
                        <li>
                        <a href="https://www.linkedin.com/in/fekoerbel/">
                            <FontAwesomeIcon icon={brands('linkedin')} />
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/fekoerbel">
                            <FontAwesomeIcon icon={brands('github')} />
                        </a>
                        </li>
                        <li>
                        <a href="mailto:fekoerbel@hotmail.com">
                            <FontAwesomeIcon icon={solid('envelope')} />
                        </a>
                        </li>
                    </ul>
                    
                    
                </div>
            </aside>
        )
    }
}