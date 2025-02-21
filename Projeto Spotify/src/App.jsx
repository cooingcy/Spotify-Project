import React from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Artists from "./Pages/Artists";
import Artist from "./Pages/Artist";
import Songs from "./Pages/Songs";
import Song from "./Pages/Song";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/artists" element={<Artists />}/>
        <Route path="/artist/:id" element={<Artist />}/>
        <Route path="/songs" element={<Songs />}/>
        <Route path="/song/:id" element={<Song />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
