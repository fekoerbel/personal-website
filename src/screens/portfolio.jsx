import Main from "../components/templates/main";
import React from "react";
import Job from "../components/portfolio/job";
import data from "../data/portfolio"


export default class Portfolio extends React.Component {
    render() {
        return (
            <Main title="Portfolio" subtitle="My Portfolio">
                <div>
                    {data.map((job) => {
                        return (<Job data={job} key={job.title} />)
                    })}

                </div>
                
            </Main>
        )
    }
}