import { useEffect, useState } from "react";

const SingleMedDataTableLine = ({
  singleMedTasksDataEntry,
  handleUpdatedDataFromChild,
}) => {
  const [entryId, setEntryId] = useState(singleMedTasksDataEntry._id);
  const [TagFlug, setTagFlug] = useState(singleMedTasksDataEntry.TagFlug);
  const [NachtFlug, setNachtFlug] = useState(singleMedTasksDataEntry.NachtFlug);
  const [TagMedizin, setTagMedizin] = useState(
    singleMedTasksDataEntry.TagMedizin
  );
  const [NachtMedizin, setNachtMedizin] = useState(
    singleMedTasksDataEntry.NachtMedizin
  );

  const UpdateEntry = () => {
    handleUpdatedDataFromChild([
      entryId,
      {
        TagFlug,
        NachtFlug,
        TagMedizin,
        NachtMedizin,
      },
    ]);
  };

  return (
    <>
      <tr>
        <td className="fw-bold">{singleMedTasksDataEntry.Day}</td>
        <td className="fw-bold">Flug</td>
        <td className="fw-bold">Tag</td>

        <td>
          <input
            type="text"
            size="50"
            maxLength="120"
            onChange={(e) => setTagFlug(e.target.value)}
            value={TagFlug}
          ></input>
        </td>
        <td>
          <i className="bi bi-pencil" onClick={UpdateEntry}></i>
        </td>
      </tr>
      <tr>
        <td className="fw-bold"></td>
        <td className="fw-bold"></td>
        <td className="fw-bold">Nacht</td>

        <td>
          <input
            type="text"
            size="50"
            maxLength="120"
            onChange={(e) => setNachtFlug(e.target.value)}
            value={NachtFlug}
          ></input>
        </td>
        <td>
          <i className="bi bi-pencil" onClick={UpdateEntry}></i>
        </td>
      </tr>
      <tr>
        <td className="fw-bold"></td>
        <td className="fw-bold">Medizin</td>
        <td className="fw-bold">Tag</td>
        <td>
          <input
            type="text"
            size="50"
            maxLength="120"
            onChange={(e) => setTagMedizin(e.target.value)}
            value={TagMedizin}
          ></input>
        </td>
        <td>
          <i className="bi bi-pencil" onClick={UpdateEntry}></i>
        </td>
      </tr>
      <tr>
        <td className="fw-bold"></td>
        <td className="fw-bold"></td>
        <td className="fw-bold">Nacht</td>
        <td>
          <input
            type="text"
            size="50"
            maxLength="120"
            onChange={(e) => setNachtMedizin(e.target.value)}
            value={NachtMedizin}
          ></input>
        </td>
        <td>
          <i className="bi bi-pencil" onClick={UpdateEntry}></i>
        </td>
      </tr>
    </>
  );
};

export default SingleMedDataTableLine;
