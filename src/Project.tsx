import './Project.css'

type ProjectProps = {
    name: String
}

function Project(props: ProjectProps) {
    return (
        <div className='project' style={{background: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(" + props.imgPath.toString() + ")"}}>
            {props.name}
        </div>
    )
}

export default Project