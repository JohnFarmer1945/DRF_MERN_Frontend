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

const router = createBrowserRouter([
  // Start Route Index Route
  {
    path: "/",
    element: <StartLayout />,
    children: [
      {
        path: "",
        element: <Start />,
      },
    ],
  },
  // page Routes
  {
    path: "/pages",
    element: <PageLayout />,
    children: [
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "technik",
        element: <Technik />,
      },
      {
        path: "umgebung",
        element: <Umgebung />,
      },
      {
        path: "todos",
        element: <ToDos />,
      },
      {
        path: "moretodos",
        element: <MoreToDos />,
      },
      {
        path: "EmergencyAndProcedure",
        element: <EmergencyAndProcedure />,
      },
    ],
  },
  {
    path: "/adminpage",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Adminpage />,
      },
    ],
  },
]);

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
