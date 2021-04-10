
import React from "react";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import $ from 'jquery';

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
import { Tuntunan } from "./Components/tuntunan/Tuntunan";
import { DoaTahlil } from "./Components/tuntunan/DoaTahlil";
import { AsmaulHusna } from "./Components/tuntunan/AsmaulHusna";
import { DoaHarian } from "./Components/tuntunan/DoaHarian";
import { BacaanSholat } from "./Components/tuntunan/BacaanSholat";
import { NiatSholat } from "./Components/tuntunan/NiatSholat";
import { Berita } from "./Components/berita/Berita";
import { KisahNabi } from "./Components/kisahNabi/KisahNabi";
import { KisahNabiDetail } from "./Components/kisahNabi/KisahNabiDetail";
import { Infaq } from "./Components/infaq/Infaq";

function App() {

  const handleSidebar = () => {
      $('.sidebar').removeClass('active');
      $('.notifikasi').removeClass('active');
  }

  return (
    <UserProvider>
      <HashRouter>
        <div className="App">
          <Sidebar />
          <div className="body">
            <Navbar />
            <div className="body-content" onClick={handleSidebar}>
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/berita" exact>
                  <Berita />
                </Route>
                <Route path="/jadwal-sholat" exact>
                  <JadwalSholat />
                </Route>
                <Route path="/kalender" exact>
                  <Kalender />
                </Route>
                <Route path="/tuntunan-ibadah" exact>
                  <Tuntunan />
                </Route>
                <Route path="/tuntunan-ibadah/doa-tahlil" exact>
                  <DoaTahlil />
                </Route>
                <Route path="/tuntunan-ibadah/asmaul-husna" exact>
                  <AsmaulHusna />
                </Route>
                <Route path="/tuntunan-ibadah/doa-harian" exact>
                  <DoaHarian />
                </Route>
                <Route path="/tuntunan-ibadah/bacaan-sholat" exact>
                  <BacaanSholat />
                </Route>
                <Route path="/tuntunan-ibadah/niat-sholat" exact>
                  <NiatSholat />
                </Route>
                <Route path="/kisah-nabi" exact>
                  <KisahNabi />
                </Route>
                <Route path="/kisah-nabi-detail" exact>
                  <KisahNabiDetail />
                </Route>
                <Route path="/infaq" exact>
                  <Infaq />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    </UserProvider>
  );
}

export default App;
