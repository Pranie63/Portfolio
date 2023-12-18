import './ProjectCats.css'
import ProjectCat from './ProjectCat'

type ProjectCatsProps = {
    projectMappings: Map<String, Array<String>>
}

function ProjectCats(props: ProjectCatsProps) {
    return (
        <div>
            {Array.from(props.projectMappings).map(([key, value]) => {
                return (
                    <ProjectCat name={key}/>
                )
            })}
        </div>
    )
}

export default ProjectCats