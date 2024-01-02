import './Intro.css'

type IntroProps = {
    name: String
    titles: Array<String>
    description: String
}

function Intro(props: IntroProps) {
    return(
        <div className='intro'>
            <div className='img' style={{backgroundImage: "url(https://t3.ftcdn.net/jpg/02/10/52/74/360_F_210527423_8Qdmmj7GlPEy0DknhPXtjigA54voMEDK.jpg)"}}></div>
            <div className='desc'>
                <div className='section'>Hey, you have entered {props.name}'s domain!</div>
                <div className='section'>{props.titles[0]} and {props.titles[1]}</div>
                <div className='section'>{props.description}</div>
            </div>
        </div>
    )
}

export default Intro