import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LandingCard from "./LandingCard";
import TimeDisplay from "./TimeDisplay";
import anatomyImage from "../assets/nhia-moua-F4cJtI7HCMw-unsplash.jpg";
import AnatomySection from "./AnatomySection";
import GalaxySection from "./GalaxySection";
import MarineAnimalsSection from "./MarineAnimalsSection";
import LandAnimalsSection from "./LandAnimalsSection";
import FooterSection from "./FooterSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

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
    <div className="flex flex-col min-h-screen">
      <Navbar setActiveSection={setActiveSection} />

      <main className="flex-grow">
        {!activeSection && (
          <>
            {/* Titlu principal */}
            <section className="bg-blue-100 dark:bg-blue-900 py-12 text-center px-4">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 dark:text-white mb-4">
                Welcome to EduDiscovery! 🌟
              </h1>
            </section>

            {/* Descriere separată, alt background */}
            <section className="bg-pink-200 dark:bg-gray-800 text-center py-10 px-6">
              <p className="text-lg sm:text-xl max-w-5xl mx-auto text-gray-800 dark:text-gray-200">
                EduDiscovery is your magical gateway into the world of science,
                animals, the human body, and space! 🚀 Explore the savannahs,
                dive deep into the oceans, fly through galaxies, and take a peek
                inside your own body. 🦁🐬🌌🧠
                <br />
                With fun facts, beautiful images, interactive sections, it's
                perfect for kids who love to learn while having fun! 🎉📖✨
              </p>
            </section>

            {/* Secțiunea cu carduri */}
            <section className="bg-blue-200 dark:bg-blue-800 py-12 px-4 text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-blue-900 dark:text-white mb-10">
                Choose your category and let's explore! 🌈🧠
              </p>

              <div className="flex flex-wrap justify-center gap-14">
                {cards.map((c) => (
                  <LandingCard
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    emoji={c.emoji}
                    imgSrc={c.img}
                    onClick={() => setActiveSection(c.id)}
                  />
                ))}
              </div>

              <div className="mt-14">
                <TimeDisplay />
              </div>
            </section>
          </>
        )}

        {/* Secțiunile interne */}
        {activeSection === "anatomy" && <AnatomySection />}
        {activeSection === "universe" && <GalaxySection />}
        {activeSection === "marine" && <MarineAnimalsSection />}
        {activeSection === "terrestrial" && <LandAnimalsSection />}

        {/* Buton Back */}
        {activeSection && (
          <div className="text-center my-8">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              onClick={() => {
                setActiveSection(null);
                window.scrollTo({ top: 0, behavior: "auto" });
              }}
            >
              🔙 Back to categories
            </button>
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
