import { useEffect, useState } from "react";
import useWikiSummary from "./useWikiSummary";

export default function LandAnimalCard({ name }) {
  const wiki = useWikiSummary(name);

  if (!wiki) return null;

  return (
    <div className="bg-green-100 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-700 transition-all rounded-xl shadow-md p-4 text-center flex flex-col items-center">
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
      <p className="text-gray-800 dark:text-gray-300 text-sm mb-3">
        {wiki.extract}
      </p>
    </div>
  );
}
