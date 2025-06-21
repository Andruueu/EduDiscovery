import { useState } from "react";
import galaxyImg from "../assets/solar-system-min.png";

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

const PLANETS = [
  { id: "sun", label: "☀️ Sun", wiki: "Sun", top: "80%", left: "5%" },
  {
    id: "mercury",
    label: "☿️ Mercury",
    wiki: "Mercury_(planet)",
    top: "70%",
    left: "12%",
  },
  { id: "venus", label: "♀️ Venus", wiki: "Venus", top: "65%", left: "16%" },
  { id: "earth", label: "🌍 Earth", wiki: "Earth", top: "58%", left: "22%" },
  { id: "mars", label: "♂️ Mars", wiki: "Mars", top: "52%", left: "29%" },
  {
    id: "jupiter",
    label: "♃ Jupiter",
    wiki: "Jupiter",
    top: "45%",
    left: "34%",
  },
  { id: "saturn", label: "♄ Saturn", wiki: "Saturn", top: "38%", left: "44%" },
  { id: "uranus", label: "♅ Uranus", wiki: "Uranus", top: "30%", left: "53%" },
  {
    id: "neptune",
    label: "♆ Neptune",
    wiki: "Neptune",
    top: "23%",
    left: "59%",
  },
  { id: "pluto", label: "Pluto", wiki: "Pluto", top: "18%", left: "65%" },
];

function truncateText(text, maxChars = 500) {
  if (!text) return "";
  if (text.length <= maxChars) return text;
  const truncated = text.slice(0, maxChars);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpace) + "...";
}

const galaxyDescription = `
🌌 Welcome to our galaxy! The Solar System is a big family made up of the Sun ☀️ and 8 big planets, plus Pluto, which is a dwarf planet! 🌍

The planets orbit around the Sun, which is a huge star that gives us light and heat. Each planet is special:
- Mercury ☿️ is the closest to the Sun and very hot,
- Venus ♀️ is covered with thick clouds,
- Earth 🌍 is our home, full of life,
- Mars ♂️ is known as the “Red Planet,”
- Jupiter ♃ is the biggest planet,
- Saturn ♄ has beautiful rings,
- Uranus ♅ and Neptune ♆ are cold and blue planets,
- and Pluto, although small, is an important part of our cosmic family.

Every day, our galaxy shows us how amazing the Universe really is! 🚀✨
`;

export default function GalaxySection() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [planetInfo, setPlanetInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlanetInfo = async (wiki) => {
    setLoading(true);
    setError(null);
    setPlanetInfo(null);
    try {
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${wiki}`
      );
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      setPlanetInfo(data.extract || "No information available.");
    } catch {
      setError("Couldn't load information.");
    } finally {
      setLoading(false);
    }
  };

  const onDotClick = (planet) => {
    setSelectedPlanet(planet);
    fetchPlanetInfo(planet.wiki);
  };

  return (
    <section className="max-w-[90vw] mx-auto my-10 px-6">
      <div className="bg-blue-100 dark:bg-blue-900 rounded-t-lg py-6 mb-6 shadow-md">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 dark:text-blue-200">
          🌌 Explore the Solar System!
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12 bg-gray-100 dark:bg-blue-800 rounded-b-lg p-8 shadow-inner">
        {/* Descriere */}
        <div className="md:w-1/3 text-gray-900 dark:text-gray-100 whitespace-pre-line leading-relaxed text-lg">
          {galaxyDescription.split("\n").map((line, idx) =>
            line.trim() ? (
              <p key={idx} className="mb-3">
                {line.trim()}
              </p>
            ) : (
              <br key={idx} />
            )
          )}
        </div>

        {/* Imagine */}
        <div className="relative md:w-2/3 max-w-full mx-auto md:mx-0 bg-white dark:bg-blue-700 rounded-lg shadow-lg p-4">
          <img
            src={galaxyImg}
            alt="Solar System"
            className="w-[70%] rounded-lg shadow-lg select-none"
            style={{ imageRendering: "auto" }}
            draggable={false}
          />
          {PLANETS.map(({ id, label, top, left }) => (
            <button
              key={id}
              onClick={() =>
                onDotClick({
                  id,
                  label,
                  wiki: PLANETS.find((p) => p.id === id).wiki,
                })
              }
              className="absolute rounded-full border-2 border-white cursor-pointer"
              style={{
                top,
                left,
                width: 24,
                height: 24,
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(239,68,68,1) 0%, rgba(220,38,38,0.8) 40%, rgba(185,28,28,0.6) 70%)",
                boxShadow: "0 0 14px 4px rgba(239,68,68,0.9)",
                animation: "pulseRed 2.5s infinite",
              }}
              title={label}
              aria-label={label}
            />
          ))}
          <p className="text-center mt-4 font-semibold text-gray-600 dark:text-gray-300">
            🔴 Click on a red dot to learn more about each planet!
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedPlanet && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPlanet(null)}
        >
          <div
            className="bg-white dark:bg-blue-900 rounded-lg max-w-lg p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedPlanet.id]}
              alt={selectedPlanet.label}
              className="w-40 h-40 object-contain rounded-md shadow-lg mb-4 select-none mx-auto"
              draggable={false}
            />
            <h3 className="text-2xl font-semibold mb-4 text-center text-blue-900 dark:text-blue-100">
              {selectedPlanet.label}
            </h3>

            {loading && (
              <p className="text-center text-gray-600 dark:text-gray-300">
                Loading information...
              </p>
            )}
            {error && (
              <p className="text-red-500 font-semibold text-center">{error}</p>
            )}
            {!loading && !error && (
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed text-center">
                {truncateText(planetInfo, 500)}
              </p>
            )}

            <button
              onClick={() => setSelectedPlanet(null)}
              className="mt-6 px-5 py-2 bg-red-500 hover:bg-red-600 rounded text-white font-semibold block mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulseRed {
          0% {
            box-shadow: 0 0 8px 2px rgba(239,68,68,0.6);
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            box-shadow: 0 0 16px 6px rgba(239,68,68,0.8);
            transform: translate(-50%, -50%) scale(1.3);
          }
          100% {
            box-shadow: 0 0 8px 2px rgba(239,68,68,0.6);
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
