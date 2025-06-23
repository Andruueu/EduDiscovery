import MarineAnimalCard from "./MarineAnimalCard";
import MarineAnimalsQuiz from "../components/MarineAnimalsQuiz";
const MARINE_ANIMALS = [
  "Dolphin",
  "Blue whale",
  "Octopus",
  "Clownfish",
  "Jellyfish",
  "Sea turtle",
  "Shark",
  "Crab",
  "Lobster",
  "Walrus",
  "Orca",
  "Narwhal",
  "Manatee",
  "Penguin",
  "Swordfish",
  "Tuna",
  "Eel",
  "Squid",
  "Manta ray",
  "Seahorse",
  "Moray eel",
  "Barracuda",
  "Humpback whale",
  "Beluga whale",
  "Flying fish",
  "Pufferfish",
  "Stingray",
];

export default function MarineAnimalsSection() {
  return (
    <section id="marine" className="bg-blue-50 dark:bg-blue-950 py-10 px-4">
      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-blue-300 dark:bg-blue-700 text-blue-900 dark:text-white text-center p-6 rounded-xl shadow-lg">
          <h2 className="text-4xl font-extrabold">🌊 Marine Animals</h2>
          <p className="mt-2 text-lg font-medium">
            Explore the fascinating underwater world!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {MARINE_ANIMALS.map((name) => (
          <MarineAnimalCard key={name} name={name} />
        ))}
      </div>
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🧠 Can you answer these ocean questions?
        </h3>
      </div>
      <MarineAnimalsQuiz />
    </section>
  );
}
