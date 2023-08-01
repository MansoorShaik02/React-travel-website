import React from 'react'
import "../styles/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Footerdes } from '../helpers/footerdes';

function Footer() {
    return (
        <div className='footerdiv'>
            <div className='Customercare'><h4>Customer Care</h4>
                <button>Contact Us</button>
                <button>FAQs</button>
                <button>Payments</button></div>
            <div className='Youraccount'><h4>Your Account</h4>
                <button>Create Account</button>
                <button>Log in</button>
            </div>

            <div className='topdestinations'><h4>Top Destinations</h4>
                {Footerdes.map((item) => {
                    return <p>{item.nameloc}</p>

                }

                )}
                <p></p></div>
            <div className='Socials'><h4>Socials</h4>
                <button>{<FacebookIcon />}</button>
                <button>{<InstagramIcon />}</button>
                <button>{<TwitterIcon />}</button>

            </div>
        </div>
    )
}

export default Footer