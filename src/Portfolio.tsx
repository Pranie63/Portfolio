import React from 'react'
import './Portfolio.css';
import Intro from './Intro';
import Content from './Content'

function Portfolio() {
    return(
        <div className='body'>
            <Intro name="Pranav" titles={["Software Engineer", "Software Developer"]} description={"Test"}/>
            <Content projectMappings={new Map<String, Array<String>>()}/>
        </div>
    )
}

export default Portfolio;