import "./exp.css"
import React from "react"

export default class Exp extends React.Component {
    render() {
        return (
            <li className="exp-item">
                <h4 className="exp-title">
                    {this.props.experiences.company} - {this.props.experiences.position}
                </h4>
                <h5 className="exp-date">
                    {this.props.experiences.daterange}
                </h5>
                <ul>
                    {this.props.experiences.points.map((point) => {
                        return (
                            <li className="points-list">
                                {point}
                            </li>
                        )
                    })}
                </ul>

            </li>
        )
    }
}