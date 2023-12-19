import './ProjectCat.css'
import { Dispatch, SetStateAction } from 'react'

type ProjectCatProps = {
    name: String
    setProjectCat: Dispatch<SetStateAction<String>>
}

function ProjectCat(props: ProjectCatProps) {
    return (
        <button onClick={() => props.setProjectCat(props.name)}>
            {props.name}
        </button>
    )
}

export default ProjectCat