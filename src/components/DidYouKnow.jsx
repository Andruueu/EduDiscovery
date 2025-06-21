import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FACTS = {
  terrestrial: [
    "🦒 Giraffes have the same number of neck bones as humans – just longer ones!",
    "🐘 Elephants can recognize themselves in mirrors – that means they're very smart!",
    "🦁 Lions sleep up to 20 hours a day. What a life!",
    "🐒 Monkeys use tools just like humans!",
    "🐼 Pandas spend around 12 hours a day eating bamboo!",
  ],
  marine: [
    "🐙 An octopus has three hearts and blue blood!",
    "🐬 Dolphins have names for each other – they use unique whistles!",
    "🦈 Sharks existed before dinosaurs – over 400 million years ago!",
    "🐢 Sea turtles can live to be over 100 years old!",
    "🐡 Pufferfish can inflate to look bigger and scare predators!",
  ],
  universe: [
    "🌍 Earth is the only planet known to support life… so far!",
    "🌌 The Milky Way galaxy has over 100 billion stars!",
    "🌑 A day on Venus is longer than one year!",
    "🌠 Neutron stars are so dense, a teaspoon would weigh a billion tons!",
    "🪐 Saturn could float in water – it’s mostly made of gas!",
  ],
  anatomy: [
    "🧠 Your brain uses about 20% of your body's energy!",
    "👃 You can smell about 1 trillion different scents!",
    "💓 Your heart beats over 100,000 times per day!",
    "🦴 There are 206 bones in the human body – and half are in your hands and feet!",
    "👁️ Your eyes blink around 20 times every minute!",
  ],
};

const categories = Object.keys(FACTS);

export default function DidYouKnow({ topic }) {
  const [category, setCategory] = useState(null);
  const [fact, setFact] = useState("");
  const [key, setKey] = useState(0);

  const getRandomCategory = () => {
    return categories[Math.floor(Math.random() * categories.length)];
  };

  const getRandomFactFromCategory = (cat) => {
    const factsArray = FACTS[cat];
    return factsArray[Math.floor(Math.random() * factsArray.length)];
  };

  const generateFact = () => {
    let chosenCategory = topic || getRandomCategory();
    let chosenFact = getRandomFactFromCategory(chosenCategory);
    setCategory(chosenCategory);
    setFact(chosenFact);
    setKey((prev) => prev + 1);
  };

  useEffect(() => {
    generateFact();
  }, [topic]); // dacă se schimbă topic, actualizează

  if (!category) return null;

  return (
    <section className="bg-yellow-100 dark:bg-yellow-800 py-8 px-6 rounded-lg max-w-3xl mx-auto my-12 shadow-md text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-yellow-900 dark:text-yellow-100">
        🎉 Did You Know?
      </h2>

      <AnimatePresence mode="wait">
        <motion.p
          key={key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl leading-relaxed text-yellow-800 dark:text-yellow-200 px-2"
        >
          {fact}
        </motion.p>
      </AnimatePresence>

      <button
        onClick={generateFact}
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg text-base transition"
      >
        🔄 Another fact!
      </button>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Fact category:{" "}
        <strong>{category.charAt(0).toUpperCase() + category.slice(1)}</strong>
      </p>
    </section>
  );
}
