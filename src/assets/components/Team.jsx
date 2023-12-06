import { useEffect, useState } from "react";

import "../css/general.css";

import WhiteBoardDetails from "./WhiteBoardDetails";

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "api/whiteboard";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/whiteboard";
}

function Team() {
  const [whiteboard, setWhiteboard] = useState(null);

  useEffect(() => {
    const fetchWhiteboard = async () => {
      const response = await fetch(myURL);

      const json = await response.json();

      if (response.ok) {
        setWhiteboard(json);
      }
    };

    fetchWhiteboard();
  }, []);

  return (
    <>
      <div className="card shadow">
        <div className="card-header bg-light">
          <h3 className="text-decoration-underline">Team</h3>
        </div>
        <div className="card-body">
          <h3>Mitflieger / Hospitationen / Einweisung</h3>
          <h3>N&S Aktualität</h3>
          <h3>Persönliche Tagesperformance</h3>
        </div>
      </div>
      <br />

      <div className="card shadow">
        <div className="card-header bg-light fw-bold ">
          <h3 className="text-decoration-underline">
            Aktuelles Station Rendsburg:
          </h3>
        </div>
        <div className="card-body ">
          <div className="container-fluid">
            <div className="row justify-content-center">
              {whiteboard &&
                whiteboard.map((singleWhiteBoardEntry) => (
                  <WhiteBoardDetails
                    key={singleWhiteBoardEntry._id}
                    whiteboard={singleWhiteBoardEntry}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Team;
