import { useState } from "react";
import Navbar from "./Navbar";
import LandingCard from "./LandingCard";
import TimeDisplay from "./TimeDisplay";
import anatomyImage from "../assets/nhia-moua-F4cJtI7HCMw-unsplash.jpg";
import AnatomySection from "./AnatomySection";
import GalaxySection from "./GalaxySection";
// import alte secțiuni: UniverseSection, MarineSection, etc.

export default function Home() {
  const [activeSection, setActiveSection] = useState(null); // 🆕

  const cards = [
    {
      id: "terrestrial",
      title: "Land animals",
      emoji: "🐾",
      img: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "marine",
      title: "Marine animals",
      emoji: "🐟",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "universe",
      title: "Galaxy",
      emoji: "🌌",
      img: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "anatomy",
      title: "Human body",
      emoji: "🧬",
      img: anatomyImage,
    },
  ];

  return (
    <>
      <Navbar />

      {!activeSection && (
        <header className="bg-blue-200 dark:bg-blue-800 py-12 min-h-screen">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
            Welcome to EduDiscovery! 🌟
          </h1>
          <p className="text-center text-lg max-w-3xl mx-auto">
            Choose your category and let's explore!
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-10 px-4">
            {cards.map((c) => (
              <LandingCard
                key={c.id}
                id={c.id}
                title={c.title}
                emoji={c.emoji}
                imgSrc={c.img}
                onClick={() => setActiveSection(c.id)} // 🆕
              />
            ))}
          </div>

          <TimeDisplay />
        </header>
      )}

      {/* Afișează doar secțiunea selectată */}
      {activeSection === "anatomy" && <AnatomySection />}

      {activeSection === "universe" && <GalaxySection />}
      {/*{activeSection === "marine" && <MarineSection />}
      {activeSection === "terrestrial" && <LandAnimalsSection />} */}

      {/* Buton pentru a reveni la pagina principală */}
      {activeSection && (
        <div className="text-center my-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setActiveSection(null)}
          >
            🔙 Back to categories
          </button>
        </div>
      )}
    </>
  );
}
