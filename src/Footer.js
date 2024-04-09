import React from 'react'
import insta from './insta.png'
import linkedin from './icons8-linked-in-100.png'
import x from './X.png'
import git from './asd.png'
import { PiCopyrightFill } from "react-icons/pi";

import './App.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='icons'>
                <div>
                    <a className='ss' target='_blank' href="https://www.instagram.com/ram_harsh_pandit/?hl=en">
                        <img src={insta} alt="" />
                    </a></div>
                <div>
                    <a className='ss' target='_blank' href="https://www.linkedin.com/in/ram-harsh-pandey-b2782222a/">
                        <img src={linkedin} alt="" />
                    </a></div>
                <div>
                    <a className='ss' target='_blank' href="https://twitter.com/RamHarshPandey4">
                        <img src={x} alt="" />
                    </a></div>
                <div>
                    <a className='ss' target='_blank' href="https://github.com/ram-ethan/">
                        <img src={git} alt="" />
                    </a></div>
            </div>
            <div className='copyright'>
                <h3>Ram Harsh Pandey</h3>
                <div className="cpy">
                    <span>Copyright </span> <PiCopyrightFill />  <span> 2023 </span>
                </div>
            </div>
        </div>
    )
}
