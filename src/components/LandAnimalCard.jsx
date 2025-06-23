import { useState } from "react";
import useWikiSummary from "./useWikiSummary";

function fixTextLength(text, length = 300) {
  if (!text) return " ".repeat(length);
  if (text.length === length) return text;
  if (text.length > length) {
    const truncated = text.slice(0, length);
    const lastSpace = truncated.lastIndexOf(" ");
    return truncated.slice(0, lastSpace) + "...";
  }
  return text.padEnd(length, " ");
}

export default function LandAnimalCard({ name }) {
  const wiki = useWikiSummary(name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!wiki) return null;

  return (
    <>
      {/* Card principal */}
      <div className="bg-green-100 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-700 transition-all rounded-xl shadow-md p-4 text-center flex flex-col items-center h-full">
        {wiki.thumbnail?.source && (
          <img
            src={wiki.thumbnail.source}
            alt={wiki.title}
            className="w-full h-52 object-contain rounded-lg mb-3"
          />
        )}
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-1">
          {wiki.title}
        </h3>
        <p className="text-gray-800 dark:text-gray-300 text-sm mb-3 flex-grow whitespace-pre-wrap">
          {fixTextLength(wiki.extract, 300)}
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:underline"
        >
          🔗 Read more
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-green-900 text-gray-900 dark:text-white rounded-lg max-w-lg w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagine */}
            {wiki.thumbnail?.source && (
              <img
                src={wiki.thumbnail.source}
                alt={wiki.title}
                className="w-40 h-40 object-contain mx-auto mb-4"
              />
            )}

            {/* Titlu */}
            <h3 className="text-3xl font-bold mb-4 text-center">
              {wiki.title}
            </h3>

            {/* Rezumat */}
            <p className="text-base leading-relaxed mb-4 text-center">
              {wiki.extract}
            </p>

            {/* Link complet */}
            <a
              href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                wiki.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline mb-4"
            >
              View full article on Wikipedia
            </a>

            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="block mx-auto px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
