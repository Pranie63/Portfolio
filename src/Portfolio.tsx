import React from 'react'
import './Portfolio.css';
import Intro from './Intro';
import Content from './Content';
import type {ProjectProps} from './Project'
import WordlePic from './WordlePic.png'
import CourseReviewPic from './CourseReviewPic.png'
import ListPic from './ListPic.png'
import BookstorePic from './BookstorePic.png'
import BlockchainPic from './BlockchainPic.png'
import RacingAlgoPic from './RacingAlgoPic.jpg'
import GameControllerPic from './GameControllerPic.png'

const projectMappings: Map<String, Array<ProjectProps>> = new Map<String, Array<ProjectProps>>(
    [
        ["Java", 
            [
                {name: "Course Review Website", link: "https://github.com/Pranie63/Course-Review-Website", imgPath: CourseReviewPic}, 
                {name: "List Implementation", link: "https://github.com/Pranie63/Generic-Lists", imgPath: ListPic}, 
                {name: "Wordle", link: "https://github.com/Pranie63/Wordle", imgPath: WordlePic}
            ]
        ], 
        ["Javascript", 
            [
                {name: "eCommerce Bookstore", link: "https://github.com/Ananya-Ananda/eCommerceProject", imgPath: BookstorePic}
            ]
        ], 
        ["Cybersecurity", 
            [
                {name: "Blockchain", link: "https://github.com/Pranie63/PranavPenny", imgPath: BlockchainPic}
            ]
        ], 
        ["Robotics", 
            [
                {name: "Racing Algorithms", link: "https://github.com/Pranie63/Racing-Algorithms/", imgPath: RacingAlgoPic},
                {name: "Game Controller", link: "https://github.com/Pranie63/Game-Controller", imgPath: GameControllerPic}
            ]
        ]
    ]
);
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