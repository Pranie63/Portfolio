import './ProjectCats.css'
import ProjectCat from './ProjectCat'
import { Dispatch, SetStateAction } from 'react'

type ProjectCatsProps = {
    projectMappings: Map<String, Array<String>>
    setProjectCat: Dispatch<SetStateAction<String>>
}

function ProjectCats(props: ProjectCatsProps) {
    return (
        <div className='projectCats'>
            {Array.from(props.projectMappings).map(([key, value]) => {
                return (
                    <ProjectCat name={key} setProjectCat={props.setProjectCat}/>
                )
            })}
        </div>
    )
}

export default ProjectCats