import React from "react";


export default class Job extends React.Component {
    render() {
        
        return (
            <div>{this.props.data.title}</div>
        )
    }
}