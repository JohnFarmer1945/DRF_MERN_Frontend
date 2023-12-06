import { useEffect, useState } from "react";

import "../css/general.css";

// components
import WhiteBoardDetails from "./WhiteBoardDetails";

function Team() {
  const [whiteboard, setWhiteboard] = useState(null);

  useEffect(() => {
    const fetchWhiteboard = async () => {
      const response = await fetch("api/whiteboard");
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
