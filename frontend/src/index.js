
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home"
import Tela1 from "./pages/Tela1"
import Tela2 from "./pages/Tela2"
import Tela3 from "./pages/Tela3"
import Tela4 from "./pages/Tela4"
import Tela5 from "./pages/Tela5"
import Tela6 from "./pages/Tela6"
import Tela7 from "./pages/Tela7"
import Tela8 from "./pages/Tela8"
import Tela9 from "./pages/Tela9"
import Tela10 from "./pages/Tela10"
import Tela11 from "./pages/Tela11"
import Tela12 from "./pages/Tela12"
import Tela13 from "./pages/Tela13"
import Tela14 from "./pages/Tela14"
import Tela15 from "./pages/Tela15"
import Tela16 from "./pages/Tela16"
import Tela17 from "./pages/Tela17"
import Tela18 from "./pages/Tela18"
import Tela19 from "./pages/Tela19"
import Tela20 from "./pages/Tela20"
import Tela21 from "./pages/Tela21"
import Tela22 from "./pages/Tela22"
import Tela23 from "./pages/Tela23"
import Tela24 from "./pages/Tela24"
import Tela25 from "./pages/Tela25"

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Tela1" element={<Tela1/>}></Route>
          <Route path="/Tela2" element={<Tela2/>}></Route>
          <Route path="/Tela3" element={<Tela3/>}></Route>
          <Route path="/Tela4" element={<Tela4/>}></Route>
          <Route path="/Tela5" element={<Tela5/>}></Route>
          <Route path="/Tela6" element={<Tela6/>}></Route>
          <Route path="/Tela7" element={<Tela7/>}></Route>
          <Route path="/Tela8" element={<Tela8/>}></Route>
          <Route path="/Tela9" element={<Tela9/>}></Route>
          <Route path="/Tela10" element={<Tela10/>}></Route>
          <Route path="/Tela11" element={<Tela11/>}></Route>
          <Route path="/Tela12" element={<Tela12/>}></Route>
          <Route path="/Tela13" element={<Tela13/>}></Route>
          <Route path="/Tela14" element={<Tela14/>}></Route>
          <Route path="/Tela15" element={<Tela15/>}></Route>
          <Route path="/Tela16" element={<Tela16/>}></Route>
          <Route path="/Tela17" element={<Tela17/>}></Route>
          <Route path="/Tela18" element={<Tela18/>}></Route>
          <Route path="/Tela19" element={<Tela19/>}></Route>
          <Route path="/Tela20" element={<Tela20/>}></Route>
          <Route path="/Tela21" element={<Tela21/>}></Route>
          <Route path="/Tela22" element={<Tela22/>}></Route>
          <Route path="/Tela23" element={<Tela23/>}></Route>
          <Route path="/Tela24" element={<Tela24/>}></Route>
          <Route path="/Tela25" element={<Tela25/>}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
