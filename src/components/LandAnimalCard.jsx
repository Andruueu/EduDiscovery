import { useEffect, useState } from "react";
import useWikiSummary from "./useWikiSummary";

export default function LandAnimalCard({ name }) {
  const wiki = useWikiSummary(name);
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    const fetchSound = async () => {
      try {
        const q = name.toLowerCase().replace(/ /g, "+");
        const res = await fetch(
          `https://freesound.org/apiv2/search/text/?query=${q}&filter=duration:[1 TO 10]&fields=sounds,results&token=fHHdTcX1lENivAFEv83HmS3m95gaRIRQMQ6rQJUk`
        );
        const data = await res.json();
        if (data.results && data.results.length) {
          setAudioUrl(data.results[0].previews["preview-hq-mp3"]);
        }
      } catch (e) {
        console.error("FreeSound fetch error:", e);
      }
    };
    fetchSound();
  }, [name]);

  if (!wiki) return null;

  return (
    <div className="bg-green-100 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-700 transition-all rounded-xl shadow-md p-4 text-center flex flex-col items-center">
      {wiki.thumbnail?.source && (
        <img
          src={wiki.thumbnail.source}
          alt={wiki.title}
          className="w-full h-52 object-cover rounded-lg mb-3"
        />
      )}
      <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-1">
        {wiki.title}
      </h3>
      <p className="text-gray-800 dark:text-gray-300 text-sm mb-3">
        {wiki.extract}
      </p>
      {audioUrl ? (
        <button
          onClick={() => new Audio(audioUrl).play()}
          className="mt-auto bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm transition"
        >
          🔊 Play Sound
        </button>
      ) : (
        <p className="mt-auto text-xs italic">Sound unavailable</p>
      )}
    </div>
  );
}
