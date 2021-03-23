
import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { UserContext } from '../../Pages/userContext';
import axios from 'axios';
import $, { data } from 'jquery';

export function NiatSholat() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    const [niat, setNiat] = useState([{ arabic: "", latin: "", translation: "", title: "" }]);

    useEffect(() => {
        document.title = "Niat Sholat - Khatamin";
        setMenuActive("tuntunanIbadah");
        axios.get(`https://islamic-api-zhirrr.vercel.app/api/niatshalat`).then(
            (res) => {
                setNiat(res.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(niat);

        $('.card-surat-detail').addClass('active');
        $('.card-group').addClass('nano');

    return (
        <div className="dashboard">
            <div className="filter">

            </div>

            <div className="card-surat">

                <div className="card-surat-detail" style={{width: '100%'}}>
                    {
                        niat == null ?
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
                                </div>
                            </div>
                            :
                            niat.map(function (el, idx) {
                                return (
                                    <div className="card" key={idx}>
                                        <div className="card-head">
                                            <h2>{idx + 1}</h2>
                                            <div className="text-arab">
                                                <h1>{el.arabic}</h1>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4>{el.name}</h4>
                                            <p>{el.terjemahan}</p>
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