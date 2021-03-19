import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { UserContext } from "../../Pages/userContext";
import $ from 'jquery';

export function Kalender() {

    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    const [kalender, setKalender] = useState([{ date: { gregorian: { day: "", weekday: { en: "" } } } }]);
    const [dataSinggah, setDataSinggah] = useState([{ date: { gregorian: { day: "", weekday: { en: "" } } } }]);

    useEffect(() => {
        setMenuActive("kalender");
        let tanggal = new Date();
        axios.get(`http://api.aladhan.com/v1/calendar?latitude=${JSON.parse(localStorage.getItem('latitude'))}&longitude=${JSON.parse(localStorage.getItem('longitude'))}&method=2&month=${tanggal.getMonth() + 1}&year=${tanggal.getFullYear()}`, {
        }).then(
            (res) => {
                setKalender(res.data.data);
                // if(res.data.data[0].date.gregorian.weekday.en == "Monday"){
                //     setDataSinggah(dataSinggah.concat(res.data.data));
                //     setKalender(dataSinggah);
                // }
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(kalender);
    // console.log(kalender[0].date.gregorian.day);
    console.log(dataSinggah[0].date.gregorian.day);

    const handleClick = () => {
        // $('.calender .content .content-left .body .body-tanggal .circle').addClass
        $('.kalender .content .content-left').addClass('resize');
        $('.kalender .content .content-right').addClass('active');

    }

    if(kalender[0].date.gregorian.weekday.en == "Monday"){
        console.log("hallo");
    }

    return (
        <div className="kalender">
            <div className="content">
                <div className="content-left">
                    <div className="header">
                        <div className="tahun-left">
                            <h4>2020</h4>
                        </div>
                        <div className="tahun-now">
                            <h3>Maret 2021</h3>
                        </div>
                        <div className="tahun-right">
                            <h4>2022</h4>
                        </div>
                    </div>
                    <div className="body">
                        <div className="body-hari">
                            <h3>Min</h3>
                            <h3>Sen</h3>
                            <h3>Sel</h3>
                            <h3>Rab</h3>
                            <h3>Kam</h3>
                            <h3>Jum</h3>
                            <h3>Sab</h3>
                        </div>
                        <div className="body-tanggal">
                            {/* <div className="box">
                                <div className="circle" onClick={handleClick}>
                                    <h4>1</h4>
                                </div>
                            </div> */}


                            {
                                kalender.map(function (el, idx) {
                                    return (
                                        <div className="box" key={idx}>
                                            <div className="circle" onClick={handleClick}>
                                                <h4>{el.date.gregorian.day}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="content-head">
                        <h2>Acara</h2>
                        <hr />
                    </div>
                    <div className="content-body">
                        <div className="items">
                            <h3>Isra' Mi'raj</h3>
                            <hr />
                            <p>17 Maret 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}