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
      <div className="container-fluid border rounded text-center shadow">
        <div className="card shadow m-2">
          <div className="card-body">
            <h2>Dummy Task day</h2>
          </div>
        </div>
        <br />

        <div className="card shadow m-2">
          <div className="card-body">
            <h2>Anstehende Flüge</h2>
            <h2>Compressor rinsing?</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreToDos;
