import React, { useState, createContext, useEffect } from "react";
export const UserContext = createContext();

export const UserProvider = props => {
  //   const currentUser = JSON.parse(localStorage.getItem("data"))
  //   const iniateUser = currentUser ? currentUser : null
  //   const [user, setUser] = useState(iniateUser);

  const [menuActive, setMenuActive] = useState();
  const [url, setUrl] = useState({ api: `http://192.168.10.247/project/4/admin/api/`, baseUrl: "http://192.168.10.247/project/4/admin/" });
  const [lokasi, setLokasi] = useState({ latitude: 0, longitude: 0 });

  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("browser anda jelek");
    }
  }

  const showPosition = (position) => {
    let data = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }
    localStorage.setItem("latitude", data.latitude);
    localStorage.setItem("longitude", data.longitude);
  }
  
  useEffect( () => {
    geoLocation();
  }, [])

  return (
    <UserContext.Provider value={[menuActive, setMenuActive, url, setUrl, lokasi, setLokasi]}>
      {props.children}
    </UserContext.Provider>
  );
};