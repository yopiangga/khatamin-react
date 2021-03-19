
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import './assets/css/css-reset.css';
import './assets/scss/desktop-style.css';
import './assets/scss/tablet-style.css';
import './assets/scss/mobileLandscape-style.css';
import './assets/scss/mobile-style.css';

import { Sidebar } from './Components/sidebar/Sidebar';
import { Navbar } from './Components/navbar/Navbar';
import { UserProvider } from "./Pages/userContext";
import { Dashboard } from "./Components/dashboard/Dashboard";
import { JadwalSholat } from "./Components/jadwalSholat/JadwalSholat";
import { Kalender } from "./Components/kalender/Kalender";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className="body">
            <Navbar />
            <div className="body-content">
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/jadwal-sholat" exact>
                  <JadwalSholat />
                </Route>
                <Route path="/kalender" exact>
                  <Kalender />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
