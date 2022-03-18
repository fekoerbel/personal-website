import './home-content.css'
import React from 'react'

export default class HomeContent extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <p className='home-text'>
                        Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, view site statistics, or contact me.    
                    </p>
           
                    <p className='page-sources'>
                        Source available here.
                    </p>     
            </React.Fragment>
        )
    }
}