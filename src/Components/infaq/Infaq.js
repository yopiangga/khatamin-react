import { useContext, useEffect, useState } from "react"
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
import axios from "axios";

export function Infaq() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);

    const [dana, setDana] = useState({ danaKeluar: 0, danaMasuk: 0, danaSisa: 0 });
    const [kegiatan, setKegiatan] = useState([{ title: "", description: "", img: "", url: "", author: "", created: "" }]);
    const [infaq, setInfaq] = useState({name: "", nominal: "", idRek: ""});
    const [gambar, setGambar] = useState({});

    useEffect(() => {
        document.title = "Infaq - Khatamin";
        setMenuActive('infaq');

        axios.get(`${url.api}/dana/index.php`).then(
            (res) => {
                setDana(res.data.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

        axios.get(`${url.api}/kegiatan/read-kegiatan.php`).then(
            (res) => {
                setKegiatan(res.data.data);
                // console.log(res);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }, [])

    const handleRekening = (event) => {
        document.querySelector('.modal').classList.add('active');
        setInfaq({
            ...infaq,
            ['idRek']: event
        });
    }

    const handleChangeInfaq = (event) => {
        setInfaq({
            ...infaq,
            [event.target.name] : event.target.value
        })
    }

    const handleInfaqSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('image', gambar);

        formData.append('name', infaq.name);
        formData.append('nominal', infaq.nominal);
        formData.append('idRek', infaq.idRek);

        axios({
            url: `${url.api}infaq/create-infaq.php`,
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        }).then(
            (res) => {
                console.log(res);
            }
        ).catch((err) => {
            console.log(err);
        })
        document.querySelector('.modal').classList.remove('active');
    }

    const handleCancel = () => {
        document.querySelector('.modal').classList.remove('active');
    }

    const handleChangeImage = (event) => {
        setGambar(event.target.files[0]);
    }

    return (
        <div className="infaq">
            <div className="modal">
                <div className="form">
                    <h2>Form Infaq Khatamin</h2>
                    <p>Masukkan nama penginfaq, nominal serta bukti transfer sesuai nominal yang anda masukkan.</p>
                    <form className="form-biodata" method="POST" encType="multipart/form-data" onSubmit={handleInfaqSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="">Nama Penginfaq</label>
                                    <input type="text" name="name" onChange={handleChangeInfaq}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="">Nominal</label>
                                    <input type="number" name="nominal" onChange={handleChangeInfaq}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="">Bukti Transfer</label>
                                    <div className="box-profile">
                                        <label htmlFor="imgProfile" className="lblImgProfile">Unggah bukti</label>
                                        <input className="imgProfile" name="imgInfaq" id="imgProfile" type="file" onChange={handleChangeImage}></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btn">
                        <button className="btn-cancel" name="cancel" onClick={handleCancel} type="button">BATAL</button>
                        <button className="btn-submit" name="submit" type="submit">KIRIM</button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="filter">

            </div>

            <div className="card-surat">

                <div className="card-group">

                    <div className="shadow">
                        <div className="card">
                            <div className="card-head">
                                <div className="circle">1</div>
                                <div className="icon">
                                    <a><FaSignInAlt /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Dana Masuk</h4>
                                    <h5>Rp {dana.danaMasuk}</h5>
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
                                    <a><FaSignOutAlt /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Dana Keluar</h4>
                                    <h5>Rp {dana.danaKeluar}</h5>
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
                                    <a><FaRegMoneyBillAlt /></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h4>Dana Sisa</h4>
                                    <h5>Rp {dana.danaSisa}</h5>
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
                                <div className="icon" onClick={()=>handleRekening(1)}>
                                    <a><FaLongArrowAltRight /></a>
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
                                <div className="icon" onClick={()=>handleRekening(2)}>
                                    <a><FaLongArrowAltRight /></a>
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
                                <div className="icon" onClick={()=>handleRekening(3)}>
                                    <a><FaLongArrowAltRight /></a>
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

            <div className="rekening" style={{ display: 'none' }}>
                <h3>Rekening Infaq</h3>
                <div className="card-rekening">

                </div>
            </div>

            <div className="kegiatan-card">
                <h3>Kegiatan Khatamin</h3>
                <div className="card-group">

                    {
                        kegiatan.map(function (el, idx) {
                            return (
                                <div className="card" key={idx}>
                                    <div className="card-top">
                                        <div className="box">
                                            <img src={el.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="box">
                                            <h3>{el.title}</h3>
                                            <p>{el.description}</p>
                                            <div className="footer">
                                                <FaRegCalendarCheck />
                                                <h5>{el.created}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className="card">
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
                    </div> */}

                </div>
            </div>

        </div>
    )
}