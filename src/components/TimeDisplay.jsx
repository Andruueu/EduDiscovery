import { useEffect, useState } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleString());
    };

    updateTime(); // Setează ora imediat la încărcare
    const interval = setInterval(updateTime, 1000); // Actualizare la fiecare secundă
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-center text-lg mt-6">
      📅 {time ? time : "The time is loading…"}
    </p>
  );
}
