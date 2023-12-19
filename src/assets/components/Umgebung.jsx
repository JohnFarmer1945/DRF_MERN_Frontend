import DateTime from "./DateTime";
import SunriseSunset from "./SunriseSunset";

function Umgebung() {
  return (
    <>
      <div className="container-fluid border rounded text-center  shadow">
        <div className="card shadow m-2">
          <div className="card-body">
            <h3>
              <b>
                <DateTime />
              </b>
            </h3>
            <h3>
              <b>
                <SunriseSunset />
              </b>
            </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid border rounded text-center p-2 shadow">
        <div className="card shadow m-2">
          <div className="card-body">
            <h2>
              <a
                target="_blank"
                className="link-dark"
                href="https://www.flugwetter.de"
              >
                Flugwetter
              </a>
            </h2>
            <h2>
              <a
                target="_blank"
                className="link-dark"
                href="https://www.deutscher-wetterdienst.de/gsb/heliportal/gafor/index.html"
              >
                Deutscher Wetterdienst Heliportal
              </a>
            </h2>
            <h2>
              <a
                target="_blank"
                className="link-dark"
                href="https://www.windy.com/EDXR?54.220,8.500,8"
              >
                WINDY.com
              </a>
            </h2>
            <h2>
              <a
                target="_blank"
                className="link-dark"
                href="https://notaminfo.com/localarea"
              >
                NOTAM Info
              </a>
            </h2>
            <h2>
              <a
                target="_blank"
                className="link-dark"
                href="https://notaminfo.com/localarea"
              >
                DFS Nachttiefflugsystem
              </a>
            </h2>
            <h2>
              <a
                target="_blank"
                className="link-dark"
                href="https://ais.dfs.de/pilotservice/service/aup/aup_edit_map.jsp#contentMap"
              >
                DFS Nachttiefflug
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Umgebung;

<div className="container-fluid border rounded text-center p-2 shadow">
  <div className="card shadow m-2">
    <div className="card-body">
      <h2>Hubschrauber (Besonderheiten / Betankung)</h2>
      <h2>Technische Einschränkungen</h2>
      <h2>
        Rüstzustand (Stand O<sub>2</sub>) / Veränderungen
      </h2>
      <h2>Einschränkungen Medizin</h2>
      <h2>Defektes Material / Fehlendes Material</h2>
    </div>
  </div>
</div>;
