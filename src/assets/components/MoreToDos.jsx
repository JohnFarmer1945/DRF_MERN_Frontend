import { useEffect, useState, Fragment } from "react";

import "../css/MoreToDos.css";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/tasks/day";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/tasks/day";
}

function AdminpageWeekTasks() {
  const [DayTaskData, setDayTaskData] = useState(null);
  const [dayTaskDataIsPending, setdayTaskDataIsPending] = useState(
    <tr>
      <td colSpan="4">Loading ...</td>
    </tr>
  );
  const [fetchTaskDayAgain, setTaskDayAgain] = useState(true);

  // Get WeekTasks Data:
  useEffect(() => {
    const fetchDayTask = async () => {
      const my_date = new Date();
      let todaysDay = my_date.getDay();

      const response = await fetch(myURL + "/" + todaysDay);
      const json = await response.json();
      const jsonAsArray = [];
      jsonAsArray.push(json);
      if (response.ok) {
        setDayTaskData(jsonAsArray);
        const listItems = jsonAsArray.map((task) => (
          <Fragment key={task._id}>
            <tr>
              <th scope="row">{task.Day}</th>
              <th scope="row">Tag</th>
              <td>{task.TagFlug}</td>
              <td>{task.TagMedizin}</td>
            </tr>
            <tr className="row_active">
              <th scope="row"></th>
              <th scope="row">Nacht</th>
              <td>{task.NachtFlug}</td>
              <td>{task.NachtMedizin}</td>

              <td></td>
            </tr>
          </Fragment>
        ));

        setDayTaskData(listItems);

        setdayTaskDataIsPending(false);
      }
    };

    fetchDayTask();

    setTaskDayAgain(false);
  }, [fetchTaskDayAgain]);

  return (
    <>
      <div className="container-fluid border rounded text-center  p-0 ">
        <div className="card shadow ">
          <div className="card-body">
            <h2>Anstehende Flüge</h2>
            <h2>Compressor rinsing?</h2>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-body container">
            <div>
              <table className="table table-hover table-sm w-auto align-top">
                <thead>
                  <tr className="table-active">
                    <th scope="col"></th>
                    <th scope="col">Schicht</th>
                    <th scope="col">Flug</th>
                    <th scope="col">Medizin</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {DayTaskData ? DayTaskData : dayTaskDataIsPending}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminpageWeekTasks;
