import './Content.css'
import ProjectCats from './ProjectCats'

type ContentProps = {
    projectMappings: Map<String, Array<String>>
}

function Content(props: ContentProps) {
    return (
        <div>
            <ProjectCats projectMappings={props.projectMappings}/>
        </div>
    )
}

export default Content