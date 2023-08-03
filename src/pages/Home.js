import React from 'react'
import "../styles/Home.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import recommendations from './recommendations'
function Home() {
    return (
        <div className='coverhome'>
            <div className='Caption'><p>EXPLORE THE WORLD</p>
                <div className='buttonsdis'>


                    <button className='planjourney'>PLAN JOURNEY</button>
                    <button className='checkrec'>CHECK RECOMMENDATIONS</button></div></div >
        </div >
    )
}

export default Home