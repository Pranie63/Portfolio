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
        <div className="content">
            <ProjectCats projectMappings={props.projectMappings} setProjectCat={setProjectCat}/>
            <Projects projects={props.projectMappings.get(curProjectCat)}/>
        </div>
    )
}

export default Content