import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import Features from "./assets/Features";
import Pricing from "./assets/Pricing";
import CarouselHeader from "./assets/CarouselHeader";

function App() {
  return (
    <>
      <CarouselHeader />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
