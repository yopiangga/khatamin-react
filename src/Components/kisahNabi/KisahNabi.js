import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Pages/userContext"
import example from "../../assets/images/example.jpg"
import { FaPlus, FaRegCalendarCheck, FaRegUser } from "react-icons/fa";
import axios from 'axios';
import { useHistory } from "react-router";

export function KisahNabi() {
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    const [kisah, setKisah] = useState([{description: "", icon_url: "", image_url: "", name: "", thn_kelahiran: "", tmp: "", usia: ""}]);
    
    useEffect(() => {
        setMenuActive('kisahNabi');
        axios.get(`https://islamic-api-zhirrr.vercel.app/api/kisahnabi`).then(
            (res) => {
                console.log(res.data);
                setKisah(res.data)
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    let history = useHistory();

    const handleDetail = (event) => {
        localStorage.setItem('kisahDetail', JSON.stringify(kisah[event]));
        history.push('/kisah-nabi-detail');
    }

    return (
        <div className="kisahNabi">
            <div className="content">
                <div className="filter-content">

                </div>
                <div className="group-card">

                    {
                        kisah.map(function(el, idx){
                            return(
                                <div className="card" key={idx} onClick={() => {handleDetail(idx)}}>
                                    <div className="card-top">
                                        <div className="box">
                                            <img src={(el.image_url == "") ? example : el.image_url} alt="" />
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="box">
                                            <h3>{el.name}</h3>
                                            <p>{el.description}</p>
                                            <div className="footer">
                                                <FaRegCalendarCheck />
                                                <h5>{el.thn_kelahiran} SM</h5>
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