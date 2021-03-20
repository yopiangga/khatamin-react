
import {FaBars, FaRegBell} from 'react-icons/fa';
import $ from 'jquery';

export function Navbar() {

    const handleMenu = () => {
        $('.sidebar').toggleClass('active');
    }

    return(
        <div className="navbar">
            <div className="menu">
                <FaBars onClick={handleMenu}/>
            </div>
            <h1>Quran <span>Audio</span></h1>
            <div className="icon">
                <div className="icon-bell">
                    <FaRegBell />
                    <div className="circle">5</div>
                </div>
            </div>
        </div>
    )
} 
