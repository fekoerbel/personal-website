import React from "react";
import './skills.css'

export default class Skills extends React.Component {
    render() {
        return (
            <li className="skill-bar" style={{background: '#9e9e9e5e'}}>
                <div className="skill-bar-flex" style={{background: `${this.props.skills.color}`, width: `calc(${this.props.skills.competency}% * 20)`}}>
                    <span className="skill-bar-text">{this.props.skills.title}</span>
                    <span className="skill-competency">{this.props.skills.competency}/5</span>
                </div>
            </li>
        )
    }
}