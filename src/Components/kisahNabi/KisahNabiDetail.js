
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Pages/userContext"
import example from "../../assets/images/example.jpg"

export function KisahNabiDetail(){
    const [menuActive, setMenuActive, url, setUrl] = useContext(UserContext);
    const [kisahDetail, setKisahDetail] = useState({description: "", icon_url: "", image_url: "", name: "", thn_kelahiran: "", tmp: "", usia: ""});

    useEffect(() => {
        setKisahDetail(JSON.parse(localStorage.getItem('kisahDetail')));
    }, [])

    return(
        <div className="kisahNabiDetail">
            <div className="content">
                <div className="header">
                    <div className="image">
                        <img src={(kisahDetail.image_url == '') ? example : kisahDetail.image_url} alt="" />
                    </div>
                </div>
                <div className="title">
                    <h1>{kisahDetail.name}</h1>
                    <div className="informasi">
                        <h4>{kisahDetail.tmp}</h4>
                        <h4>{kisahDetail.thn_kelahiran} SM</h4>
                    </div>
                </div>
                <div className="description">
                    <pre>{kisahDetail.description}</pre>
                </div>
            </div>
        </div>
    )
}