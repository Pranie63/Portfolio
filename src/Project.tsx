import './Project.css'

type ProjectProps = {
    name: String
    link: String
    imgPath: String
}

function Project(props: ProjectProps) {
    return (
        <div className='project' style={{background: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(" + props.imgPath.toString() + ")"}}>
            <a href={props.link.toString()} target="_blank" rel="noopener noreferrer">
                {props.name}
            </a>
        </div>
    )
}

export type {ProjectProps}
export default Project