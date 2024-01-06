import React from 'react'
import './Portfolio.css';
import Intro from './Intro';
import Content from './Content';
import type {ProjectProps} from './Project'
import pic from './ProfilePic.jpg'
import WordlePic from './WordlePic.png'
import CourseReviewPic from './CourseReviewPic.png'
import ListPic from './ListPic.png'

// var test: Array<ProjectProps> = new Array<ProjectProps>({name: "test"}, {name: "test2"})
const projectMappings: Map<String, Array<ProjectProps>> = new Map<String, Array<ProjectProps>>(
    [["Java", 
    [{name: "Course Review Website", link: "https://github.com/Pranie63/Course-Review-Website", imgPath: CourseReviewPic}, 
    {name: "List Implementation", link: "https://github.com/Pranie63/Generic-Lists", imgPath: ListPic}, 
    {name: "Wordle", link: "https://github.com/Pranie63/Wordle", imgPath: WordlePic}]], 
    ["Javascript", 
    [{name: "eCommerce Bookstore", link: "https://github.com/Ananya-Ananda/eCommerceProject", imgPath: ""}]], 
    ["Cybersecurity", [{name: "Blockchain", link: "https://github.com/Pranie63/PranavPenny", imgPath: ""}]], 
    ["Robotics", [{name: "Racing Algorithms", link: "https://github.com/Pranie63/Racing-Algorithms/", imgPath: ""}]]]);
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