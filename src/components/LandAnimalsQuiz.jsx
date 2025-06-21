import { useState } from "react";

const QUESTIONS = [
  {
    question: "🦁 What animal is known as the King of the Jungle?",
    options: ["Elephant", "Lion", "Tiger"],
    answer: "Lion",
    explanation:
      "🦁 The lion is called the King of the Jungle because of its strength and roar!",
  },
  {
    question: "🐘 Which land animal is the largest?",
    options: ["Giraffe", "Elephant", "Hippo"],
    answer: "Elephant",
    explanation:
      "🐘 Elephants are the biggest land animals and can weigh up to 6,000 kg!",
  },
  {
    question: "🦘 What animal carries its baby in a pouch?",
    options: ["Kangaroo", "Bear", "Zebra"],
    answer: "Kangaroo",
    explanation:
      "🦘 Kangaroos have a pouch where their baby, called a joey, grows!",
  },
  {
    question: "🐅 Which of these animals has stripes?",
    options: ["Elephant", "Zebra", "Rhino"],
    answer: "Zebra",
    explanation:
      "🦓 Zebras have black and white stripes that help them hide in tall grass.",
  },
  {
    question: "🐵 Which animal is most like humans?",
    options: ["Giraffe", "Monkey", "Bear"],
    answer: "Monkey",
    explanation:
      "🐒 Monkeys are primates like us — they are smart and can use tools!",
  },
];

export default function LandAnimalsQuiz() {
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
      <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center max-w-xl mx-auto mt-8">
        <h3 className="text-2xl font-bold mb-4">
          🎉 Well done, animal expert!
        </h3>
        <p className="text-lg">
          🌳 You got <span className="font-bold text-green-600">{score}</span>{" "}
          out of <span className="font-bold">{QUESTIONS.length}</span> correct!
        </p>
        {score === 5 ? (
          <p className="mt-2 text-green-700 text-xl">
            🌟 You're a wildlife genius! 🦓🐒
          </p>
        ) : score >= 3 ? (
          <p className="mt-2 text-yellow-700 text-lg">
            👏 Great job! Keep exploring the animal kingdom!
          </p>
        ) : (
          <p className="mt-2 text-red-500 text-lg">
            💪 Don't give up! Every explorer learns step by step! 🐾
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white max-w-xl mx-auto p-6 rounded-xl shadow-lg mt-12">
      <h3 className="text-xl font-bold mb-4">
        🐾 Question {step + 1} of {QUESTIONS.length}
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
                : "bg-lime-200 hover:bg-lime-300"
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
              ✅ Correct! Awesome job! 🐶
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
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
          >
            Next Question →
          </button>
        </div>
      )}
    </div>
  );
}
