import "./main.css"
import React from "react"

export default class Main extends React.Component {
    render() {
        return (
            <article className="main">
                <header className="header-main">
                    <h1>
                        { this.props.title }
                    </h1>
                    <h2>{this.props.subtitle}</h2>
                </header>
                <hr />
                <div className="content">
                    { this.props.children }
                </div>
            </article>
        )
    }
}