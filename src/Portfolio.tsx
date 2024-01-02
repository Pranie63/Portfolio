import React from 'react'
import './Portfolio.css';
import Intro from './Intro';
import Content from './Content';

const projectMappings: Map<String, Array<String>> = new Map<String, Array<String>>([["Java", ["test", "1test"]], ["Javascript", ["test1", "1test1"]], ["Cybersecurity", ["1", "2", "3", "4", "5"]], ["Robotics", ["1", "2", "3", "4", "5"]]]);
const description: String = "This is a portfolio containing a collection of my most memorable pieces of work. They extend from personal projects to cumulative course work, representing my journey as a software engineer."

function Portfolio() {
    return(
        <div className='body'>
            <Intro name="Pranav Ramkumar" titles={["Software Engineer", "Software Developer"]} description={description}/>
            <Content projectMappings={projectMappings}/>
        </div>
    )
}

export default Portfolio;