import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import SingleFlightQuestionTableLine from "./SingleFlightQuestionTableLine";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/flightQuestions/";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/flightQuestions/";
}

function Adminpage() {
  const [flightQuestionsData, setFlightQuestionsData] = useState(null);
  const [newQuestion, setNewQuestion] = useState("new Title");
  const [newAnswer, setNewAnswer] = useState("new Description");
  const [error, setError] = useState(null);
  const [postSend, setPostSend] = useState(false);
  const [medQuestionsIsPending, setFlightQuestionsIsPending] = useState(
    "Loading flight Questions..."
  );

  const { user } = useAuthContext();

  // Get Whiteboard Data:
  useEffect(() => {
    const fetchFlightQuestionsData = async () => {
      const response = await fetch(myURL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setFlightQuestionsData(json);
        console.log(flightQuestionsData);
        setFlightQuestionsIsPending(false);
      }
    };

    if (user) {
      fetchFlightQuestionsData();
      setPostSend(false);
    }
  }, [postSend, user]);

  // Create Entry Fetch
  const handleAdd = async () => {
    console.log("handleAdd clicked");

    const newEntry = {
      question: newQuestion,
      answer: newAnswer,
    };

    const response = await fetch(myURL, {
      method: "POST",
      body: JSON.stringify(newEntry),
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
      console.log("new question added", json);
    }
    setPostSend(true);
  };

  // Delete Entry
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = async (data) => {
    console.log(data);

    const response = await fetch(myURL + data, {
      method: "DELETE",
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
      console.log("Entry deleted", json);
    }
    setPostSend(true);
  };

  // Update Entry

  const handleUpdateDataFromChild = async (updateData) => {
    let question = updateData[1];
    let answer = updateData[2];

    const entryToUpdate = {
      question: question,
      answer: answer,
    };
    console.log(JSON.stringify(entryToUpdate));

    const response = await fetch(myURL + updateData[0], {
      method: "PATCH",
      body: JSON.stringify(entryToUpdate),
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
    }
    setPostSend(true);
  };

  return (
    <>
      <div className="card shadow">
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
              {flightQuestionsData &&
                flightQuestionsData.map((singleFlightQuestionEntry, index) => (
                  <SingleFlightQuestionTableLine
                    index={index + 1}
                    key={singleFlightQuestionEntry._id}
                    singleFlightQuestionEntry={singleFlightQuestionEntry}
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
      </div>
    </>
  );
}

export default Adminpage;
