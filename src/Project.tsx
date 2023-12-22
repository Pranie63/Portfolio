import './Project.css'

type ProjectProps = {
    name: String
}

function Project(props: ProjectProps) {
    return (
        <div className='project'>
            {props.name}
        </div>
    )
}

export default Project