import { useEffect, useState } from "react";

function SunriseSunset() {
  const [SunriseSunset, setSunriseSunset] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.sunrise-sunset.org/json?lat=54.216737&lng=9.599856&date=today"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        var d = new Date();

        d = d.toString();

        d = d.slice(30, 31);

        d = parseFloat(d);

        let sunrise = data["results"]["sunrise"];
        let sunset = data["results"]["sunset"];

        sunrise = parseFloat(sunrise) + d + ":" + sunrise.slice(2, 4);
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

export default SunriseSunset;
