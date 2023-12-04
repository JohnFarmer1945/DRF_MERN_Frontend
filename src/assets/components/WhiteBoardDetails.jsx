const Whiteboard = ({ whiteboard }) => {
  return (
    <div className="col-4">
      <div className="card border-dark mb-3">
        <div className="card-header">{whiteboard.title}</div>
        <div className="card-body text-dark">
          <p className="card-text">{whiteboard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
