
import {FaRegBell} from 'react-icons/fa';

export function Navbar() {

    return(
        <div className="navbar">
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
