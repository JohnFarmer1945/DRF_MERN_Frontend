import "../css/EmergencyAndProcedure.css";

function EmergencyAndProcedure() {
  return (
    <>
      <div className="container-fluid border rounded text-center p-2">
        <div class="d-flex flex-row justify-content-evenly m-3">
          <div class="col-8">
            <div class="card">
              <div class="card-header">Flugbetriebliches Notverfahren</div>
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">
                  Klicken für Zufallsfrage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid border rounded text-center p-2">
        <div class="d-flex flex-row justify-content-evenly m-3">
          <div class="col-8">
            <div class="card">
              <div class="card-header">Medizinisches Verfahren</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Klicken für Zufallsfrage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmergencyAndProcedure;
