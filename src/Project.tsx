import './Project.css'

type ProjectProps = {
    name: String
}

function Project(props: ProjectProps) {
    return (
        <div className='project' style={{backgroundImage: "url(https://t3.ftcdn.net/jpg/02/10/52/74/360_F_210527423_8Qdmmj7GlPEy0DknhPXtjigA54voMEDK.jpg)"}}>
            {props.name}
        </div>
    )
}

export default Project