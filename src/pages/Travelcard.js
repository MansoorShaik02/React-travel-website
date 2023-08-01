import { React } from 'react'
import "../styles/travelcard.css"
import { Textfit } from 'react-textfit';






function travelcard(props) {
    return (
        <div className='travelcard' style={{ backgroundImage: `url(${props.image}) ` }}
        >
            {/*    <p> Times Square</p> */}
            <Textfit mode="single" className='fittyname'>
                {props.name}
            </Textfit>
        </div >
    )
}

export default travelcard