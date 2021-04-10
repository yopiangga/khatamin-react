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
import kegiatan1 from "../../assets/images/kegiatan-1.jpeg"
import kegiatan2 from "../../assets/images/kegiatan-2.jpeg"
import kegiatan3 from "../../assets/images/kegiatan-3.jpg"

export function Infaq() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    useEffect(() => {
        document.title = "Infaq - Khatamin";
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
                                    <h4>BANK BRI</h4>
                                    <h5>0033 0112 5771 509 a.n Devafilla Rizky Santosa</h5>
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
                                <img src={kegiatan1} alt="" />
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="box">
                                <h3>Jadikan hidumu lebih berkah dengan beramal</h3>
                                <p>Jika kamu menjadikan alquran sebagai panduan, maka kamu tidak akan pernah kehilangan arah.</p>
                                <div className="footer">
                                    <FaRegCalendarCheck />
                                    <h5>9 April 2021</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-top">
                            <div className="box">
                                <img src={kegiatan2} alt="" />
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="box">
                                <h3>9 Santri Tahfidz BAZNAS Selesaikan Khataman Al-Qur’an 30 Juz</h3>
                                <p>Mahasiswa dari beberapa kampus di Indonesia Sambut Ramadhan dengan membentuk majelis rutinan khataman Al Qur'an</p>
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
                                <img src={kegiatan3} alt="" />
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="box">
                                <h3>Warga desa mbrambang mengadakan khataman Al-Qur'an setiap bulan sekali</h3>
                                <p>Kegiatan ini dilakukan oleh masyarakat dengan antusian setiap malam juma'at wage</p>
                                <div className="footer">
                                    <FaRegCalendarCheck />
                                    <h5>14 April 2021</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}