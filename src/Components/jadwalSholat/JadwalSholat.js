import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Pages/userContext";
import axios from 'axios';
import { FaCloudMoon, FaLocationArrow } from "react-icons/fa";

export function JadwalSholat() {

    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    const [jadwal, setJadwal] = useState({ Asr: "", Dhuhr: "", Maghrib: "", Isha: "", Fajr: "" });

    const [dateVar, setDateVar] = useState({});

    document.title = "Jadwal Sholat";

    useEffect(() => {
        document.title = "Jadwal Sholat - Khatamin";
        setMenuActive("jadwalSholat");
        let tanggal = new Date();
        axios.get(`http://api.aladhan.com/v1/calendar?latitude=${JSON.parse(localStorage.getItem('latitude'))}&longitude=${JSON.parse(localStorage.getItem('longitude'))}&method=2&month=${tanggal.getMonth() + 1}&year=${tanggal.getFullYear()}`, {
        }).then(
            (res) => {
                setJadwal(res.data.data[tanggal.getDate()].timings);
                localStorage.setItem('jadwal', JSON.stringify(res.data.data[tanggal.getDate()].timings));
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    function jam() {
        let tanggal = new Date();
        return (`${tanggal.getHours()} : ${tanggal.getMinutes()}`);
    }

    function matahari(){
        let tanggal = new Date();
        let jam = tanggal.getHours();
        let menit = tanggal.getMinutes();
        
        if(jam >= 0 && jam <= 5){
            let persen = (((jam + 6) * 60) + menit) / 720 * 100;
            return(`${persen.toFixed(0)}`);
        } else if(jam >= 6 && jam <= 18){
            let persen = (((jam - 6) * 60) + menit) / 720 * 100;
            return(`${persen.toFixed(0)}`);
        } else {
            let persen = (((jam - 18) * 60) + menit) / 720 * 100;
            return(`${persen.toFixed(0)}`);
        }
    }

    return (
        <div className="jadwalSholat">
            <div className="content">
                <div className="content-left">
                    <div className="animation">
                        <div className="layer1">

                        </div>
                        <div className="layer2">
                            <div className="shadow1">
                                <div className="shadow2">
                                    <div className="layer3">
                                        <h1>{matahari()}<span> %</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="information">
                        <div className="clock">
                            <h1>
                                {
                                    jam()
                                }
                            </h1>
                        </div>
                        <div className="location">
                            <h2><FaLocationArrow /> <span>Mencari Lokasi Anda</span></h2>
                            <h3>Latitude {JSON.parse(localStorage.getItem("latitude")).toFixed(6)}, Longitude {JSON.parse(localStorage.getItem("longitude")).toFixed(6)}</h3>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="card-group">
                        <div className="shadow shadow-1">
                            <div className="card">
                                <div className="card-left">
                                    <h5>Subuh</h5>
                                    <h4>{jadwal.Fajr}</h4>
                                </div>
                                <div className="card-right">
                                    <div className="box">
                                        <FaCloudMoon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow shadow-2">
                            <div className="card">
                                <div className="card-left">
                                    <h5>Dhuhur</h5>
                                    <h4>{jadwal.Dhuhr}</h4>
                                </div>
                                <div className="card-right">
                                    <div className="box">
                                        <FaCloudMoon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow shadow-3">
                            <div className="card">
                                <div className="card-left">
                                    <h5>Ashar</h5>
                                    <h4>{jadwal.Asr}</h4>
                                </div>
                                <div className="card-right">
                                    <div className="box">
                                        <FaCloudMoon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow shadow-4">
                            <div className="card">
                                <div className="card-left">
                                    <h5>Magrib</h5>
                                    <h4>{jadwal.Maghrib}</h4>
                                </div>
                                <div className="card-right">
                                    <div className="box">
                                        <FaCloudMoon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow shadow-5">
                            <div className="card">
                                <div className="card-left">
                                    <h5>Isya</h5>
                                    <h4>{jadwal.Isha}</h4>
                                </div>
                                <div className="card-right">
                                    <div className="box">
                                        <FaCloudMoon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}