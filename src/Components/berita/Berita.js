import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Pages/userContext"
import example from "../../assets/images/example.jpg"
import { FaPlus, FaRegCalendarCheck, FaRegUser } from "react-icons/fa";
import axios from 'axios';
import { useHistory } from "react-router";

export function Berita() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    const [berita, setBerita] = useState([{id: "", date: "", thumbnail: "", title: "", url: ""}]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({page: "1", total_page: "1"});

    useEffect(() => {
        document.title = "Berita - Khatamin";
        setMenuActive('berita');
        // https://cors-anywhere.herokuapp.com/
        axios.get(`https://artikel-islam.netlify.app/.netlify/functions/api/msh?page=${page}`).then(
            (res) => {
                console.log(res.data.data);
                setBerita(res.data.data.data);
                setPagination(res.data.data.pagination);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleMore = (event) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://artikel-islam.netlify.app/.netlify/functions/api/msh?page=${event+1}`).then(
            (res) => {
                setBerita(berita => [...berita, ...res.data.data.data]);
                setPagination(res.data.data.pagination);
                setPage(event+1);
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    console.log(berita);

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
                                            <img src={(el.thumbnail == '') ? example : el.thumbnail} alt=" " />
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
                                                <h5>{el.date}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="card-more">
                        <button onClick={() => {handleMore(page)}}>Lebih banyak <FaPlus /></button>
                    </div>


                    {/* <div className="card">
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
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}