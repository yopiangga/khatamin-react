import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { UserContext } from '../../Pages/userContext';
import axios from 'axios';
import $, { data } from 'jquery';

export function Tuntunan() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    useEffect(() => {
        document.title = "Tuntunan Ibadah - Khatamin";
        setMenuActive("tuntunanIbadah");
    }, [])

    return (
        <div className="dashboard">
            <div className="filter">

            </div>

            <div className="card-surat">

                <div className="card-group">

                    <div className="shadow">
                        <div className="card">
                            <div className="card-head">
                                <div className="circle">1</div>
                                <div className="icon">
                                    <Link to="/tuntunan-ibadah/doa-tahlil"><FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Doa Tahlil</h4>
                                    <h5>Berbagai doa tahlil lengkap</h5>
                                </div>
                                <div className="right">
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow">
                        <div className="card">
                            <div className="card-head">
                                <div className="circle">2</div>
                                <div className="icon">
                                    <Link to="/tuntunan-ibadah/asmaul-husna"><FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Asmaul Husna</h4>
                                    <h5>99 Nama Allah SWT </h5>
                                </div>
                                <div className="right">
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow">
                        <div className="card">
                            <div className="card-head">
                                <div className="circle">3</div>
                                <div className="icon">
                                    <Link to="/tuntunan-ibadah/doa-harian"><FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Doa Harian</h4>
                                    <h5>Berbagai doa sehari-hari</h5>
                                </div>
                                <div className="right">
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow">
                        <div className="card">
                            <div className="card-head">
                                <div className="circle">4</div>
                                <div className="icon">
                                    <Link to="/tuntunan-ibadah/bacaan-sholat"><FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Bacaan Sholat</h4>
                                    <h5>Semua bacaan untuk sholat</h5>
                                </div>
                                <div className="right">
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow">
                        <div className="card">
                            <div className="card-head">
                                <div className="circle">5</div>
                                <div className="icon">
                                    <Link to="/tuntunan-ibadah/niat-sholat"><FaLongArrowAltRight /></Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Niat Sholat</h4>
                                    <h5>Tuntunan niat sholat 5 waktu</h5>
                                </div>
                                <div className="right">
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}