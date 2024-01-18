import { useEffect, useState } from "react";

import "../css/general.css";

import WhiteBoardDetails from "./WhiteBoardDetails";

// PRODUCTION DEVELOPMENT SWITCH FOR APIs
let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/whiteboard";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/whiteboard";
}

function Team() {
  const [whiteboard, setWhiteboard] = useState(null);

  useEffect(() => {
    const fetchWhiteboard = async () => {
      const response = await fetch(myURL);
      console.log(response);
      const json = await response.json();

      if (response.ok) {
        setWhiteboard(json);
      }
    };

    fetchWhiteboard();
  }, []);

  return (
    <>
      <div className="container-fluid border rounded text-center p-0">
        <div className="card shadow ">
          <div className="card-header ">
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
        <div className="card shadow ">
          <div className="card-header">
            <h3 className="text-decoration-underline">Team:</h3>
          </div>
          <div className="card-body">
            <h3>Mitflieger / Hospitationen / Einweisung</h3>
            <h3>N&S Aktualität</h3>
            <h3>Persönliche Tagesperformance</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
