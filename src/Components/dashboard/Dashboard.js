
import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { UserContext } from '../../Pages/userContext';
import axios from 'axios';
import $ from 'jquery';

export function Dashboard() {

    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    const [suratGroups, setSuratGroups] = useState([{ nama: "", arti: "", nomor: "", asma: "" }]);
    const [surat, setSurat] = useState({ name: "", verses: [], numberOfVerses: "" });

    useEffect(() => {
        setMenuActive("beranda");
        axios.get(`https://api.banghasan.com/quran/format/json/surat`).then(
            (res) => {
                setSuratGroups(res.data.hasil);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleClick = (event) => {
        let id = event.target.id;
        $('.card-surat-detail').addClass('active');
        $('.card-group').addClass('nano');
        // setSurat({ name: "", verses: [], numberOfVerses: "" });

        axios.get(`https://api.quran.sutanlab.id/surah/${id}`).then(
            (res) => {
                setSurat(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
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
                            console.log("loading")
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
                                                <source src={el.audio.primary} type="audio/mp3" />
                                            </audio>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </div>

                <div className="card-group">

                    {
                        suratGroups[0].nama == null ?

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
                                    <div className="shadow" key={el.nomor}>
                                        <div className="card">
                                            <div className="card-head" id={el.nomor}>
                                                <div className="circle">{el.nomor}</div>
                                                <div className="icon" id={el.nomor} onClick={handleClick}>
                                                    <FaLongArrowAltRight id={el.nomor} />
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="left">
                                                    <h4>{el.nama}</h4>
                                                    <h5>{el.arti}</h5>
                                                </div>
                                                <div className="right">
                                                    <h4>{el.asma}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </div>
            </div>
        </div>
    )
}