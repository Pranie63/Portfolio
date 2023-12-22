import React from 'react'
import './Portfolio.css';
import Intro from './Intro';
import Content from './Content';

const projectMappings: Map<String, Array<String>> = new Map<String, Array<String>>([["test", ["test", "1test"]], ["test1", ["test1", "1test1"]], ["test2", ["1", "2", "3", "4", "5"]], ["test3", ["1", "2", "3", "4", "5"]]]);

function Portfolio() {
    return(
        <div className='body'>
            <Intro name="Pranav" titles={["Software Engineer", "Software Developer"]} description={"Test"}/>
            <Content projectMappings={projectMappings}/>
        </div>
    )
}

export default Portfolio;