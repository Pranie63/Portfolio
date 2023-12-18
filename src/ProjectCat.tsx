import '/ProjectCat.css'

type ProjectCatProps = {
    name: String
}

function ProjectCat(props: ProjectCatProps) {
    return (
        <div>
            {props.name}
        </div>
    )
}

export default ProjectCat