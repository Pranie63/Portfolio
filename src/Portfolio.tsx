import React from 'react'
import './Portfolio.css';
import Intro from './Intro';
import Content from './Content';

const projectMappings: Map<String, Array<String>> = new Map<String, Array<String>>([["test", ["test"]], ["test1", ["test"]]]);

function Portfolio() {
    return(
        <div className='body'>
            <Intro name="Pranav" titles={["Software Engineer", "Software Developer"]} description={"Test"}/>
            <Content projectMappings={projectMappings}/>
        </div>
    )
}

export default Portfolio;