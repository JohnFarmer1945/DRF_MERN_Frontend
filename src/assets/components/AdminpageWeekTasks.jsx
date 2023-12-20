function AdminpageWeekTasks() {
  return (
    <>
      <div className="card shadow">
        <div className="card-header bg-light text-start">
          <h3 className="text-decoration-underline">Week-Tasks:</h3>
        </div>
        <div className="card-body">
          <table class="table table-hover table-bordered table-sm w-auto">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Schicht</th>
                <th scope="col">Flug</th>
                <th scope="col">Medizin</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Montag</th>
                <th scope="row">Tag</th>
                <td>Jacob</td>
                <td>Jacob</td>
                <td>
                  <i className="bi bi-pencil"></i>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <th scope="row">Nacht</th>
                <td>Jacob</td>
                <td>Jacob</td>

                <td>
                  <i className="bi bi-pencil"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminpageWeekTasks;
