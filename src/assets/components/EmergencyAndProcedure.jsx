import { useState } from "react";

import "../css/EmergencyAndProcedure.css";

//questions
const questionArrayFlight = [
  /*Warning light indications*/
  "BAT TEMP",
  "ENG 1/2 FAIL",
  "FIRE 1/2",
  "LOW FUEL 1/2",
  "ROTOR RPM",
  "XMSN OILL PRESS",
  /*MASTER caution light indication*/
  "MASTER",
  /*Caution indications*/
  "AVIO OVHT",
  "BAT DISCON",
  "BAT DISCH",
  "BLEED AIR",
  "BUSTIE OPN 1/2",
  "CAD FAN",
  "CAU DEGR",
  "CPDS OVHT",
  "DOORS",
  "ENG CHIP 1/2",
  "ENG O FILT 1/2",
  "ENG OIL P 1/2",
  "ENG PA DIS 1/2",
  "ENG SPLIT 1/2",
  "EPU DOOR",
  "EXT POWER",
  "FIRE E TST 1/2",
  "FIRE EXT 1/2",
  "FLI DEGR 1/2",

  "FLI FAIL 1/2",
  "F PUMP FWD/AFT",
  "F PUMP JET",
  "F QTY DEGR",
  "F QTY FAIL",
  "FUEL FILT 1/2",
  "FUEL PRESS 1/2",
  "FUEL VALVE 1/2",
  "F VALVE CL 1/2",
  "GEN DISCON 1 or 2",
  "GEN DISCON 1 and 2",
  "GEN OVHT 1/2",
  "HTG OVTEMP",
  "HOR BAT",
  "HYD PRESS 1/2",
  "INPUT FAIL",
  "INVERTER",
  "MM EXCEED",
  "OVSP FAIL 1/2",
  "PITOT HTR 1/2",
  "PRIME PUMP 1/2",
  "P0 DIS",
  "SHED EMER",
  "STARTER 1/2",
  "TWIST GRIP 1/2",
  "T0 DIS",
  "VEMD FAN",
  "VAR NR",
  "XMSN CHIP",
  "XMSN OIL T",
  /*CPDS external test caution indications*/
  "ENG CHP CT 1/2",
  "ENG OF CT 1/2",
  "F FLT CT 1/2",
  "XMSN CHP CT",
  "XMSN OT CT",
];

const questionArrayMed = [
  "Barotrauma",
  "Pancreatitis",
  "advanced life support",
  "Kommandokette",
  "arterieller Zugang",
  "Intubation",
  "ossöser Zugang",
  "Thoraxdrainage",
  "Wärmeerhaltung",
  "Kardiopulmonale Reanimation",
];

/*
function randomQuestionFlight() {
  let y = Math.floor(Math.random() * questionArrayFlight.length);
  let z = y + 1;
  var x = document.getElementById("flightQues");
  x.innerHTML = "Frage " + z + ": " + '"' + questionArrayFlight[y] + '"';
}

function randomQuestionMed() {
  let y = Math.floor(Math.random() * questionArrayMed.length);
  let z = y + 1;
  var x = document.getElementById("medQues");
  x.innerHTML = "Frage " + z + ": " + '"' + questionArrayMed[y] + '"';
}

document
  .getElementById("newsletterSignupForm1")
  .addEventListener("submit", (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const body = JSON.stringify({});

    const headers = { "Content-Type": "application/json" };

    const container = document.getElementById("newsletterSignupFormContainer1");

    fetch("/api/newsletter-signup1", { method: "post", body, headers })
      .then((resp) => {
        if (resp.status < 200 || resp.status >= 300)
          throw new Error(`Request failed with status${resp.status}`);
        return resp.json();
      })
      .then((json) => {
        console.log(json);

        container.innerHTML = "<b>Thank you for signingup!</b>";
        container.innerHTML = `${json.rdnEntry}`;
      })
      .catch((err) => {
        container.innerHTML =
          `<b>We're sorry, we had a problem ` +
          `signing you up. Please <a href="/newsletter">try again</a>`;
      });
  });

  */

let myURL = "";
if (import.meta.env.DEV === true) {
  myURL = "../api/flightQuestions/random/";
} else if (import.meta.env.PROD === true) {
  myURL = "https://drf-backend.onrender.com/api/flightQuestions/random/";
}

let myURL1 = "";
if (import.meta.env.DEV === true) {
  myURL1 = "../api/medQuestions/random";
} else if (import.meta.env.PROD === true) {
  myURL1 = "https://drf-backend.onrender.com/api/medQuestions/random";
}

function EmergencyAndProcedure() {
  const [flightQuestion, setFlightQuestion] = useState("");
  const [flighQuestionLoading, setFlighQuestionLoading] = useState(false);

  const handleClickFlight = () => {
    const fetchFlightQuestionsData = async () => {
      const response = await fetch(myURL);
      const json = await response.json();

      if (response.ok) {
        setFlightQuestion(json.question);
        setFlighQuestionLoading(false);
      }
    };
    setFlighQuestionLoading("Loading");
    fetchFlightQuestionsData();
  };

  const [medQuestion, setmedQuestion] = useState("");
  const [medQuestionLoading, setmedQuestionLoading] = useState(false);

  const handleClickMed = () => {
    const fetchMedQuestionsData = async () => {
      const response = await fetch(myURL1);

      const json = await response.json();

      if (response.ok) {
        setmedQuestion(json.question);
        setmedQuestionLoading(false);
      }
    };
    setmedQuestionLoading("Loading");
    fetchMedQuestionsData();
  };

  // const [medQuestion, setMedQuestion] = useState("");
  // const handleClickMed = () => {
  //   let y = Math.floor(Math.random() * questionArrayMed.length);
  //   let z = y + 1;
  //   let x = "Frage " + z + ": " + '"' + questionArrayMed[y] + '"';

  //   setMedQuestion(x);
  // };

  return (
    <>
      <div className="container-fluid border rounded text-center p-0 ">
        <div className="d-flex flex-row justify-content-evenly m-3">
          <div className="col-8">
            <div className="card shadow">
              <div className="card-header">Flugbetriebliches Notverfahren</div>
              <div className="card-body">
                <h5 className="card-title">
                  {flightQuestion && flightQuestion}
                  {flighQuestionLoading && flighQuestionLoading}
                </h5>
                <br />
                <button onClick={handleClickFlight} className="btn btn-primary">
                  Klicken für Zufallsfrage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border rounded text-center p-2 shadow">
        <div className="d-flex flex-row justify-content-evenly m-3">
          <div className="col-8">
            <div className="card shadow">
              <div className="card-header">Medizinisches Verfahren</div>
              <div className="card-body">
                <h5 className="card-title">
                  {medQuestion && medQuestion}
                  {medQuestionLoading && medQuestionLoading}
                </h5>
                <br />
                <button onClick={handleClickMed} className="btn btn-primary">
                  Klicken für Zufallsfrage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmergencyAndProcedure;
