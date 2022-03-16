import React from "react";
import Main from "../templates/main"

export default class Home extends React.Component {
    render() {
        return (
            <Main title="About this Website"
            subtitle = "A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH MODERN JAVASCRIPT.">
                <div>
                <p>Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, view site statistics, or contact me.</p>
                </div>
                <div>
                <p>Source available here.</p>
                </div>
            </Main>
        )
    }
}
