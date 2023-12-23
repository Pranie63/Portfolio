import './ProjectCat.css'
import { Dispatch, SetStateAction } from 'react'

type ProjectCatProps = {
    name: String
    setProjectCat: Dispatch<SetStateAction<String>>
}

function ProjectCat(props: ProjectCatProps) {
    return (
        <div className = "projectCat" onMouseOver={() => {props.setProjectCat(""); setTimeout(() => props.setProjectCat(props.name), 5)}}>
            {props.name}
        </div>
    )
}

export default ProjectCat