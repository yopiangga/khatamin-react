import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Pages/userContext";
import axios from 'axios';
import { FaCloudMoon, FaLocationArrow } from "react-icons/fa";

export function JadwalSholat() {

    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    const [jadwal, setJadwal] = useState({Asr: "", Dhuhr: "", Maghrib: "", Isha: "", Fajr: ""});
    const [lokasi, setLokasi] = useState({latitude: 0, longitude: 0});
    
    useEffect(() => {
        setMenuActive("jadwalSholat");
        axios.get(`https://api.siforlat.com/api/v1/prayTimes`, {latitude: lokasi.latitude, longitude: lokasi.longitude, duration: 1}).then(
            (res) => {
                console.log(res.data.results.datetime.times);
                console.log("CORS gan :)");
                setJadwal(res.data.results.datetime.times);
            }
            ).catch((err) => {
                console.log(err);
        })
    }, [])
    
    const geoLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("browser anda jelek");
        }
    }
    
    const showPosition = (position) => {
        // console.log(position.coords);
        setLokasi({
            latitude: position.coords.latitude,
            longitude : position.coords.longitude
        })
    }
    geoLocation();
    
    
    return (
        <div className="jadwalSholat">
            <div className="content">
                <div className="content-left">
                    <div className="animation">

                    </div>

                    <div className="information">
                        <div className="clock">
                            <h1>ja</h1>
                        </div>
                        <div className="location">
                            <h2><FaLocationArrow /> <span>Mencari Lokasi Anda</span></h2>
                            <h3>Latitude {lokasi.latitude.toFixed(6)}, Longitude {lokasi.longitude.toFixed(6)}</h3>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="card-group">
                        <div className="shadow shadow-1">
                            <div className="card">
                                <div className="card-left">
                                    <h5>Subuh</h5>
                                    <h4>{jadwal.Fajr} WIB</h4>
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
                                    <h4>{jadwal.Dhuhr} WIB</h4>
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
                                    <h4>{jadwal.Asr} WIB</h4>
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
                                    <h4>{jadwal.Maghrib} WIB</h4>
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
                                    <h4>{jadwal.Isha} WIB</h4>
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