import './Content.css'
import ProjectCats from './ProjectCats'
import Projects from './Projects'
import { useState } from 'react'

type ContentProps = {
    projectMappings: Map<String, Array<String>>
}

function Content(props: ContentProps) {
    const [curProjectCat, setProjectCat] = useState<String>("Java");
    return (
        <div>
            <div className='title'>
                Projects
            </div>
            <div id = "content" className="content">
                <ProjectCats projectMappings={props.projectMappings} setProjectCat={setProjectCat}/>
                <Projects projects={props.projectMappings.get(curProjectCat)}/>
            </div>
        </div>
    )
}

// var header: HTMLElement | null = document.getElementById("content")

// function fadeOutOnScroll(element: HTMLElement | null) {
// 	if (!element) {
// 		return;
// 	}
	
// 	var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
// 	var elementHeight = element.clientHeight;
// 	var scrollTop = document.documentElement.scrollTop;
	
// 	var opacity = 1;
	
// 	if (scrollTop > distanceToTop) {
// 		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
// 	}
	
// 	if (opacity >= 0) {
// 		element.style.opacity = opacity.toString();
// 	}
// }

// function scrollHandler() {
// 	fadeOutOnScroll(header);
// }

// window.addEventListener('scroll', scrollHandler);

export default Content