import './Intro.css'

type IntroProps = {
    name: String
    titles: Array<String>
    description: String
}

function Intro(props: IntroProps) {
    return(
        <div>
            {props.name}
            {props.titles[0]}
            {props.titles[1]}
            {props.description}
        </div>
    )
}

export default Intro