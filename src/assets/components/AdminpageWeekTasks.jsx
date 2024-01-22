import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import SingleMedDataTableLine from "./SingleMedDataTableLine";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/tasks/";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/tasks/";
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
    // let question = updatedData[1];
    // let answer = updatedData[2];

    // const entryToUpdate = {
    //   question: question,
    //   answer: answer,
    // };
    console.log(JSON.stringify(updatedData));

    const response = await fetch(myURL + updatedData[0], {
      method: "PATCH",
      body: JSON.stringify(updatedData[1]),
      headers: {
        "Content-Type": "application/json",
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
    }
    setPostSend(true);
  };

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
            {medDataIsPending && medDataIsPending}
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
        </div>
      </div>
    </>
    /* <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-borderless table-sm w-auto align-middle text-center">
            <thead className="text-start text-decoration-underline">
              <tr>
                <th>#</th>
                <th>Question:</th>
                <th>Answer:</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {medQuestionsData &&
                medQuestionsData.map((singleMedQuestionEntry, index) => (
                  <SingleMedQuestionTableLine
                    index={index + 1}
                    key={singleMedQuestionEntry._id}
                    singleMedQuestionEntry={singleMedQuestionEntry}
                    onDataFromChild={handleDataFromChild}
                    handleUpdateDataFromChild={handleUpdateDataFromChild}
                  />
                ))}
            </tbody>
            <thead className="text-start text-decoration-underline">
              <tr>
                <th></th>
                <th>Add new Entry:</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    size="12"
                    maxLength="12"
                    onChange={(e) => setNewQuestion(e.target.value)}
                    value={newQuestion}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    size="40"
                    maxLength="40"
                    onChange={(e) => setNewAnswer(e.target.value)}
                    value={newAnswer}
                  ></input>
                </td>
                <td>
                  <i className="bi bi-plus-square" onClick={handleAdd}></i>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div> */
  );
}

export default Adminpage;

// <>
// <div className="card shadow">
//   <div className="card-body">
//     <table className="table table-hover table-striped table-sm w-auto align-top">
//       <thead>
//         <tr>
//           <th scope="col"></th>
//           <th scope="col">Schicht</th>
//           <th scope="col">Flug</th>
//           <th scope="col">Medizin</th>
//           <th scope="col"></th>
//         </tr>
//       </thead>
//       <tbody>{weekTasksData}</tbody>
//     </table>
//   </div>
// </div>
// </>
// );
// }

// <Fragment key={task._id}>
// <tr>
//   <th scope="row">{task.Day}</th>
//   <th scope="row">Tag</th>
//   <td>{task.TagFlug}</td>
//   <td>{task.TagMedizin}</td>
//   <td>
//     <i className="bi bi-pencil"></i>
//   </td>
// </tr>
// <tr>
//   <th scope="row"></th>
//   <th scope="row">Nacht</th>
//   <td>{task.NachtFlug}</td>
//   <td>{task.NachtMedizin}</td>

//   <td></td>
// </tr>
// </Fragment>
