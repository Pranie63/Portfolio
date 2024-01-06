import './ProjectCat.css'
import { Dispatch, SetStateAction } from 'react'

type ProjectCatProps = {
    name: String
    setProjectCat: Dispatch<SetStateAction<String>>
    selected: Boolean
}

function ProjectCat(props: ProjectCatProps) {
    if (props.selected) {
        return (
            <div className = "projectCat" onMouseOver={() => {props.setProjectCat(""); setTimeout(() => props.setProjectCat(props.name), 5)}} style={{borderColor: "white"}}>
                {props.name}
            </div>
        )
    }
    return (
        <div className = "projectCat" onMouseOver={() => {props.setProjectCat(""); setTimeout(() => props.setProjectCat(props.name), 5)}}>
            {props.name}
        </div>
    )
}

export default ProjectCat