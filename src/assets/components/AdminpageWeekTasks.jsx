import { useEffect, useState, Fragment } from "react";

import SingleMedQuestionTableLine from "./SingleMedQuestionTableLine";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/tasks/";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/tasks/";
}

function AdminpageWeekTasks() {
  const [weekTasksData, setWeekTasksData] = useState(null);
  const [weekTasksDataIsPending, setweekTasksDataIsPending] = useState(
    "Loading WeekTasks ..."
  );
  const [fetchTasksAgain, setFetchTasksAgain] = useState(true);

  // Get WeekTasks Data:
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(myURL);
      const json = await response.json();

      if (response.ok) {
        //setWeekTasksData(json);
        const listItems = json.map((task) => (
          <Fragment key={task._id}>
            <h1>{task.TagFlug}</h1>
            <h1>{task.TagMedizin}</h1>
          </Fragment>
        ));

        setWeekTasksData(listItems);

        setweekTasksDataIsPending(false);
      }
    };

    fetchTasks();

    setFetchTasksAgain(false);
  }, [fetchTasksAgain]);

  return (
    <>
      {weekTasksData}
      <div className="card shadow">
        <div className="card-header bg-light text-start">
          <h3 className="text-decoration-underline">Week-Tasks:</h3>
        </div>
        <div className="card-body">
          <table className="table table-hover table-bordered table-sm w-auto">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Schicht</th>
                <th scope="col">Flug</th>
                <th scope="col">Medizin</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Montag</th>
                <th scope="row">Tag</th>
                <td>Jacob</td>
                <td>Jacob</td>
                <td>
                  <i className="bi bi-pencil"></i>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th scope="row">Nacht</th>
                <td>Jacob</td>
                <td>Jacob</td>

                <td>
                  <i className="bi bi-pencil"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminpageWeekTasks;
