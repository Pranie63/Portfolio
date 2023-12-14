import React from 'react'
import './Portfolio.css';

type PortfolioProps = {
    Input: String
}

function Portfolio(props: PortfolioProps) {
    return(
        <div className='body'>
            {props.Input}
        </div>
    )
}

export default Portfolio;