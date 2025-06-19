import LandAnimalCard from "./LandAnimalCard";

const LAND_ANIMALS = [
  "Lion",
  "Elephant",
  "Giraffe",
  "Tiger",
  "Bear",
  "Wolf",
  "Zebra",
  "Rhinoceros",
  "Hippopotamus",
  "Cheetah",
  "Deer",
  "Fox",
  "Kangaroo",
  "Panda",
  "Gorilla",
  "Camel",
  "Leopard",
  "Bison",
  "Antelope",
  "Hyena",
  "Moose",
  "Otter",
  "Badger",
  "Raccoon",
  "Koala",
  "Sloth",
  "Wild boar",
  "Reindeer",
  "Jackal",
  "Warthog",
];

export default function LandAnimalsSection() {
  return (
    <section id="land" className="bg-green-50 dark:bg-green-950 py-10 px-4">
      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-green-300 dark:bg-green-700 text-green-900 dark:text-white text-center p-6 rounded-xl shadow-lg">
          <h2 className="text-4xl font-extrabold">🌳 Land Animals</h2>
          <p className="mt-2 text-lg font-medium">
            Discover the wonders of the animal kingdom on land!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {LAND_ANIMALS.map((name) => (
          <LandAnimalCard key={name} name={name} />
        ))}
      </div>
    </section>
  );
}
