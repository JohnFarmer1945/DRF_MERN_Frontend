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
            <tr>
              <th scope="row">{task.Day}</th>
              <th scope="row">Tag</th>
              <td>{task.TagFlug}</td>
              <td>{task.TagMedizin}</td>
              <td>
                <i className="bi bi-pencil"></i>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <th scope="row">Nacht</th>
              <td>{task.NachtFlug}</td>
              <td>{task.NachtMedizin}</td>

              <td></td>
            </tr>
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
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-hover table-striped table-sm w-auto align-top">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Schicht</th>
                <th scope="col">Flug</th>
                <th scope="col">Medizin</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{weekTasksData}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminpageWeekTasks;
