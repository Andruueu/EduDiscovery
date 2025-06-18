import { useEffect, useState } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fetchTime = () => {
      fetch("https://worldtimeapi.org/api/ip")
        .then((r) => r.json())
        .then((json) => {
          const d = new Date(json.datetime);
          setTime(d.toLocaleString());
        })
        .catch(console.error);
    };
    fetchTime();
    const interval = setInterval(fetchTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-center text-lg mt-6">
      📅 {time ? time : "The time is loading…"}
    </p>
  );
}
