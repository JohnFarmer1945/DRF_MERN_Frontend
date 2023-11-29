import { useEffect, useState } from "react";

function WhiteBoardCRUD({ singleWhiteBoardEntry }) {
  const [whiteboardCRUD, setwhiteboardCRUD] = useState(null);

  useEffect(() => {
    const fetchWhiteboardCRUDData = async () => {
      const response = await fetch("/api/whiteboard");
      const json = await response.json();

      if (response.ok) {
        setwhiteboardCRUD(json);

        json.map((entry) => {
          console.log(entry.title);
        });
      }
    };

    fetchWhiteboardCRUDData();
  }, []);

  return (
    <div className="container-fluid border p-2">
      <div className="container-fluid border rounded text-center row justify-content-center p-2">
        <h1> Whiteboard: </h1>

        <table class="table table-striped table-borderless w-auto table-sm">
          <thead>
            <tr class="text-start">
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {whiteboardCRUD.map((entry, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <input
                    type="text"
                    name="title"
                    size="12"
                    maxlength="12"
                    onChange={(e) => setDescription(e.target.value)}
                    value={entry.title}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="description"
                    size="40"
                    maxlength="40"
                    onChange={(e) => setTitle(e.target.value)}
                    value={entry.description}
                  />
                </td>
                <td>
                  <i class="bi bi-pencil"></i>
                </td>
                <td>
                  <i class="bi bi-trash"></i>
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row"></th>
              <td>
                <input
                  type="text"
                  name="title"
                  size="12"
                  maxlength="12"
                  value="New entry title"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="description"
                  size="40"
                  maxlength="80"
                  value="New entry description"
                />
              </td>
              <td>
                <i class="bi bi-plus-square"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WhiteBoardCRUD;
