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
import Adminpage from "./assets/components/Adminpage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CarouselHeader />} />
        <Route path="/*" element={<ImageHeader />} />
      </Routes>
      <Navbar />
      <div className="container-fluid p-2 text-center">
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/Team" element={<Team />} />
          <Route exact path="/Technik" element={<Technik />} />
          <Route exact path="/Umgebung" element={<Umgebung />} />
          <Route exact path="/ToDos" element={<ToDos />} />
          <Route exact path="/MoreToDos" element={<MoreToDos />} />
          <Route
            exact
            path="/EmergencyAndProcedure"
            element={<EmergencyAndProcedure />}
          />
          <Route exact path="/Adminpage" element={<Adminpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
