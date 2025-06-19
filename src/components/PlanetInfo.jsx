import { useEffect, useState } from "react";
import sunImg from "../assets/sun.png";
import mercuryImg from "../assets/mercury.png";
import venusImg from "../assets/venus.png";
import earthImg from "../assets/earth.png";
import marsImg from "../assets/mars.png";
import jupiterImg from "../assets/jupiter.png";
import saturnImg from "../assets/saturn.png";
import uranusImg from "../assets/uranus.png";
import neptuneImg from "../assets/neptune.png";
import plutoImg from "../assets/pluto.png";
const images = {
  sun: sunImg,
  mercury: mercuryImg,
  venus: venusImg,
  earth: earthImg,
  mars: marsImg,
  jupiter: jupiterImg,
  saturn: saturnImg,
  uranus: uranusImg,
  neptune: neptuneImg,
  pluto: plutoImg,
};

export default function PlanetInfo({ id, label, wiki }) {
  const [summary, setSummary] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWiki = async () => {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${wiki}`
        );
        const data = await res.json();
        setSummary(data.extract);
      } catch {
        setError("Couldn't load information.");
      }
    };
    fetchWiki();
  }, [wiki]);

  return (
    <div className="bg-white dark:bg-blue-800 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
      <img
        src={images[id]}
        alt={label}
        className="w-44 h-44 md:w-52 md:h-52 object-contain"
        draggable={false}
      />
      <div className="text-gray-800 dark:text-white">
        <h3 className="text-3xl font-bold mb-2">{label}</h3>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-base leading-snug">{summary}</p>
        )}
      </div>
    </div>
  );
}
