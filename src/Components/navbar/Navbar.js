
import {FaBars, FaRegBell} from 'react-icons/fa';
import $ from 'jquery';
import { useState } from 'react';

export function Navbar() {

    const [titlePage, setTitlePage] = useState({first: "Qur'an", last: "Audio"});

    const handleMenu = () => {
        $('.sidebar').toggleClass('active');
    }

    return(
        <div className="navbar">
            <div className="menu">
                <FaBars onClick={handleMenu}/>
            </div>
            <h1>{titlePage.first} <span>{titlePage.last}</span></h1>
            <div className="icon">
                <div className="icon-bell">
                    <FaRegBell />
                    <div className="circle">5</div>
                </div>
            </div>
        </div>
    )
} 
