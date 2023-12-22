import './Content.css'
import ProjectCats from './ProjectCats'
import Projects from './Projects'
import { useState } from 'react'

type ContentProps = {
    projectMappings: Map<String, Array<String>>
}

function Content(props: ContentProps) {
    let [curProjectCat, setProjectCat] = useState<String>("test")
    return (
        <div className="content">
            {/* <button onClick={() => setProjectCat("test1")}>BUTTON</button>
            {curProjectCat} */}
            <ProjectCats projectMappings={props.projectMappings} setProjectCat={setProjectCat}/>
            <Projects projects={props.projectMappings.get(curProjectCat)}/>
        </div>
    )
}

export default Content