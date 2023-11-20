import DateTime from "./DateTime";
import SunriseSunset from "./SunriseSunset";

function Start() {
  return (
    <div className="container-fluid border rounded text-center p-2">
      <h1>
        <b>DRF Crewbriefing</b>
      </h1>
      <h1>
        <b>Station Rendsburg Schachtholm - Christoph 42</b>
      </h1>
      <br />
      <h2>
        <DateTime /> Uhr
      </h2>
      <h2>
        <SunriseSunset />
      </h2>
    </div>
  );
}

export default Start;
