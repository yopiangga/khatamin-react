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

export function DoaTahlil() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    useEffect(() => {
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

                </div>
            </div>
        </div>
    )
}