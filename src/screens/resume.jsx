import Main from "../components/templates/main";
import React from "react";
import Degrees from "../components/resume/degrees";
import degrees from "../data/resume/degrees";
import experiences from "../data/resume/experience";
import Exp from "../components/resume/exp";
import { skills } from "../data/resume/skills";
import Skills from "../components/resume/skills";

export default class Resume extends React.Component {
    render() {
        return (
            <Main title="Resume" 
            subtitle="MY CURRICULUM WITH EDUCATIONAL, WORK INFORMATION AND MY SKILLS">
                <div>
                    <h2 className="resume-title-topic">
                        Degrees
                    </h2>
                    <ul>
                        {degrees.map((degree) => {
                            return (
                                <Degrees degrees = {degree}  key = {degree.school} />
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h2 className="resume-title-topic">
                        Experience
                    </h2>
                    <ul>
                        {experiences.map((experience) => {
                            return (
                                <Exp experiences = {experience} key = {experience.company}/>
                            )
                        })}
                    </ul>
                    <div>
                        <h2 className="resume-title-topic">
                            Skills
                        </h2>
                        <ul>
                            {skills.map((skill) => {
                                return (
                                <Skills skills = {skill} key = {skill.title} />
                                )
                            })}
                        </ul>
                    </div>
                </div>  
            </Main>
        )
    }
}