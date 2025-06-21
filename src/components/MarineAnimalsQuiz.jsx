import { useState } from "react";

const QUESTIONS = [
  {
    question:
      "🐬 What animal is known for its intelligence and playful nature?",
    options: ["Shark", "Dolphin", "Octopus"],
    answer: "Dolphin",
    explanation: "🐬 Dolphins are very smart and love to play and communicate!",
  },
  {
    question: "🦈 Which animal is the top predator in the ocean?",
    options: ["Shark", "Seal", "Lobster"],
    answer: "Shark",
    explanation: "🦈 Sharks are powerful hunters and top predators in the sea.",
  },
  {
    question: "🐢 What sea animal has a hard shell and moves slowly?",
    options: ["Crab", "Shark", "Sea turtle"],
    answer: "Sea turtle",
    explanation: "🐢 Sea turtles have strong shells and swim long distances!",
  },
  {
    question: "🦀 Which of these has claws and walks sideways?",
    options: ["Jellyfish", "Crab", "Whale"],
    answer: "Crab",
    explanation: "🦀 Crabs have pincers and often move sideways on the sand.",
  },
  {
    question: "🐙 What animal has 8 arms and can squirt ink?",
    options: ["Octopus", "Seal", "Starfish"],
    answer: "Octopus",
    explanation:
      "🐙 Octopuses are amazing creatures with 8 arms and clever tricks!",
  },
];

export default function MarineAnimalsQuiz() {
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
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center max-w-xl mx-auto mt-8">
        <h3 className="text-2xl font-bold mb-4">
          🎉 Great job, ocean explorer!
        </h3>
        <p className="text-lg">
          🌊 You got <span className="font-bold text-blue-600">{score}</span>{" "}
          out of <span className="font-bold">{QUESTIONS.length}</span> correct!
        </p>
        {score === 5 ? (
          <p className="mt-2 text-green-700 text-xl">
            🌟 You know the ocean like a dolphin! 🐬
          </p>
        ) : score >= 3 ? (
          <p className="mt-2 text-yellow-700 text-lg">
            👏 Good job! Keep swimming and learning!
          </p>
        ) : (
          <p className="mt-2 text-red-500 text-lg">
            💪 Keep exploring! The sea is full of wonders! 🐚
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white max-w-xl mx-auto p-6 rounded-xl shadow-lg mt-12">
      <h3 className="text-xl font-bold mb-4">
        🌊 Question {step + 1} of {QUESTIONS.length}
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
                  ? "bg-blue-400 text-white"
                  : "bg-red-400 text-white"
                : "bg-sky-200 hover:bg-sky-300"
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
              ✅ Correct! Great job! 🐠
            </p>
          ) : (
            <div className="text-red-600">
              <p className="font-bold">❌ Not quite!</p>
              <p className="mt-1">
                ✅ The correct answer is <strong>{current.answer}</strong>.
              </p>
            </div>
          )}
          <p className="italic text-sm mt-2">💡 {current.explanation}</p>
          <button
            onClick={next}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Next Question →
          </button>
        </div>
      )}
    </div>
  );
}
