import './Projects.css'

type ProjectsProps = {
    projects: Array<String> | undefined
}

function Projects(props: ProjectsProps) {
    return (
        <div>
            {props.projects}
        </div>
    )
}

export default Projects