import Project from './Project'
import './Projects.css'

type ProjectsProps = {
    projects: Array<String> | undefined
}

function Projects(props: ProjectsProps) {
    return (
        <div>
            {props.projects?.map((project) => {
                return (
                    <Project name={project}/>
                )
            })}
        </div>
    )
}

export default Projects