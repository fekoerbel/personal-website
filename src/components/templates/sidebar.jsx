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
                    Hi, I'm Felipe. I like building things. I am a Stanford ICME graduate, YC Alumni, and the co-founder and CTO of Arthena. Before Arthena I was at Matroid, Planet, Planetary Resources, Facebook, and SEDS.
                    </p>
                </div>
                <hr />
                <div className="sidebar-social">
                    <h2>Social Networks</h2>
                    <ul className="social-links">
                        <li>
                        <a href="#">
                            <FontAwesomeIcon icon={brands('linkedin')} />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <FontAwesomeIcon icon={brands('github')} />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <FontAwesomeIcon icon={solid('envelope')} />
                        </a>
                        </li>
                    </ul>
                    
                    
                </div>
            </aside>
        )
    }
}