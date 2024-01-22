import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./assets/hooks/useAuthContext";

// Layouts

import AdminLayout from "./assets/layouts/AdminLayout";
import StartLayout from "./assets/layouts/StartLayout";
import PageLayout from "./assets/layouts/PageLayout";

//Components

// Pages
import Start from "./assets/components/Start";
import Team from "./assets/components/Team";
import Technik from "./assets/components/Technik";
import Umgebung from "./assets/components/Umgebung";
import ToDos from "./assets/components/ToDos";
import MoreToDos from "./assets/components/MoreToDos";
import EmergencyAndProcedure from "./assets/components/EmergencyAndProcedure";

// Admin
import AdminpageWhiteBoard from "./assets/components/AdminpageWhiteBoard";
import AdminpageFlightQuestions from "./assets/components/AdminpageFlightQuestions";
import AdminpageMedQuestions from "./assets/components/AdminpageMedQuestions";
import AdminpageWeekTasks from "./assets/components/AdminpageWeekTasks";

// Auth
import Signup from "./assets/components/Signup";
import Login from "./assets/components/Login";

import NotFound from "./assets/components/NotFound";

function App() {
  const { user } = useAuthContext();

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

        <Route path="adminpage" element={user ? <AdminLayout /> : <Login />}>
          <Route exact path="" element={<AdminpageWhiteBoard />} />
          <Route exact path="Whiteboard" element={<AdminpageWhiteBoard />} />
          <Route
            exact
            path="MedQuestions"
            element={<AdminpageMedQuestions />}
          />
          <Route
            exact
            path="Flightquestions"
            element={<AdminpageFlightQuestions />}
          />
          <Route exact path="WeekTasks" element={<AdminpageWeekTasks />} />
        </Route>

        <Route>
          <Route path="/signup" element={user ? <AdminLayout /> : <Signup />} />
          <Route path="/login" element={user ? <AdminLayout /> : <Login />} />
        </Route>

        <Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
