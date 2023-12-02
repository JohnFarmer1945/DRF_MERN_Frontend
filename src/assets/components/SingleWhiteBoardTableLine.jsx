const SingleWhiteBoardTableLine = ({ index, whiteboard }) => {
  console.log(whiteboard);
  return (
    <tr>
      <td>{index}</td>
      <td>
        <input type="text" value={whiteboard.title}></input>
      </td>
      <td>{whiteboard.description}</td>
    </tr>
  );
};

export default SingleWhiteBoardTableLine;
