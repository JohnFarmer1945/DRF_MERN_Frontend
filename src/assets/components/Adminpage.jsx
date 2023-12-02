import { useEffect, useState } from "react";

import SingleWhiteBoardTableLine from "./SingleWhiteBoardTableLine";

// Get Whiteboard Data:
function Adminpage() {
  const [whiteboardData, setWhiteboardData] = useState(null);
  const [newTitle, setNewTitle] = useState("new Title");
  const [newDescription, setNewDescription] = useState("new Description");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWhiteboardData = async () => {
      const response = await fetch("/api/whiteboard");
      const json = await response.json();

      if (response.ok) {
        setWhiteboardData(json);
      }
    };

    fetchWhiteboardData();
  }, [newTitle]);

  // Create Entry Fetch
  const handleAdd = async () => {
    console.log("handleAdd clicked");

    const newEntry = {
      title: newTitle,
      description: newDescription,
    };

    const response = await fetch("/api/whiteboard", {
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
              <i class="bi bi-plus-square" onClick={handleAdd}></i>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Adminpage;