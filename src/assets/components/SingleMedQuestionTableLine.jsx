import { useEffect, useState } from "react";

const SingleMedQuestionTableLine = ({
  index,
  singleMedQuestionEntry,
  onDataFromChild,
  handleUpdateDataFromChild,
}) => {
  const [question, setQuestion] = useState(singleMedQuestionEntry.question);
  const [answer, setAnswer] = useState(singleMedQuestionEntry.answer);
  const [inputValue, setInputValue] = useState(singleMedQuestionEntry._id);

  // Delte Data
  const sendDataToParent = () => {
    onDataFromChild(inputValue);
  };

  // Update Data

  const sendUpdateDataToParent = () => {
    const dataToBeUpdated = [singleMedQuestionEntry._id, question, answer];
    handleUpdateDataFromChild(dataToBeUpdated);
  };

  return (
    <tr>
      <td className="fw-bold">{index}</td>
      <td>
        <input
          type="text"
          size="12"
          maxLength="12"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
        ></input>
      </td>
      <td>
        <input
          type="text"
          size="40"
          maxLength="40"
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

export default SingleMedQuestionTableLine;
