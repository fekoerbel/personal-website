import "./main.css"
import React from "react"

export default class Main extends React.Component {
    render() {
        return (
            <article className="main">
                <header>
                    <h1>
                        { this.props.title }
                    </h1>
                    <div>{this.props.subtitle}</div>
                </header>
                <div>
                    { this.props.children }
                </div>
            </article>
        )
    }
}