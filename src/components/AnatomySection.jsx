import { useState } from "react";

const bodySystems = [
  {
    name: "Sistemul osos",
    description: "Susține corpul și protejează organele interne.",
    emoji: "🦴",
  },
  {
    name: "Sistemul digestiv",
    description: "Transformă mâncarea în energie pentru corp.",
    emoji: "🍽️",
  },
  {
    name: "Sistemul respirator",
    description: "Ne ajută să respirăm și să aducem oxigen în sânge.",
    emoji: "🌬️",
  },
];

export default function AnatomySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="anatomy"
      className="bg-blue-100 dark:bg-blue-800 min-h-screen p-6 text-center"
    >
      <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-100 mb-8">
        🧬 Anatomia Corpului Uman
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {bodySystems.map((system, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="text-5xl mb-2">{system.emoji}</div>
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-100">
              {system.name}
            </h3>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {system.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
