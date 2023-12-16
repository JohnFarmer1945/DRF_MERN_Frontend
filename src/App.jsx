import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// Layouts
import RootLayout from "./assets/layouts/StartLayout";
import AdminLayout from "./assets/layouts/AdminLayout";
import StartLayout from "./assets/layouts/StartLayout";
import PageLayout from "./assets/layouts/PageLayout";

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
import CarouselHeader from "./assets/components/CarouselHeader";
import NotFound from "./assets/components/NotFound";

// const routerPages = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/pages" element={<PageLayout />}>
//       <Route exact path="Team" element={<Team />} />
//       <Route exact path="Technik" element={<Technik />} />
//       <Route exact path="Umgebung" element={<Umgebung />} />
//       <Route exact path="ToDos" element={<ToDos />} />
//       <Route exact path="MoreToDos" element={<MoreToDos />} />
//       <Route
//         exact
//         path="EmergencyAndProcedure"
//         element={<EmergencyAndProcedure />}
//       />
//     </Route>
//   )
// );

//   />
//   <Route exact path="Adminpage" element={<AdminLayout />} />

function App() {
  return (
    <>
      <Routes>
        <Route element={<StartLayout />}>
          <Route exact path="/" element={<Start />} />
        </Route>

        <Route path="pages" element={<PageLayout />}>
          <Route exact path="Team" element={<Team />} />
          <Route exact path="Technik" element={<Technik />} />
          <Route exact path="Umgebung" element={<Umgebung />} />
          <Route exact path="ToDos" element={<ToDos />} />
          <Route exact path="MoreToDos" element={<MoreToDos />} />
          <Route exact path="Technik" element={<Technik />} />
          <Route exact path="Umgebung" element={<Umgebung />} />
          <Route exact path="ToDos" element={<ToDos />} />
          <Route exact path="MoreToDos" element={<MoreToDos />} />
          <Route
            exact
            path="EmergencyAndProcedure"
            element={<EmergencyAndProcedure />}
          />
        </Route>

        <Route path="adminpage" element={<AdminLayout />}>
          <Route exact path="" element={<Adminpage />} />
        </Route>

        <Route element={<StartLayout />}>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
