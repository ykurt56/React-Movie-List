import React from "react";
import MovieData from "./data/MovieData";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import WatchLater from "./pages/WatchLater";
import Fovorite from "./pages/Fovorite";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/fovorites" element={<Fovorite />} />
      </Routes>
    </div>
  );
}

export default App;
