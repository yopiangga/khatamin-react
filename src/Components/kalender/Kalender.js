import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { UserContext } from "../../Pages/userContext";
import $ from 'jquery';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export function Kalender() {

    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    const [kalender, setKalender] = useState([{ date: { gregorian: { day: "", month : {en : ""}, year : "", weekday: { en: "" } }, hijri: { day: "", month : {en : ""}, year : "", weekday: { en: "" } } } }]);
    const [dataSinggah, setDataSinggah] = useState([]);
    const [acara, setAcara] = useState({
        date : {
            hijri : {
                date : "",
                month : {
                    ar : "",
                    en: ""
                }
            }
        }
    });

    useEffect(() => {
        document.title = "Kalender - Khatamin";
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

    const handleClick = (event) => {
        $('.kalender .content .content-left').addClass('resize');
        $('.kalender .content .content-right').addClass('active');

        setAcara(kalender[event]);
    }

    const handleClose = () => {
        $('.kalender .content .content-left').removeClass('resize');
        $('.kalender .content .content-right').removeClass('active');
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
                        <div className="body-hari" id="desktop">
                            <h3>Min</h3>
                            <h3>Sen</h3>
                            <h3>Sel</h3>
                            <h3>Rab</h3>
                            <h3>Kam</h3>
                            <h3>Jum</h3>
                            <h3>Sab</h3>
                        </div>
                        <div className="body-hari" id="mobile">
                            <h3>M</h3>
                            <h3>S</h3>
                            <h3>S</h3>
                            <h3>R</h3>
                            <h3>K</h3>
                            <h3>J</h3>
                            <h3>S</h3>
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
                                    let tanggal = new Date();
                                    return (
                                        <div className="box" key={idx}>
                                            <div className={(el.date.gregorian.day == `${tanggal.getDate()}`) ? "circle active" : "circle"} onClick={()=> {handleClick(idx)}}>
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
                    <div className="content-btn" onClick={handleClose}>
                        <FaLongArrowAltRight />
                    </div>
                    <div className="content-head">
                        <h2>{acara.date.hijri.month.ar}</h2>
                        <hr />
                    </div>
                    <div className="content-body">
                        <div className="items">
                            <h3>{acara.date.hijri.month.en}</h3>
                            <hr />
                            <p>{acara.date.hijri.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}