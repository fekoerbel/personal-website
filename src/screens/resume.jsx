import Main from "../components/templates/main";
import React from "react";
import Degrees from "../components/resume/degrees";
import degrees from "../data/resume/degrees";

export default class Resume extends React.Component {
    render() {
        return (
            <Main title="Resume" 
            subtitle="MY CURRICULUM WITH EDUCATIONAL, WORK INFORMATION AND MY SKILLS">
                <ul>
                    {degrees.map((degree) => {
                        return (
                            <Degrees degrees={degree}  key={degree.school} />
                        )
                    })}
                </ul>               
            </Main>
        )
    }
}