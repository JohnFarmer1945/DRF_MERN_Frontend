import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import Features from "./assets/Features";
import Pricing from "./assets/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
