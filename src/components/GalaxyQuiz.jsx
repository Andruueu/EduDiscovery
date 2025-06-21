import { useState } from "react";

const QUESTIONS = [
  {
    question: "🌍 Which planet is known as the Blue Planet?",
    options: ["Mars", "Earth", "Neptune"],
    answer: "Earth",
    explanation:
      "Earth is called the Blue Planet because of its vast oceans 🌊.",
  },
  {
    question: "☀️ What is the center of our Solar System?",
    options: ["Sun", "Moon", "Earth"],
    answer: "Sun",
    explanation: "The Sun is the star at the center of our solar system ☀️.",
  },
  {
    question: "🪐 Which planet has the most rings?",
    options: ["Saturn", "Venus", "Jupiter"],
    answer: "Saturn",
    explanation:
      "Saturn is famous for its beautiful rings made of ice and rock 🧊.",
  },
  {
    question: "🚀 What do we use to travel into space?",
    options: ["Airplane", "Rocket", "Balloon"],
    answer: "Rocket",
    explanation: "Rockets are strong enough to escape Earth's gravity! 🚀",
  },
  {
    question: "🌕 What do astronauts walk on during a moon mission?",
    options: ["Mars", "Venus", "Moon"],
    answer: "Moon",
    explanation: "Astronauts have landed on the Moon, not Mars or Venus! 🌝",
  },
];

export default function GalaxyQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const current = QUESTIONS[step];

  const handleAnswer = (option) => {
    setSelected(option);
    setShowFeedback(true);
    if (option === current.answer) {
      setScore(score + 1);
    }
  };

  const next = () => {
    setSelected(null);
    setShowFeedback(false);
    setStep((s) => s + 1);
  };

  if (step >= QUESTIONS.length) {
    return (
      <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center max-w-xl mx-auto mt-8">
        <h3 className="text-2xl font-bold mb-4">
          🎉 Great job, space explorer!
        </h3>
        <p className="text-lg">
          🚀 You got <span className="font-bold text-blue-600">{score}</span>{" "}
          out of <span className="font-bold">{QUESTIONS.length}</span> correct!
        </p>
        {score === 5 ? (
          <p className="mt-2 text-green-600 text-xl">
            🌟 Perfect score! You're a galaxy genius! 🧠✨
          </p>
        ) : score >= 3 ? (
          <p className="mt-2 text-yellow-600 text-lg">
            👍 Well done! Keep learning about space!
          </p>
        ) : (
          <p className="mt-2 text-red-500 text-lg">
            🌈 Don't worry, try again and you'll improve! 🌟
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white max-w-xl mx-auto p-6 rounded-xl shadow-lg mt-12">
      <h3 className="text-xl font-bold mb-4">
        🧠 Question {step + 1} of {QUESTIONS.length}
      </h3>

      <p className="text-lg mb-4">{current.question}</p>

      <div className="space-y-3">
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            disabled={showFeedback}
            className={`w-full py-2 px-4 rounded-full font-semibold transition-all ${
              selected === opt
                ? opt === current.answer
                  ? "bg-green-400 text-white"
                  : "bg-red-400 text-white"
                : "bg-blue-200 hover:bg-blue-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="mt-4">
          {selected === current.answer ? (
            <p className="text-green-600 font-bold">
              ✅ Correct! Well done! 🌟
            </p>
          ) : (
            <div className="text-red-600">
              <p className="font-bold">❌ Oops! That’s not right.</p>
              <p className="mt-1">
                ✅ The correct answer is <strong>{current.answer}</strong>.
              </p>
            </div>
          )}
          <p className="italic text-sm mt-2">💡 {current.explanation}</p>
          <button
            onClick={next}
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600"
          >
            Next Question →
          </button>
        </div>
      )}
    </div>
  );
}
