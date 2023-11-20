import { useState, useEffect } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState(null);

  function checkDigitalFigures0Before(digitalNumber) {
    if (digitalNumber < 10) {
      digitalNumber = "0" + digitalNumber;
    } // add zero in front of numbers < 10
    return digitalNumber;
  }

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

      setDateTime(newDateTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <>{dateTime}</>;
}

export default DateTime;
