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
import GalaxyQuiz from "./GalaxyQuiz";

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
  { id: "sun", label: "☀️ Sun", wiki: "Sun", top: "80%", left: "18%" },
  {
    id: "mercury",
    label: "☿️ Mercury",
    wiki: "Mercury_(planet)",
    top: "70%",
    left: "27%",
  },
  { id: "venus", label: "♀️ Venus", wiki: "Venus", top: "65%", left: "31%" },
  { id: "earth", label: "🌍 Earth", wiki: "Earth", top: "58%", left: "36%" },
  { id: "mars", label: "♂️ Mars", wiki: "Mars", top: "52%", left: "44%" },
  {
    id: "jupiter",
    label: "♃ Jupiter",
    wiki: "Jupiter",
    top: "45%",
    left: "49%",
  },
  { id: "saturn", label: "♄ Saturn", wiki: "Saturn", top: "38%", left: "59%" },
  { id: "uranus", label: "♅ Uranus", wiki: "Uranus", top: "30%", left: "68%" },
  {
    id: "neptune",
    label: "♆ Neptune",
    wiki: "Neptune",
    top: "23%",
    left: "74%",
  },
  { id: "pluto", label: "Pluto", wiki: "Pluto", top: "18%", left: "80%" },
];

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
  const [showFullText, setShowFullText] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onSelectPlanet = (planet) => {
    setSelectedPlanet(planet);
    fetchPlanetInfo(planet.wiki);
    setDropdownOpen(false);
  };
  const fetchPlanetInfo = async (wiki) => {
    setLoading(true);
    setError(null);
    setPlanetInfo(null);
    setShowFullText(false);
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
      <div className="flex flex-col md:flex-row items-start gap-12 bg-gray-100 dark:bg-blue-800 rounded-b-lg p-8 shadow-inner">
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

        <div className="relative md:w-2/3 max-w-full mx-auto md:mx-0 bg-white dark:bg-blue-700 rounded-lg shadow-lg p-4 hidden md:block">
          <img
            src={galaxyImg}
            alt="Solar System"
            className="w-[70%] mx-auto rounded-lg shadow-lg select-none"
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

      <div className="block md:hidden max-w-xs mx-auto mt-6 relative">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full p-4 text-center font-extrabold text-red-600 dark:text-red-400 text-xl bg-red-100 dark:bg-red-900 border-4 border-red-500 dark:border-red-400 rounded-lg cursor-pointer select-none hover:bg-red-200 dark:hover:bg-red-800 transition"
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label="Explore planets dropdown"
        >
          🚀 Explore Planets!
          <span className="inline-block ml-2 transform transition-transform duration-300">
            {dropdownOpen ? "▲" : "▼"}
          </span>
        </button>

        {dropdownOpen && (
          <ul
            role="listbox"
            className="absolute z-50 w-full max-h-72 overflow-y-auto mt-1 bg-red-100 dark:bg-red-900 border-4 border-red-500 dark:border-red-400 rounded-lg shadow-lg text-red-900 dark:text-red-200 text-lg font-semibold"
            tabIndex={-1}
          >
            {PLANETS.map(({ id, label }) => (
              <li
                key={id}
                role="option"
                tabIndex={0}
                className="cursor-pointer p-4 border-b border-red-300 dark:border-red-700 hover:bg-red-300 dark:hover:bg-red-700 last:border-b-0"
                onClick={() => onSelectPlanet(PLANETS.find((p) => p.id === id))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectPlanet(PLANETS.find((p) => p.id === id));
                  }
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🧠 Can you answer these questions?
        </h3>
        <GalaxyQuiz />
      </div>

      {selectedPlanet && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPlanet(null)}
        >
          <div
            className="bg-white dark:bg-blue-900 rounded-lg max-w-lg w-full p-6 shadow-lg relative"
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
            {!loading && !error && planetInfo && (
              <>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed text-center whitespace-pre-line">
                  {showFullText
                    ? planetInfo
                    : planetInfo.slice(0, 500) +
                      (planetInfo.length > 500 ? "..." : "")}
                </p>
                {planetInfo.length > 500 && (
                  <button
                    onClick={() => setShowFullText(!showFullText)}
                    className="block mt-2 text-sm text-blue-600 dark:text-blue-300 font-medium underline mx-auto hover:text-blue-800 dark:hover:text-blue-100"
                  >
                    {showFullText ? "🔙 Show less" : "🔎 Show more"}
                  </button>
                )}
              </>
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
