import Project from './Project'
import './Projects.css'
import type {ProjectProps} from './Project'

type ProjectsProps = {
    projects: Array<ProjectProps> | undefined
}

function Projects(props: ProjectsProps) {
    return (
        <div className='projects'>
            {props.projects?.map((project) => {
                return (
                    <Project name={project.name} link={project.link} imgPath={project.imgPath}/>
                )
            })}
        </div>
    )
}

export default Projects