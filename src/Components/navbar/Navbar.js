
import { FaBars, FaCloudMoon, FaLongArrowAltUp, FaRegBell, FaRegTimesCircle } from 'react-icons/fa';
import $ from 'jquery';
import { useState } from 'react';

export function Navbar() {

    const [titlePage, setTitlePage] = useState({ first: "Qur'an", last: "Audio" });

    const handleMenu = () => {
        $('.sidebar').toggleClass('active');
        $('.notifikasi').removeClass('active');
    }

    const handleNotifikasi = () => {
        $('.sidebar').removeClass('active');
        $('.notifikasi').toggleClass('active');
    }

    return (
        <div className="navbar">
            <div className="menu">
                <FaBars onClick={handleMenu} />
            </div>
            <h1>{titlePage.first} <span>{titlePage.last}</span></h1>
            <div className="icon" onClick={handleNotifikasi}>
                <div className="icon-bell">
                    <FaRegBell />
                    <div className="circle">5</div>
                </div>
            </div>
            <div className="notifikasi">
                <div className="triangle"></div>
                <div className="body-box">
                    <div className="notifikasi-head">
                        <h4>Pengingat</h4>
                        <hr />
                    </div>
                    <div class="notifikasi-body">
                        <div class="item">
                            <div className="item-left">
                                <div className="box">
                                    <FaCloudMoon />
                                </div>

                            </div>
                            <div className="item-right">
                                <h5>Waktu Sholat Dhuhur</h5>
                                <h4>12.05</h4>
                            </div>
                        </div>

                        <div className="notifikasi-close">
                            <hr />
                            <div className="text" onClick={handleNotifikasi}>
                                <FaRegTimesCircle /> <h4>Tutup </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
