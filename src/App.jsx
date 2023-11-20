import "./App.css";

import { Route, Routes } from "react-router-dom";

import CarouselHeader from "./assets/components/CarouselHeader";
import ImageHeader from "./assets/components/ImageHeader";
import Navbar from "./assets/components/Navbar";

import Start from "./assets/components/Start";
import Team from "./assets/components/Team";
import Technik from "./assets/components/Technik";
import Umgebung from "./assets/components/Umgebung";
import ToDos from "./assets/components/ToDos";
import MoreToDos from "./assets/components/MoreToDos";
import EmergencyAndProcedure from "./assets/components/EmergencyAndProcedure";
import More from "./assets/components/More";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CarouselHeader />} />
        <Route path="/*" element={<ImageHeader />} />
      </Routes>
      <Navbar />
      <div class="container-fluid p-2">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Technik" element={<Technik />} />
          <Route path="/Umgebung" element={<Umgebung />} />
          <Route path="/ToDos" element={<ToDos />} />
          <Route path="/MoreToDos" element={<MoreToDos />} />
          <Route
            path="/EmergencyAndProcedure"
            element={<EmergencyAndProcedure />}
          />
          <Route path="/More" element={<More />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
