import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import SingleWhiteBoardTableLine from "./SingleWhiteBoardTableLine";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/whiteboard/";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/whiteboard/";
}

function Adminpage() {
  const [whiteboardData, setWhiteboardData] = useState(null);
  const [newTitle, setNewTitle] = useState("new Title");
  const [newDescription, setNewDescription] = useState("new Description");
  const [error, setError] = useState(null);
  const [postSend, setPostSend] = useState(false);
  const [whiteboardIsPending, setWhiteboardIsPending] = useState(
    "Loading whiteboard..."
  );
  const { user } = useAuthContext();

  // Get Whiteboard Data:
  useEffect(() => {
    const fetchWhiteboardData = async () => {
      const response = await fetch(myURL, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setWhiteboardData(json);
        setWhiteboardIsPending(false);
      }
    };
    if (user) {
      fetchWhiteboardData();
      setPostSend(false);
    }
  }, [postSend, user]);

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
      console.log("new workout added", json);
      toastSuccNew();
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
      toastSuccDeleted();
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
      toastSuccUpdated();
    }
    setPostSend(true);
  };

  // Toastify Messages sucess
  const toastSuccUpdated = () => toast.success("Eintrag aktualisiert!");
  const toastSuccDeleted = () => toast.success("Eintrag gelöscht!");
  const toastSuccNew = () => toast.success("Neuer Eintrag!");

  return (
    <>
      <div className="card shadow">
        <div className="card-body">
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
                    size="30"
                    maxLength="30"
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    size="30"
                    maxLength="30"
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
      </div>
      <div>
        <ToastContainer autoClose={1200} />
      </div>
    </>
  );
}

export default Adminpage;
