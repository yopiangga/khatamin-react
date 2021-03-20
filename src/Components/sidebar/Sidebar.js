import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from 'react';
import { useContext } from 'react'
import logo from '../../assets/images/logo.png'
import { UserContext } from '../../Pages/userContext'
import $ from 'jquery';

import { FaAngleLeft, FaBookReader, FaCalendarCheck, FaMoneyCheckAlt, FaNewspaper, FaPray, FaPrayingHands } from 'react-icons/fa';

const handleMenu = () => {
    $('.sidebar').removeClass('active');
}

export function Sidebar() {

    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="menu">
                <ul>
                    <li className={menuActive == "beranda" ? "active" : ""}>
                        <Link to="/" >
                            <div className="icon"><FaBookReader /> </div>
                            <h4>Beranda</h4>
                        </Link>
                    </li>
                    <li className={menuActive == "timeLine" ? "active" : ""}>
                        <Link to="/berita" >
                            <div className="icon"><FaNewspaper /> </div>
                            <h4>Berita</h4>
                        </Link>
                    </li>
                    <li className={menuActive == "jadwalSholat" ? "active" : ""}>
                        <Link to="/jadwal-sholat" >
                            <div className="icon"><FaPray /> </div>
                            <h4>Jadwal Sholat</h4>
                        </Link>
                    </li>
                    <li className={menuActive == "kalender" ? "active" : ""}>
                        <Link to="/kalender" >
                            <div className="icon"><FaCalendarCheck /> </div>
                            <h4>Kalender</h4>
                    </Link>
                    </li>
                    {/* <li className={menuActive == "kompas" ? "active" : ""}>
                        <Link to="/kompas" >
                            <div className="icon"><FaBookReader /> </div>
                            <h4>Kompas</h4>
                    </Link>
                    </li> */}
                    <li className={menuActive == "tuntunanIbadah" ? "active" : ""}>
                        <Link to="/tuntunan-ibadah" >
                            <div className="icon"><FaPrayingHands /> </div>
                            <h4>Tuntunan</h4>
                    </Link>
                    </li>
                    <li className={menuActive == "infaq" ? "active" : ""}>
                        <Link to="/infaq" >
                            <div className="icon"><FaMoneyCheckAlt /> </div>
                            <h4>Infaq</h4>
                    </Link>
                    </li>
                </ul>
            </div>

            <div className="menuHidden">
                <div className="circle" onClick={handleMenu}>
                    <FaAngleLeft />
                </div>
            </div>
        </div>
    )
}
