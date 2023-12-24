import React from 'react'
import './Portfolio.css';
import Intro from './Intro';
import Content from './Content';

const projectMappings: Map<String, Array<String>> = new Map<String, Array<String>>([["Java", ["test", "1test"]], ["Javascript", ["test1", "1test1"]], ["Cybersecurity", ["1", "2", "3", "4", "5"]], ["Robotics", ["1", "2", "3", "4", "5"]]]);

function Portfolio() {
    return(
        <div className='body'>
            <Intro name="Pranav" titles={["Software Engineer", "Software Developer"]} description={"Test"}/>
            <Content projectMappings={projectMappings}/>
        </div>
    )
}

export default Portfolio;