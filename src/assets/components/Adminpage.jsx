import { useEffect, useState } from "react";

import SingleWhiteBoardTableLine from "./SingleWhiteBoardTableLine";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "api/whiteboard/";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/whiteboard/";
}

function Adminpage() {
  const [whiteboardData, setWhiteboardData] = useState(null);
  const [newTitle, setNewTitle] = useState("new Title");
  const [newDescription, setNewDescription] = useState("new Description");
  const [error, setError] = useState(null);
  const [postSend, setPostSend] = useState(false);

  // Get Whiteboard Data:
  useEffect(() => {
    const fetchWhiteboardData = async () => {
      const response = await fetch(myURL);
      const json = await response.json();

      if (response.ok) {
        setWhiteboardData(json);
      }
    };

    fetchWhiteboardData();
    setPostSend(false);
  }, [postSend]);

  // Create Entry Fetch
  const handleAdd = async () => {
    console.log("handleAdd clicked");

    const newEntry = {
      title: newTitle,
      description: newDescription,
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
      console.log("new workout added", json);
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
    let title = updateData[1];
    let description = updateData[2];

    const entryToUpdate = {
      title: title,
      description: description,
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
    <div className="container-fluid border rounded text-center p-2">
      <table className="table table-striped table-borderless table-sm w-auto align-middle text-center">
        <thead className="text-start text-decoration-underline">
          <tr>
            <th>#</th>
            <th>Name:</th>
            <th>Description:</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {whiteboardData &&
            whiteboardData.map((singleWhiteBoardEntry, index) => (
              <SingleWhiteBoardTableLine
                index={index + 1}
                key={singleWhiteBoardEntry._id}
                whiteboard={singleWhiteBoardEntry}
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
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
              ></input>
            </td>
            <td>
              <input
                type="text"
                size="40"
                maxLength="40"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
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
  );
}

export default Adminpage;
