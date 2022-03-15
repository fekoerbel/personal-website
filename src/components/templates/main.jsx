import "./main.css"
import React from "react"

export default class Main extends React.Component {
    render() {
        return (
            <article>
                <header>
                    <h1>
                        Resume - muda de acordo com o arquivo
                    </h1>
                    <div className="links"> <h5>experience</h5> <h5>skills</h5> <h5>muda de acordo com o arquivo</h5></div>
                </header>
                <div>conteúdo</div>


            </article>
        )
    }
}