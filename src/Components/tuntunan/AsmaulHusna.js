
import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { UserContext } from '../../Pages/userContext';
import axios from 'axios';
import $, { data } from 'jquery';

export function AsmaulHusna() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    const [asma, setAsma] = useState([{ arabic: "", id: "", translation: "", title: "" }]);

    useEffect(() => {
        setMenuActive("tuntunanIbadah");
        axios.get(`https://islamic-api-zhirrr.vercel.app/api/asmaulhusna`).then(
            (res) => {
                setAsma(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleClick = () => {
        
    }

    return (
        <div className="dashboard">
            <div className="filter">

            </div>

            <div className="card-surat">

                <div className="card-surat-detail">
                   

                </div>

                <div className="card-group">

                    {
                        asma[0].index == null ?

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

                            asma.map(function (el, idx) {
                                return (
                                    <div className="shadow" key={el.index}>
                                        <div className="card">
                                            <div className="card-head" index={el.index}>
                                                <div className="circle">{el.index}</div>
                                                <div className="icon" id={el.id} onClick={handleClick}>
                                                    <FaLongArrowAltRight id={el.id} />
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="left">
                                                    <h4>{el.latin}</h4>
                                                    {/* <h5>{el.translation_id}</h5> */}
                                                </div>
                                                <div className="right">
                                                    <h4>{el.arabic}</h4>
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