import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import SingleMedDataTableLine from "./SingleMedDataTableLine";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/tasks/";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-crewbriefing-backend.netlify.app/api/tasks/";
}

function Adminpage() {
  const [medTasksData, setMedTasksData] = useState(null);
  const [error, setError] = useState(null);
  const [postSend, setPostSend] = useState(false);
  const [medDataIsPending, setMedDataIsPending] = useState(
    "Loading Wochenplan ..."
  );
  const { user } = useAuthContext();

  // Get MedTasks Data from Mongo DB
  useEffect(() => {
    const fetchMedTasksData = async () => {
      const response = await fetch(myURL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        console.log(json);

        setMedTasksData(json);

        setMedDataIsPending(false);
      }
    };

    if (user) {
      fetchMedTasksData();
      setPostSend(false);
      setMedDataIsPending(false);
    }
  }, [postSend, user]);

  // Update Data in Mongo DB

  const handleUpdatedDataFromChild = async (updatedData) => {
    console.log(JSON.stringify(updatedData));

    const response = await fetch(myURL + updatedData[0], {
      method: "PATCH",
      body: JSON.stringify(updatedData[1]),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("Entry updated!", json);
      notify();
    }
    setPostSend(true);
  };
  const notify = () => toast.success("Eintrag aktualisiert!");
  return (
    <>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-hover table-striped table-sm w-auto align-top">
            <thead>
              <tr>
                <th scope="col">Wochentag</th>
                <th scope="col" colSpan="2">
                  Schicht
                </th>
                <th scope="col" colSpan="2">
                  Task
                </th>
              </tr>
            </thead>

            <tbody>
              <tr></tr>

              {medTasksData &&
                medTasksData.map((singleMedTasksDataEntry, index) => (
                  <SingleMedDataTableLine
                    index={index + 1}
                    key={singleMedTasksDataEntry._id}
                    singleMedTasksDataEntry={singleMedTasksDataEntry}
                    handleUpdatedDataFromChild={handleUpdatedDataFromChild}
                  />
                ))}
            </tbody>
          </table>
          {medDataIsPending && medDataIsPending}
        </div>
      </div>
      <div>
        <ToastContainer autoClose={1200} />
      </div>
    </>
  );
}

export default Adminpage;
