import React from 'react'
import './Portfolio.css';
import Intro from './Intro';

function Portfolio() {
    return(
        <div className='body'>
            <Intro name="Pranav" titles={["Software Engineer", "Software Developer"]} description={"Test"}/>
        </div>
    )
}

export default Portfolio;