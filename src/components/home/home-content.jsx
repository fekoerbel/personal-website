import './home-content.css'
import React from 'react'

export default class HomeContent extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <p className='home-text'>
                        Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, or contact me.    
                    </p>
           
                    <p className='page-sources'>
                        Source available here... not yet.
                    </p>     
            </React.Fragment>
        )
    }
}