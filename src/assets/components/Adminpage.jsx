import { useEffect, useState } from "react";

import SingleWhiteBoardTableLine from "./SingleWhiteBoardTableLine";

function Adminpage() {
  const [whiteboardData, setWhiteboardData] = useState(null);

  useEffect(() => {
    const fetchWhiteboardData = async () => {
      const response = await fetch("/api/whiteboard");
      const json = await response.json();

      if (response.ok) {
        setWhiteboardData(json);
      }
    };

    fetchWhiteboardData();
  }, []);

  return (
    <div className="container-fluid border rounded text-center p-2">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
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
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Adminpage;
