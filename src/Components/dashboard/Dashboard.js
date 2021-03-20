
import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { FaBookReader, FaLongArrowAltRight } from 'react-icons/fa';
import { UserContext } from '../../Pages/userContext';
import axios from 'axios';
import $, { data } from 'jquery';

export function Dashboard() {

    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    // const [suratGroups, setSuratGroups] = useState([{ nama: "", arti: "", nomor: "", asma: "" }]);
    const [suratGroups, setSuratGroups] = useState([{ name: { short: "", transliteration: { id: "" }, translation: { id: "" } } }]);
    const [surat, setSurat] = useState({ name: "", verses: [], numberOfVerses: "" });

    useEffect(() => {
        setMenuActive("beranda");
        axios.get(`https://api.quran.sutanlab.id/surah/`).then(
            (res) => {
                setSuratGroups(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleClick = (event) => {
        setSurat("");
        let id = event.target.id;
        $('#audio').stop();
        $('.card-surat-detail').addClass('active');
        $('.card-group').addClass('nano');
        $('.circle-book').addClass('active');

        axios.get(`https://api.quran.sutanlab.id/surah/${id}`).then(
            (res) => {
                setSurat(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handleSurat = () => {
        $('.card-surat-detail').removeClass('active');
        $('.card-group').removeClass('nano');
        $('.circle-book').removeClass('active');
    }

    const handleAudio = (event) => {
        let id = event.target;
        console.log(id);
    }

    return (
        <div className="dashboard">
            <div className="filter">

            </div>

            <div className="card-surat">

                <div className="card-surat-detail">
                    {
                        surat.verses == null ?
                            <div className="card">
                                <div className="card-head">
                                    <h2> </h2>
                                    <div className="text-arab">
                                        <h1> </h1>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h4> </h4>
                                    <p> </p>
                                    <audio controls>
                                        <source type="audio/mp3" id="audio" />
                                    </audio>
                                </div>
                            </div>
                            :
                            surat.verses.map(function (el, idx) {
                                return (
                                    <div className="card" key={idx}>
                                        <div className="card-head">
                                            <h2>{surat.number}:{el.number.inSurah}</h2>
                                            <div className="text-arab">
                                                <h1>{el.text.arab}</h1>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4>Bahasa Indonesia</h4>
                                            <p>{el.translation.id}</p>
                                            <audio controls onClick={handleAudio}>
                                                <source src={el.audio.primary} type="audio/mp3" id="audio" />
                                            </audio>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </div>

                <div className="card-group">

                    {
                        suratGroups[0].name == null ?

                            <div className="shadow">
                                <div className="card">
                                    <div className="card-head">
                                        <div className="circle"></div>
                                        <div className="icon">
                                            <FaLongArrowAltRight />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="left">
                                            <h4></h4>
                                            <h5></h5>
                                        </div>
                                        <div className="right">
                                            <h4></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            :

                            suratGroups.map(function (el, idx) {
                                return (
                                    <div className="shadow" key={idx}>
                                        <div className="card">
                                            <div className="card-head" id={el.number}>
                                                <div className="circle">{el.number}</div>
                                                <div className="icon" id={el.number} onClick={handleClick}>
                                                    <FaLongArrowAltRight id={el.number} />
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="left">
                                                    <h4>{el.name.transliteration.id}</h4>
                                                    <h5>{el.name.translation.id}</h5>
                                                </div>
                                                <div className="right">
                                                    <h4>{el.name.short}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </div>

                <div className="circle-book" onClick={handleSurat}>
                   <FaBookReader /> 
                </div>
            </div>
        </div>
    )
}