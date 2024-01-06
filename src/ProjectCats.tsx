import './ProjectCats.css'
import ProjectCat from './ProjectCat'
import { Dispatch, SetStateAction } from 'react'
import type {ProjectProps} from './Project'

type ProjectCatsProps = {
    projectMappings: Map<String, Array<ProjectProps>>
    setProjectCat: Dispatch<SetStateAction<String>>
}

function ProjectCats(props: ProjectCatsProps) {
    return (
        <div className='projectCats'>
            <div className='header'>
                Categories
            </div>
            {Array.from(props.projectMappings).map(([key, value]) => {
                return (
                    <ProjectCat name={key} setProjectCat={props.setProjectCat} />
                )
            })}
        </div>
    )
}

export default ProjectCats