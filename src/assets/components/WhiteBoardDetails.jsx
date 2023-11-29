const Whiteboard = ({ whiteboard }) => {
  return (
    <div className="col-4">
      <div className="card border-dark mb-3">
        <div className="card-header">{whiteboard.createdAt}</div>
        <div className="card-body text-dark">
          <h5 className="card-title">{whiteboard.title}</h5>
          <p className="card-text">{whiteboard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
