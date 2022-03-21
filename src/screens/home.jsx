import React from "react";
import HomeContent from "../components/home/home-content";
import Main from "../components/templates/main";

export default class Home extends React.Component {
    render() {
        return (
            <Main title="About this Website"
            subtitle = "A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH JAVASCRIPT.">
                <HomeContent />

            </Main>
        )
    }
}
