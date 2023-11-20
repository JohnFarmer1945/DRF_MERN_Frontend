import { useState, useEffect } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let myDate = new Date();

      let day = myDate.getDate();
      let month = myDate.getMonth();
      let year = myDate.getFullYear();
      let hours = myDate.getHours();
      let minutes = myDate.getMinutes();
      let seconds = myDate.getSeconds();
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
