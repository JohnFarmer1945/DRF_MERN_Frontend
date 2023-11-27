const Whiteboard = ({ whiteboard }) => {
  return (
    <div className="card p-2">
      <div className="card-header">Flug</div>
      <div className="card-body">
        <h5 className="card-title">{whiteboard.title}</h5>
        <p className="card-text">Beispiel erläuterung</p>
      </div>
    </div>
  );
};

export default Whiteboard;
