import { useEffect, useState } from "react";

const SingleWhiteBoardTableLine = ({
  index,
  whiteboard,
  onDataFromChild,
  handleUpdateDataFromChild,
}) => {
  const [title, setTitle] = useState(whiteboard.title);
  const [description, setDescription] = useState(whiteboard.description);
  const [inputValue, setInputValue] = useState(whiteboard._id);

  // Delte Data
  const sendDataToParent = () => {
    onDataFromChild(inputValue);
  };

  // Update Data

  const sendUpdateDataToParent = () => {
    const dataToBeUpdated = [whiteboard._id, title, description];
    handleUpdateDataFromChild(dataToBeUpdated);
  };

  return (
    <tr>
      <td className="fw-bold">{index}</td>
      <td>
        <input
          type="text"
          size="30"
          maxLength="30"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
      </td>
      <td>
        <input
          type="text"
          size="30"
          maxLength="30"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
      </td>
      <td>
        <i className="bi bi-pencil" onClick={sendUpdateDataToParent}></i>
      </td>
      <td>
        <i className="bi bi-trash" onClick={sendDataToParent}></i>
      </td>
    </tr>
  );
};

export default SingleWhiteBoardTableLine;
