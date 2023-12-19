import './ProjectCats.css'
import ProjectCat from './ProjectCat'

type ProjectCatsProps = {
    projectMappings: Map<String, Array<String>>
    setProjectCat: Function
}

function ProjectCats(props: ProjectCatsProps) {
    return (
        <div>
            {Array.from(props.projectMappings).map(([key, value]) => {
                return (
                    <ProjectCat name={key} setProjectCat={props.setProjectCat}/>
                )
            })}
        </div>
    )
}

export default ProjectCats