import './Intro.css'
import profilePic from './ProfilePic.jpg'

type IntroProps = {
    name: String
    titles: Array<String>
    description: String
}

// const imgPath: String = "./../";

function Intro(props: IntroProps) {
    return(
        <div>
            <div className='pagetitle'>
                {props.name}'s Portfolio
            </div>
            <div className='intro'>
                <div className='img'>
                    <img src={profilePic}></img>
                </div>
                <div className='desc'>
                    <div className='section'>Hey, you have entered {props.name}'s domain!</div>
                    <div className='section'>{props.titles[0]} and {props.titles[1]}</div>
                    <div className='section'>{props.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Intro