import React from "react";
import "./job.css"


export default class Job extends React.Component {
    render() {
        
        return (
            <div className="job">
                <header>
                    <h1>
                        {this.props.data.title}
                    </h1>
                    <h2>
                        {this.props.data.subtitle}
                    </h2>
                </header>
                <figure>
                    <a href={this.props.data.link}><img src={`${process.env.PUBLIC_URL}${this.props.data.image}`} alt={this.props.data.title} /></a>
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