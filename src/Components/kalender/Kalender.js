import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { UserContext } from "../../Pages/userContext";
import $ from 'jquery';

export function Kalender() {

    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    const [kalender, setKalender] = useState([{ date: { gregorian: { day: "", month : {en : ""}, year : "", weekday: { en: "" } }, hijri: { day: "", month : {en : ""}, year : "", weekday: { en: "" } } } }]);
    const [dataSinggah, setDataSinggah] = useState([]);

    useEffect(() => {
        setMenuActive("kalender");
        let tanggal = new Date();
        axios.get(`http://api.aladhan.com/v1/calendar?latitude=${JSON.parse(localStorage.getItem('latitude'))}&longitude=${JSON.parse(localStorage.getItem('longitude'))}&method=2&month=${tanggal.getMonth() + 1}&year=${tanggal.getFullYear()}`, {
        }).then(
            (res) => {
                cekStart(res.data.data[0].date.gregorian.weekday.en);
                setKalender(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(kalender);

    const handleClick = () => {
        $('.kalender .content .content-left').addClass('resize');
        $('.kalender .content .content-right').addClass('active');

    }

    const cekStart = (hari) => {
        if(hari == "Monday"){
            setDataSinggah([1]);
        } else if(hari == "Tuesday") {
            setDataSinggah([1, 2]);
        } else if(hari == "Wednesday") {
            setDataSinggah([1, 2, 3]);
        } else if(hari == "Thursday") {
            setDataSinggah([1, 2, 3, 4]);
        } else if(hari == "Friday") {
            setDataSinggah([1, 2, 3, 4, 5]);
        } else if(hari == "Saturday") {
            setDataSinggah([1, 2, 3, 4, 5, 6]);
        }
    }

    return (
        <div className="kalender">
            <div className="content">
                <div className="content-left">
                    <div className="header">
                        <div className="tahun-left">
                            <h4>{kalender[0].date.hijri.day} {kalender[0].date.hijri.month.en}</h4>
                        </div>
                        <div className="tahun-now">
                            <h3>{kalender[0].date.gregorian.month.en} {kalender[0].date.gregorian.year}</h3>
                        </div>
                        <div className="tahun-right">
                            <h4>{kalender[0].date.hijri.year} H</h4>
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
                                dataSinggah.map(function (el, idx){
                                    return(
                                        <div className="box" key={idx}>
                                            
                                        </div>
                                    )
                                })
                            }

                            {
                                kalender.map(function (el, idx) {
                                    return (
                                        <div className="box" key={idx}>
                                            <div className={(el.date.gregorian.day == "19") ? "circle active" : "circle"} onClick={handleClick}>
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