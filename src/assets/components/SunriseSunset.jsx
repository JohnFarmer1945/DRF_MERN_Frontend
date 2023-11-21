import { useEffect, useState } from "react";

export default function SunriseSunset() {
  const [SunriseSunset, setSunriseSunset] = useState(null);
  const [isPending, setIsPending] = useState("Loading ...");
  const [error, setError] = useState(null);

  function checkDigitalFigures0Before(digitalNumber) {
    if (digitalNumber < 10) {
      digitalNumber = "0" + digitalNumber;
    } // add zero in front of numbers < 10
    return digitalNumber;
  }

  useEffect(() => {
    fetch(
      "https://api.sunrise-sunset.org/json?lat=54.216737&lng=9.599856&date=today"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }

        return res.json();
      })
      .then((data) => {
        let dayLightSaving = parseFloat(new Date().toString().slice(30, 31));

        let sunrise = data["results"]["sunrise"];
        let sunriseHour = parseFloat(sunrise[0]) + dayLightSaving;
        sunriseHour = checkDigitalFigures0Before(sunriseHour);
        sunrise = sunriseHour + sunrise.slice(1, 4);

        let sunset = data["results"]["sunset"];

        sunset =
          parseFloat(sunset) + (12 + dayLightSaving) + ":" + sunset.slice(2, 4);

        let newSunriseSunset =
          "Sonnenaufgang: " +
          sunrise +
          " Uhr | Sonnenuntergang: " +
          sunset +
          " Uhr";
        setSunriseSunset(newSunriseSunset);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {error && error}
      {isPending && isPending}
      {SunriseSunset && SunriseSunset}
    </>
  );
}
