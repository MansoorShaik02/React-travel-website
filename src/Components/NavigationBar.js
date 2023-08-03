import React from 'react'
import { Link, useLocation } from "react-router-dom"
import "../styles/NavigationBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react'
import { Menu } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


function NavigationBar() {

    const [menuiconapp, setmenuiconapp] = useState(false)
    const Location = useLocation()

    /*     const [blur,setblur] = useState(false)
     */

    //isOpen is used to hide content when navbar is opened on mobile mode
    const [isOpen, setisopen] = useState(false)
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);
    useEffect(() => {
        setmenuiconapp(false);
    }, [Location]);

    return (

        <div className='bigNav' id={menuiconapp ? "open" : "close"} >
            <div className='menuicontoggle'><button className='menubuttontoggle' onClick={() => {
                setmenuiconapp((prev) => (!prev))
            }} >
                {menuiconapp ? (<CloseIcon />) : (<MenuIcon />)}


            </button></div>
            <div className='NavigationBar' >
                <Link to="/">HOME</Link>
                <Link to="/traveldestinations">DESTINATIONS</Link>
                <Link to="/signin">SIGN IN</Link>
            </div>

        </div >

    )
}

export default NavigationBar