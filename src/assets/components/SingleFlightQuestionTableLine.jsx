import { useEffect, useState } from "react";

const SingleFlightQuestionTableLine = ({
  index,
  singleFlightQuestionEntry,
  onDataFromChild,
  handleUpdateDataFromChild,
}) => {
  const [question, setQuestion] = useState(singleFlightQuestionEntry.question);
  const [answer, setAnswer] = useState(singleFlightQuestionEntry.answer);
  const [inputValue, setInputValue] = useState(singleFlightQuestionEntry._id);

  // Delte Data
  const sendDataToParent = () => {
    onDataFromChild(inputValue);
  };

  // Update Data

  const sendUpdateDataToParent = () => {
    const dataToBeUpdated = [singleFlightQuestionEntry._id, question, answer];
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
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
        ></input>
      </td>
      <td>
        <input
          type="text"
          size="30"
          maxLength="30"
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}
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

export default SingleFlightQuestionTableLine;
