import "./contact-content.css"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default class ContactContent extends React.Component {
    render() {
        return (
            <div className="contacts">
                <ul>
                    <li>
                        <a href="mailto:fekoerbel@hotmail.com">
                            <FontAwesomeIcon icon={solid('envelope')} /> fekoerbel@hotmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/fekoerbel/">
                            <FontAwesomeIcon icon={brands('linkedin')} /> linkedin.com/in/fekoerbel/
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/fekoerbel">
                            <FontAwesomeIcon icon={brands('github')} /> github.com/fekoerbel
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}