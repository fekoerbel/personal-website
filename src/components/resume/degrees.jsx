import React from "react";
import "./degrees.css"


export default class Degrees extends React.Component {
    render() {
        return (
                <li>
                    <div>
                        {this.props.degrees.degree}
                    </div>
                    <div>
                        <a href={this.props.degrees.link}>{this.props.degrees.school}</a>, {this.props.degrees.year}
                    </div>
                </li>
        )
    }
}