import "./exp.css"
import React from "react"

export default class Exp extends React.Component {
    render() {
        return (
            <li>
                <h4>
                    {this.props.experiences.company} - {this.props.experiences.position}
                </h4>
                <h5>
                    {this.props.experiences.daterange}
                </h5>
                <ul>
                    {this.props.experiences.points.map((point) => {
                        return (
                            <li>
                                {point}
                            </li>
                        )
                    })}
                </ul>

            </li>
        )
    }
}