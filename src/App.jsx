import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./assets/Home";
import Features from "./assets/Features";
import Pricing from "./assets/Pricing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
