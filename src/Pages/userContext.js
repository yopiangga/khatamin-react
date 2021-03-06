import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
//   const currentUser = JSON.parse(localStorage.getItem("data"))
//   const iniateUser = currentUser ? currentUser : null
//   const [user, setUser] = useState(iniateUser);

const [menuActive, setMenuActive] = useState();
const [url, setUrl] = useState({api: `http://192.168.10.247/project/4/admin/api/`, baseUrl: "http://192.168.10.247/project/4/admin/"});

  return (
    <UserContext.Provider value={[menuActive, setMenuActive, url, setUrl]}>
      {props.children}
    </UserContext.Provider>
  );
};