import './Content.css'
import ProjectCats from './ProjectCats'
import Projects from './Projects'
import { useState } from 'react'
import type {ProjectProps} from './Project'

type ContentProps = {
    projectMappings: Map<String, Array<ProjectProps>>
}

function Content(props: ContentProps) {
    const [curProjectCat, setProjectCat] = useState<String>("Java");
    return (
        <div>
            <div className='title'>
                Projects
            </div>
            <div className='contentDesc'>
                Click on the projects to view the source code and learn more.
            </div>
            <div id = "content" className="content">
                <ProjectCats projectMappings={props.projectMappings} setProjectCat={setProjectCat} curProjectCat={curProjectCat}/>
                <Projects projects={props.projectMappings.get(curProjectCat)}/>
            </div>
        </div>
    )
}

export default Content