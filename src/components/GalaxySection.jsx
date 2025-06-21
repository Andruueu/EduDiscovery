import { useRef, useEffect, useState } from "react";
import galaxyImg from "../assets/solar-system-min.png";
import PlanetInfo from "./PlanetInfo";
import GalaxyQuiz from "../components/GalaxyQuiz";

const PLANETS = [
  { id: "sun", label: "☀️ Sun", wiki: "Sun", top: "80%", left: "5%" },
  {
    id: "mercury",
    label: "☿️ Mercury",
    wiki: "Mercury_(planet)",
    top: "75%",
    left: "16%",
  },
  { id: "venus", label: "♀️ Venus", wiki: "Venus", top: "69%", left: "22%" },
  { id: "earth", label: "🌍 Earth", wiki: "Earth", top: "62%", left: "30%" },
  { id: "mars", label: "♂️ Mars", wiki: "Mars", top: "56%", left: "41%" },
  {
    id: "jupiter",
    label: "♃ Jupiter",
    wiki: "Jupiter",
    top: "45%",
    left: "50%",
  },
  { id: "saturn", label: "♄ Saturn", wiki: "Saturn", top: "40%", left: "63%" },
  { id: "uranus", label: "♅ Uranus", wiki: "Uranus", top: "30%", left: "75%" },
  {
    id: "neptune",
    label: "♆ Neptune",
    wiki: "Neptune",
    top: "23%",
    left: "85%",
  },
  { id: "pluto", label: "Pluto", wiki: "Pluto", top: "18%", left: "94%" },
];

export default function GalaxySection() {
  const refs = useRef({});
  const topRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const scrollTo = (id) => {
    const el = refs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Afișare buton scroll doar după ce imaginea de sus iese din view
  useEffect(() => {
    const handleScroll = () => {
      const topOffset = topRef.current?.getBoundingClientRect().bottom || 0;
      setShowButton(topOffset < 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-blue-50 dark:bg-blue-900 text-gray-900 dark:text-white py-10 px-4 relative">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-700 dark:text-blue-100">
        🌌 Explore the Solar System!
      </h2>

      {/* Imaginea cu sistemul solar */}
      <div
        ref={topRef}
        className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src={galaxyImg}
          alt="Solar System"
          className="w-full"
          draggable={false}
        />
        {PLANETS.map(({ id, label, top, left }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="absolute w-5 h-5 rounded-full border-2 border-white"
            style={{
              top,
              left,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(239,68,68,1) 0%, rgba(220,38,38,0.8) 40%, rgba(185,28,28,0.6) 70%)",
              animation: "pulseRed 2s infinite",
              boxShadow: "0 0 8px 2px rgba(239,68,68,0.6)",
            }}
            title={label}
            aria-label={label}
          />
        ))}
      </div>

      {/* Cardurile planetelor */}
      <div className="mt-16 space-y-12">
        {PLANETS.map((planet) => (
          <div
            key={planet.id}
            id={planet.id}
            ref={(el) => (refs.current[planet.id] = el)}
            className="scroll-mt-32"
          >
            <div className="max-w-3xl mx-auto">
              <PlanetInfo {...planet} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🧠 Can you answer these questions?
        </h3>
        <GalaxyQuiz />
      </div>

      {/* Buton scroll sus */}
      {showButton && (
        <button
          onClick={() =>
            window.scrollTo({
              top: topRef.current.offsetTop,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 w-12 h-12 z-50 rounded-full"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <div
            className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
            style={{
              animation: "pulseRedSoft 2.5s infinite",
              zIndex: 0,
            }}
          />

          <div className="relative w-12 h-12 z-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        </button>
      )}

      <style>{`
        @keyframes pulseRed {
  0% {
    box-shadow: 0 0 8px 2px rgba(196, 68, 239, 0.6);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 16px 6px rgba(102, 68, 239, 0.8);
    transform: scale(1.3);
  }
  100% {
    box-shadow: 0 0 8px 2px rgba(178, 94, 238, 0.6);
    transform: scale(1);
  }
}
      `}</style>
    </section>
  );
}
