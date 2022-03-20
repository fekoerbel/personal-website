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
                    Visit this project in my repository on github. <a href="https://github.com/fekoerbel/personal-website" className='repository-link'>Here</a>. 
                    </p>     
            </React.Fragment>
        )
    }
}