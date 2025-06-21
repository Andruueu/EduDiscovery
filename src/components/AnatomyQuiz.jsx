import { useState } from "react";

const QUESTIONS = [
  {
    question: "🧠 What does the brain do?",
    options: ["Helps you think", "Helps you run", "Helps you eat"],
    answer: "Helps you think",
    explanation: "🧠 The brain controls your thoughts, feelings, and actions.",
  },
  {
    question: "❤️ Which organ pumps blood?",
    options: ["Liver", "Heart", "Lungs"],
    answer: "Heart",
    explanation:
      "❤️ Your heart is a strong muscle that pumps blood all around your body.",
  },
  {
    question: "🦴 What are bones made of?",
    options: ["Plastic", "Steel", "Calcium"],
    answer: "Calcium",
    explanation: "🦴 Bones are mostly made of calcium to keep them strong!",
  },
  {
    question: "👃 What do we use to smell?",
    options: ["Ears", "Eyes", "Nose"],
    answer: "Nose",
    explanation: "👃 Your nose helps you smell things like flowers and food.",
  },
  {
    question: "👀 Which organ lets us see?",
    options: ["Tongue", "Eyes", "Hands"],
    answer: "Eyes",
    explanation: "👀 Your eyes let you see shapes, colors, and light!",
  },
];

export default function AnatomyQuiz() {
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
      <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center max-w-xl mx-auto mt-8">
        <h3 className="text-2xl font-bold mb-4">
          🎉 Great job, little scientist!
        </h3>
        <p className="text-lg">
          🧬 You got <span className="font-bold text-pink-600">{score}</span>{" "}
          out of <span className="font-bold">{QUESTIONS.length}</span> correct!
        </p>
        {score === 5 ? (
          <p className="mt-2 text-green-600 text-xl">
            🌟 Amazing! You really know your body! 💪
          </p>
        ) : score >= 3 ? (
          <p className="mt-2 text-yellow-600 text-lg">
            👍 Good job! You're learning fast!
          </p>
        ) : (
          <p className="mt-2 text-red-500 text-lg">
            🙌 Keep going! Every scientist starts somewhere! 🧠
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white max-w-xl mx-auto p-6 rounded-xl shadow-lg mt-12">
      <h3 className="text-xl font-bold mb-4">
        🧪 Question {step + 1} of {QUESTIONS.length}
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
                : "bg-pink-200 hover:bg-pink-300"
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
              ✅ Correct! Great work! 🌟
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
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600"
          >
            Next Question →
          </button>
        </div>
      )}
    </div>
  );
}
