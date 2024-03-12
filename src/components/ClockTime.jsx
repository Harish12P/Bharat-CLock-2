import { useEffect } from "react";
import { useState } from "react";

let ClockTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("canceled the interval");
    };
  }, []);
  // let time = new Date();
  return (
    <p>
      This is the current time:{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};

export default ClockTime;
