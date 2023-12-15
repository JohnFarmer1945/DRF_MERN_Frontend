import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// Layouts
import RootLayout from "./assets/layouts/RootLayout";
import AdminLayout from "./assets/layouts/AdminLayout";
import CarouselHeader from "./assets/components/CarouselHeader";

//Components
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
import Footer from "./assets/components/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route exact path="/" element={<Start />} />
      <Route exact path="Team" element={<Team />} />
      <Route exact path="Technik" element={<Technik />} />
      <Route exact path="Umgebung" element={<Umgebung />} />
      <Route exact path="ToDos" element={<ToDos />} />
      <Route exact path="MoreToDos" element={<MoreToDos />} />
      <Route
        exact
        path="EmergencyAndProcedure"
        element={<EmergencyAndProcedure />}
      />
      <Route exact path="Adminpage" element={<AdminLayout />} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <Routes>
        <Route exact path="/" element={<CarouselHeader />} />
        <Route path="/*" element={<ImageHeader />} />
      </Routes>
      <Navbar />
      <div className="container-fluid p-3 text-center"></div>
      <Footer /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
