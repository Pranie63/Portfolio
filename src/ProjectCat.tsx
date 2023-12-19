import './ProjectCat.css'

type ProjectCatProps = {
    name: String
    setProjectCat: Function
}

function ProjectCat(props: ProjectCatProps) {
    return (
        <div onClick={props.setProjectCat(props.name)}>
            {props.name}
        </div>
    )
}

export default ProjectCat