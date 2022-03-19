import React from "react";
import "./degrees.css"


export default class Degrees extends React.Component {
    render() {
        return (
                <li className="degree-item">
                    <div className="degree-title">
                        {this.props.degrees.degree}
                    </div>
                    <div className="degree-school">
                        <a href={this.props.degrees.link}>{this.props.degrees.school}</a>, <span>{this.props.degrees.year}</span>
                    </div>
                </li>
        )
    }
}