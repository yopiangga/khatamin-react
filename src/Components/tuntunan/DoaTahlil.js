
import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { UserContext } from '../../Pages/userContext';
import axios from 'axios';
import $, { data } from 'jquery';

export function DoaTahlil() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    const [tahlil, setTahlil] = useState([{ arabic: "", id: "", translation: "", title: "" }]);

    useEffect(() => {
        document.title = "Doa Tahlil - Khatamin";
        setMenuActive("tuntunanIbadah");
        axios.get(`https://islamic-api-zhirrr.vercel.app/api/tahlil`).then(
            (res) => {
                setTahlil(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

        $('.card-surat-detail').addClass('active');
        $('.card-group').addClass('nano');

    return (
        <div className="dashboard">
            <div className="filter">

            </div>

            <div className="card-surat">

                <div className="card-surat-detail" style={{width: '100%'}}>
                    {
                        tahlil[0].id == null ?
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
                            tahlil.map(function (el, idx) {
                                return (
                                    <div className="card" key={idx}>
                                        <div className="card-head">
                                            <h2>{el.id}</h2>
                                            <div className="text-arab">
                                                <h1>{el.arabic}</h1>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4>Bahasa Indonesia</h4>
                                            <p>{el.translation}</p>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </div>

                <div className="card-group" style={{width: '0%'}}>

                </div>
            </div>
        </div>
    )
}