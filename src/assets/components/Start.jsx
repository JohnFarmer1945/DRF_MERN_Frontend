import DateTime from "./DateTime";

function Start() {
  return (
    <div class="container-fluid border rounded text-center p-2">
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
        Sonnenaufgang:
        <span id="sunrise"></span>
        Uhr | Sonnenuntergang:
        <span id="sunset"></span>
        Uhr
      </h2>
    </div>
  );
}

export default Start;
