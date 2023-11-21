import { useState, useEffect } from "react";

const Wochentag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const AufgabenTagschichtMedizin = [
  "Kontrolle O2 und BCV",
  "Ampullarium",
  "Zargesbox",
  "Halle fegen, Desinfektions- und Dreiecksräume wischen, Kabine checken",
  "Kindertasche",
  "Rucksack",
  "Maschine waschen, Centerkabinet und O2-Tasche",
];

const AufgabeTagschichtFlug = [
  "Briefkasten",
  "Post abschicken",
  "Halle aufräumen",
  "Halle fegen, Desinfektions- und Dreiecksräume wischen, Kabine checken",
  "TIK Wochencheck",
  "Schwimmwesten checken",
  "Maschine waschen, Centerkabinet und O2-Tasche",
];

const AufgabeNachtschichtMedizin = [
  "Kaffeemaschine und Scheiben putzen und Tatort schauen",
  "Laden Videolaryngoskop",
  "Laden Laryngoskop",
  "Laden Ultraschallgerät",
  "Laden Batterie Heizdecke",
  "Kaffeemaschine und Scheiben putzen und Hubschrauber desinfizieren",
  "BZ Gerät",
];

const AufgabeNachtschichtFlug = [
  "Kaffeemaschine und Scheiben putzen und Tatort schauen",
  "Kaffeemaschine und Scheiben putzen",
  "Kaffeemaschine und Scheiben putzen",
  "Kaffeemaschine und Scheiben putzen",
  "Kaffeemaschine und Scheiben putzen",
  "Kaffeemaschine und Scheiben putzen und Hubschrauber desinfizieren",
  "Kaffeemaschine und Scheiben putzen",
];

function MoreToDos() {
  const [wochentagName, setwochentagName] = useState(null);
  const [tagSchichtMedizin, setTagSchichtMedizin] = useState(null);
  const [tagSchichtFlug, setTagSchichtFlug] = useState(null);
  const [NachtSchichtMedizin, setNachtSchichtMedizin] = useState(null);
  const [NachtSchichtFlug, setNachtSchichtFlug] = useState(null);

  useEffect(() => {
    const now = new Date();
    let heutigerTagNummer = now.getDay();
    let heutigerTagName = Wochentag[now.getDay()];
    setwochentagName(heutigerTagName);

    let tagesAufgabeMedizin = AufgabenTagschichtMedizin[heutigerTagNummer];
    setTagSchichtMedizin(tagesAufgabeMedizin);

    let tagesAufgabeFlug = AufgabeTagschichtFlug[heutigerTagNummer];
    setTagSchichtFlug(tagesAufgabeFlug);

    let nachtAufgabeMedizin = AufgabeNachtschichtMedizin[heutigerTagNummer];
    setNachtSchichtMedizin(nachtAufgabeMedizin);

    let nachtAufgabeFlug = AufgabeNachtschichtFlug[heutigerTagNummer];
    setNachtSchichtFlug(nachtAufgabeFlug);
  }, []);

  /*

  AufgabeTagFlug = [
    "Briefkasten",
    "Post abschicken",
    "Halle aufräumen",
    "Halle fegen, Desinfektions- und Dreiecksräume wischen, Kabine checken",
    "TIK Wochencheck",
    "Schwimmwesten checken",
    "Maschine waschen, Centerkabinet und O2-Tasche",
  ];

  AufgabeTagMed = [
    "Kontrolle O2 und BCV",
    "Ampullarium",
    "Zargesbox",
    "Halle fegen, Desinfektions- und Dreiecksräume wischen, Kabine checken",
    "Kindertasche",
    "Rucksack",
    "Maschine waschen, Centerkabinet und O2-Tasche",
  ];

  AufgabeNachtFlug = [
    "Kaffeemaschine und Scheiben putzen und Tatort schauen",
    "Kaffeemaschine und Scheiben putzen",
    "Kaffeemaschine und Scheiben putzen",
    "Kaffeemaschine und Scheiben putzen",
    "Kaffeemaschine und Scheiben putzen",
    "Kaffeemaschine und Scheiben putzen und Hubschrauber desinfizieren",
    "Kaffeemaschine und Scheiben putzen",
  ];

  AufgabeNachtMed = [
    "Kaffeemaschine und Scheiben putzen und Tatort schauen",
    "Laden Videolaryngoskop",
    "Laden Laryngoskop",
    "Laden Ultraschallgerät",
    "Laden Batterie Heizdecke",
    "Kaffeemaschine und Scheiben putzen und Hubschrauber desinfizieren",
    "BZ Gerät",
  ];

  Wochentag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

  Schichtart = ["Tagschicht", "Nachtschicht"];

  function tagesaufgabeMedizin() {
    const now = new Date();
    let day = now.getDay();

    let tag = Wochentag[day];
    let aufgabe = AufgabeTagMed[day];

    var x = document.getElementById("dailyroutine_med_day");
    x.innerHTML = tag + " Tagschicht: " + aufgabe;

    aufgabe = AufgabeNachtMed[day];
    x = document.getElementById("dailyroutine_med_night");
    x.innerHTML = tag + " Nachtschicht: " + aufgabe;
  }

  function tagesaufgabeFlug() {
    const now = new Date();
    let day = now.getDay();

    let tag = Wochentag[day];
    let aufgabe = AufgabeTagFlug[day];

    var x = document.getElementById("dailyroutine_flight_day");
    x.innerHTML = tag + " Tagschicht: " + aufgabe;

    aufgabe = AufgabeNachtFlug[day];
    x = document.getElementById("dailyroutine_flight_night");
    x.innerHTML = tag + " Nachtschicht: " + aufgabe;
  }

  tagesaufgabeMedizin();
  tagesaufgabeFlug();
*/
  return (
    <>
      <div className="container-fluid border rounded p-2">
        <h4>
          <u>{wochentagName} Tagschicht:</u>
        </h4>
        <div className="d-flex flex-row justify-content-evenly m-3">
          <div className="col-5">
            <div className="card  p-2">
              <div className="card-header">Flug</div>
              <div className="card-body">
                <h5 className="card-title">{tagSchichtFlug}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="card  p-2">
              <div className="card-header">Medizin</div>
              <div className="card-body">
                <h5 className="card-title">{tagSchichtMedizin}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid border rounded text-center p-2">
        <h4>
          <u>{wochentagName} Nachtschicht:</u>
        </h4>
        <div className="d-flex flex-row justify-content-evenly m-3">
          <div className="col-5">
            <div className="card  p-2">
              <div className="card-header">Flug</div>
              <div className="card-body">
                <h5 className="card-title">{NachtSchichtFlug}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="card  p-2">
              <div className="card-header">Medizin</div>
              <div className="card-body">
                <h5 className="card-title">{NachtSchichtMedizin}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid border rounded text-center p-2">
        <h2>Anstehende Flüge</h2>
        <h2>Compressor rinsing?</h2>
      </div>
    </>
  );
}

export default MoreToDos;

/*
import { useState, useEffect } from "react";


const [, setDateTime] = useState(null);
const [isPending, setIsPending] = useState("Loading ...");

function DateTime() {
  const [dateTime, setDateTime] = useState(null);
  const [isPending, setIsPending] = useState("Loading ...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let myDate = new Date();

      let day = myDate.getDate();
      let month = myDate.getMonth();
      let year = myDate.getFullYear();
      let hours = checkDigitalFigures0Before(myDate.getHours());
      let minutes = checkDigitalFigures0Before(myDate.getMinutes());
      let seconds = checkDigitalFigures0Before(myDate.getSeconds());
      let newDateTime =
        day +
        "/" +
        month +
        "/" +
        year +
        " | " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;

      setDateTime(newDateTime + " Uhr ");
      setIsPending(false);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {isPending && isPending}
      {dateTime && dateTime}
    </>
  );
}

export default DateTime;
*/
