import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import SingleMedQuestionTableLine from "./SingleMedQuestionTableLine";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/medQuestions/";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/medQuestions/";
}

function Adminpage() {
  const [medQuestionsData, setMedQuestionsData] = useState(null);
  const [newQuestion, setNewQuestion] = useState("new Title");
  const [newAnswer, setNewAnswer] = useState("new Description");
  const [error, setError] = useState(null);
  const [postSend, setPostSend] = useState(false);
  const [medQuestionsIsPending, setMedQuestionsIsPending] = useState(
    "Loading med Questions..."
  );
  const { user } = useAuthContext();
  // Get Med Data:
  useEffect(() => {
    const fetchMedQuestionsData = async () => {
      const response = await fetch(myURL, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setMedQuestionsData(json);

        setMedQuestionsIsPending(false);
      }
    };

    if (user) {
      fetchMedQuestionsData();
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
      </div>
    </>
  );
}

export default Adminpage;
