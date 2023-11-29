import { useEffect, useState } from "react";

// components
import WhiteBoardDetails from "./WhiteBoardDetails";

function Team() {
  const [whiteboard, setWhiteboard] = useState(null);

  useEffect(() => {
    const fetchWhiteboard = async () => {
      const response = await fetch("/api/whiteboard");
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setWhiteboard(json);
      }
    };

    fetchWhiteboard();
  }, []);

  return (
    <>
      <div className="container-fluid border rounded text-center p-2">
        <h2 className="fw-bold text-decoration-underline">
          <b>Team:</b>
        </h2>
        <h2>Mitflieger / Hospitationen / Einweisung</h2>
        <h2>N&S Aktualität</h2>
        <h2>Persönliche Tagesperformance</h2>
      </div>
      <br />
      <div className="container-fluid border rounded text-center p-2">
        <h2 className="fw-bold text-decoration-underline">
          <b>Aktuelles Station Rendsburg:</b>
        </h2>
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
    </>
  );
}

export default Team;
