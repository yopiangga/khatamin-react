
import { FaBars, FaCloudMoon, FaLongArrowAltUp, FaRegBell, FaRegTimesCircle } from 'react-icons/fa';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Navbar() {

    const [titlePage, setTitlePage] = useState({ first: "Qur'an", last: "Audio" });
    const [jadwal, setJadwal] = useState({ Asr: 0, Dhuhr: 0, Maghrib: 0, Isha: 0, Fajr: 0 });

    useEffect(() => {
        let tanggal = new Date();
        axios.get(`http://api.aladhan.com/v1/calendar?latitude=${JSON.parse(localStorage.getItem('latitude'))}&longitude=${JSON.parse(localStorage.getItem('longitude'))}&method=2&month=${tanggal.getMonth() + 1}&year=${tanggal.getFullYear()}`, {
        }).then(
            (res) => {
                setJadwal(res.data.data[tanggal.getDate()].timings);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])
    
    var jamSholat = [jadwal.Fajr, jadwal.Dhuhr, jadwal.Asr, jadwal.Maghrib, jadwal.Isha];
    var waktuSholat = ["Subuh", "Dhuhur", "Ashar", "Maghrib", "Isya"];
    var jam = [];    
    jam[0] = jadwal.Fajr[0] + jadwal.Fajr[1];
    jam[0] = parseInt(jam[0]);
    jam[1] = jadwal.Dhuhr[0] + jadwal.Dhuhr[1];
    jam[1] = parseInt(jam[1]);
    jam[2] = jadwal.Asr[0] + jadwal.Asr[1];
    jam[2] = parseInt(jam[2]);
    jam[3] = jadwal.Maghrib[0] + jadwal.Maghrib[1];
    jam[3] = parseInt(jam[3]);
    jam[4] = jadwal.Isha[0] + jadwal.Isha[1];
    jam[4] = parseInt(jam[4]);
    
    let date = new Date();
    var saatIni = date.getHours();
    var posisi = 10;

    for(let i=0; i<5; i++){
        if(saatIni > jam[i])
            posisi = (i + 1) % 5;
    }

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
                    <div className="circle" style={(posisi == 10) ? {display: 'none'} : {display: 'flex'}}>1</div>
                </div>
            </div>
            <div className="notifikasi">
                <div className="triangle"></div>
                <div className="body-box">
                    <div className="notifikasi-head">
                        <h4>Pengingat</h4>
                        <hr />
                    </div>
                    <div className="notifikasi-body">
                        <div className="item" style={(posisi == 10) ? {display: 'none'} : {display: 'flex'}}>
                            <div className="item-left">
                                <div className="box">
                                    <FaCloudMoon />
                                </div>

                            </div>
                            <div className="item-right">
                                <h5>Waktu Sholat {waktuSholat[posisi]}</h5>
                                <h4>{jamSholat[posisi]}</h4>
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
