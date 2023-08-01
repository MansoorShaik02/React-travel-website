import React from 'react'
import "../styles/Traveldestinations.css"
import Travelcard from './Travelcard'
import timessquarehd from "../images/timessquarehd.jpg"
import { Travelhelper } from '../helpers/Travelhelper'


function Traveldestinations() {
    return (
        <div className="bigtravel">
            {Travelhelper.map((item) => {
                return <Travelcard name={item.name} image={item.image}></Travelcard>
            })}
            {/*  <Travelcard name="hello" image={timessquarehd}></Travelcard> */}
        </div>
    )
}

export default Traveldestinations