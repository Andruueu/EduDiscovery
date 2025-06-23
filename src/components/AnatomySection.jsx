import { useState } from "react";
import anatomyImage from "../assets/human-body-kid.png";
import AnatomyQuiz from "../components/AnatomyQuiz";

const ORGANS = [
  { id: "brain", label: "Brain", wiki: "Brain", top: "10%", left: "50%" },
  { id: "lungs", label: "Lungs", wiki: "Lung", top: "38%", left: "47%" },
  { id: "heart", label: "Heart", wiki: "Human_heart", top: "36%", left: "54%" },
  { id: "stomach", label: "Stomach", wiki: "Stomach", top: "48%", left: "54%" },
  { id: "liver", label: "Liver", wiki: "Liver", top: "45%", left: "48%" },
  {
    id: "pancreas",
    label: "Pancreas",
    wiki: "Pancreas",
    top: "50%",
    left: "50%",
  },
  { id: "kidneys", label: "Kidneys", wiki: "Kidney", top: "59%", left: "45%" },
  {
    id: "genital",
    label: "Genital parts",
    wiki: "Human_reproductive_system",
    top: "65%",
    left: "51%",
  },
];

export default function AnatomySection() {
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFullText, setShowFullText] = useState(false);

  const fetchOrganInfo = async (wikiTitle) => {
    setLoading(true);
    setError(null);
    setInfo(null);
    setShowFullText(false);
    try {
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle}`
      );
      if (!res.ok) throw new Error("Failed to fetch info");
      const data = await res.json();
      setInfo(data.extract || "No information available.");
    } catch (err) {
      setError("Error loading information.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (organ) => {
    setSelectedOrgan(organ);
    fetchOrganInfo(organ.wiki);
  };

  return (
    <section className="max-w-7xl mx-auto my-10 px-6">
      <div className="bg-pink-200 dark:bg-pink-800 rounded-t-lg py-6 mb-6 shadow-md">
        <h2 className="text-4xl font-extrabold text-center text-pink-800 dark:text-pink-200">
          Human Anatomy 🧍‍♂️✨
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12 bg-blue-100 dark:bg-blue-900 rounded-b-lg p-8 shadow-inner">
        <div className="relative w-full md:w-2/3 max-w-4xl mx-auto md:mx-0">
          <img
            src={anatomyImage}
            alt="Human Anatomy"
            className="w-full rounded-lg shadow-lg"
            draggable={false}
          />
          {ORGANS.map(({ id, label, top, left }) => (
            <button
              key={id}
              onClick={() =>
                handleClick({
                  id,
                  label,
                  wiki: ORGANS.find((o) => o.id === id).wiki,
                })
              }
              className="absolute cursor-pointer rounded-full border-2 border-white shadow-lg"
              style={{
                top,
                left,
                transform: "translate(-50%, -50%)",
                width: "18px",
                height: "18px",
                background:
                  "radial-gradient(circle, rgba(239,68,68,1) 0%, rgba(220,38,38,0.8) 40%, rgba(185,28,28,0.6) 70%)",
                animation: "pulseRed 2.5s infinite",
                boxShadow: "0 0 8px 2px rgba(239,68,68,0.6)",
              }}
              aria-label={label}
              title={label}
            />
          ))}
        </div>

        <div className="md:w-1/3 text-gray-900 dark:text-gray-100">
          <h3 className="text-2xl font-semibold mb-4">
            About the Human Body 🧠❤️🌬️
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            The human body is an amazing machine made up of many important parts
            called organs. Each organ has a special job that helps you live,
            grow, and explore the world around you! 🌟
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Your <strong>brain</strong> 🧠 helps you think, learn, and remember.
            The <strong>heart</strong> ❤️ pumps blood full of oxygen to your
            entire body. Your <strong>lungs</strong> 🌬️ help you breathe fresh
            air every day.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            The <strong>stomach</strong> 🍽️ helps digest the food you eat, and
            your <strong>kidneys</strong> 💧 clean your blood to keep you
            healthy. All these organs work together to keep you strong and full
            of energy! ⚡
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            By learning about your body and its parts, you can take good care of
            yourself and understand how wonderful you really are. 🌈
          </p>
          <p className="italic text-center text-sm text-gray-600 dark:text-gray-400">
            Click the red dots on the picture to learn more about each organ!
            👆🔴
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🧠 Can you answer these questions?
        </h3>
        <AnatomyQuiz />
      </div>

      {/* Modal */}
      {selectedOrgan && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedOrgan(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-lg p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-pink-700 dark:text-pink-200">
              {selectedOrgan.label}
            </h3>

            {loading && <p className="text-center">Loading information...</p>}
            {error && (
              <p className="text-red-600 text-center font-medium">{error}</p>
            )}
            {!loading && !error && info && (
              <>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4 text-center whitespace-pre-line">
                  {showFullText
                    ? info
                    : info.length > 400
                    ? info.slice(0, 400) + "..."
                    : info}
                </p>
                {info.length > 400 && (
                  <button
                    onClick={() => setShowFullText(!showFullText)}
                    className="text-sm text-blue-600 dark:text-blue-300 font-medium underline block mx-auto mb-2"
                  >
                    {showFullText ? "🔙 Show less" : "🔎 Show more"}
                  </button>
                )}
              </>
            )}

            <button
              onClick={() => setSelectedOrgan(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 block mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulseRed {
          0% {
            box-shadow: 0 0 8px 2px rgba(239,68,68,0.6);
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            box-shadow: 0 0 16px 6px rgba(239,68,68,0.8);
            transform: translate(-50%, -50%) scale(1.3);
          }
          100% {
            box-shadow: 0 0 8px 2px rgba(239,68,68,0.6);
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
