import { useEffect, useState } from "react";

export default function SunriseSunset() {
  const [SunriseSunset, setSunriseSunset] = useState(null);

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
        return res.json();
      })
      .then((data) => {
        let dayLightSaving = parseFloat(new Date().toString().slice(30, 31));

        let sunrise = data["results"]["sunrise"];
        let sunriseHour = parseFloat(sunrise[0]) + dayLightSaving;
        sunriseHour = checkDigitalFigures0Before(sunriseHour);
        sunrise = sunriseHour + sunrise.slice(1, 4);

        let sunset = data["results"]["sunset"];

        sunset = parseFloat(sunset) + (12 + d) + ":" + sunset.slice(2, 4);

        let newSunriseSunset =
          "Sonnenaufgang: " +
          sunrise +
          " Uhr | Sonnenuntergang: " +
          sunset +
          " Uhr";
        setSunriseSunset(newSunriseSunset);
      });
  }, []);

  return <>{SunriseSunset}</>;
}
