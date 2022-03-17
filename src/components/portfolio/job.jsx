import React from "react";
import "./job.css"


export default class Job extends React.Component {
    render() {
        
        return (
            <div className="job">
                <h1>
                    {this.props.data.title}
                </h1>
                <h2>
                    {this.props.data.subtitle}
                </h2>
                <figure>
                    <img src={this.props.data.image} alt={this.props.data.title} />
                    <figcaption>
                        <p>
                            {this.props.data.desc}
                        </p>
                    </figcaption>
                </figure>

            </div>
        )
    }
}