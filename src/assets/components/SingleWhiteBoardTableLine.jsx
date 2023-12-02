import { useEffect, useState } from "react";

const SingleWhiteBoardTableLine = ({ index, whiteboard }) => {
  const [title, setTitle] = useState(whiteboard.title);
  const [description, setDescription] = useState(whiteboard.description);

  const handleEdit = async () => {
    console.log(whiteboard._id);
  };

  return (
    <tr>
      <td className="fw-bold">{index}</td>
      <td>
        <input
          type="text"
          size="12"
          maxLength="12"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
      </td>
      <td>
        <input
          type="text"
          size="40"
          maxLength="40"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
      </td>
      <td>
        <i className="bi bi-pencil" onClick={handleEdit}></i>
      </td>
      <td>
        <i className="bi bi-trash"></i>
      </td>
    </tr>
  );
};

export default SingleWhiteBoardTableLine;
