import { useContext, useEffect } from "react"
import { UserContext } from "../../Pages/userContext";
import {
    BrowserRouter,
    Switch,
    Route,
    a
} from "react-router-dom";
import { FaLongArrowAltRight, FaRegCalendarCheck, FaRegMoneyBillAlt, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import example from "../../assets/images/example.jpg"

export function Infaq() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    useEffect(() => {
        setMenuActive('infaq');
    }, [])

    return (
        <div className="infaq">
            <div className="filter">

            </div>

            <div className="card-surat">

                <div className="card-group">

                    <div className="shadow">
                        <div className="card">
                            <div className="card-head">
                                <div className="circle">1</div>
                                <div className="icon">
                                    <a to="/tuntunan-ibadah/doa-tahlil"><FaSignInAlt /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Dana Masuk</h4>
                                    <h5>Rp 100.000</h5>
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
                                    <a to="/tuntunan-ibadah/asmaul-husna"><FaSignOutAlt /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Dana Keluar</h4>
                                    <h5>Rp 0</h5>
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
                                    <a to="/tuntunan-ibadah/doa-harian"><FaRegMoneyBillAlt /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Dana Sisa</h4>
                                    <h5>Rp 100.000</h5>
                                </div>
                                <div className="right">
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card-surat">
                <h3>Rekening Infaq</h3>

                <div className="card-group">

                    <div className="shadow">
                        <div className="card">
                            <div className="card-head">
                                <div className="circle">1</div>
                                <div className="icon">
                                    <a to="/tuntunan-ibadah/doa-tahlil"><FaLongArrowAltRight /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>BANK BRI</h4>
                                    <h5>0033 0111 8162 507 a.n Alfian Prisma Yopiangga </h5>
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
                                    <a to="/tuntunan-ibadah/asmaul-husna"><FaLongArrowAltRight /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>DANA</h4>
                                    <h5>089 670 230 949 a.n Moh. Zakariya Al Ansori</h5>
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
                                    <a to="/tuntunan-ibadah/doa-harian"><FaLongArrowAltRight /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>BANK BCA</h4>
                                    <h5>Rp 100.000</h5>
                                </div>
                                <div className="right">
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="rekening" style={{display : 'none'}}>
                <h3>Rekening Infaq</h3>
                <div className="card-rekening">

                </div>
            </div>

            <div className="kegiatan-card">
                <h3>Kegiatan Khatamin</h3>
                <div className="card-group">
                    <div className="card">
                        <div className="card-top">
                            <div className="box">
                                <img src={example} alt="" />
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="box">
                                <h3>How to make the perfect morning coffe</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi eaque temporibus cum a facilis nesciunt.</p>
                                <div className="footer">
                                    <FaRegCalendarCheck />
                                    <h5>12 April 2021</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-top">
                            <div className="box">
                                <img src={example} alt="" />
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="box">
                                <h3>How to make the perfect morning coffe</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi eaque temporibus cum a facilis nesciunt.</p>
                                <div className="footer">
                                    <FaRegCalendarCheck />
                                    <h5>12 April 2021</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-top">
                            <div className="box">
                                <img src={example} alt="" />
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="box">
                                <h3>How to make the perfect morning coffe</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi eaque temporibus cum a facilis nesciunt.</p>
                                <div className="footer">
                                    <FaRegCalendarCheck />
                                    <h5>12 April 2021</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}