import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Pages/userContext"
import example from "../../assets/images/example.jpg"
import { FaPlus, FaRegCalendarCheck, FaRegUser } from "react-icons/fa";
import axios from 'axios';
import { useHistory } from "react-router";

export function Berita() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    const [berita, setBerita] = useState([{ title: "", description: "", img: "", url: "", author: "", created: "" }]);

    useEffect(() => {
        document.title = "Berita - Khatamin";
        setMenuActive('berita');
        axios.get(`${url.api}artikel/read-artikel.php`).then(
            (res) => {
                setBerita(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    let history = useHistory();

    const handleDetail = (event) => {
        window.open(
            event,
            '_blank'
          );
    }

    return (
        <div className="berita">
            <div className="content">
                <div className="filter-content">

                </div>
                <div className="group-card">
                    {
                        berita.map(function (el, idx) {
                            return (
                                <div className="card" key={idx} onClick={() => {handleDetail(el.url)}}>
                                    <div className="card-top">
                                        <div className="box">
                                            <img src={(el.img == '') ? example : el.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="box">
                                            <h3>{(el.title == '') ? <div className="loading"></div> : el.title}</h3>
                                            <div className="author">
                                                <div className="circle">
                                                    <FaRegUser />
                                                </div>
                                                <div className="text">
                                                    <h5>{el.author}</h5>
                                                </div>
                                            </div>
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

                    {/* <div className="card-more">
                        <button onClick={() => {handleMore(page)}}>Lebih banyak <FaPlus /></button>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}