import useWikiSummary from "./useWikiSummary";

export default function MarineAnimalCard({ name }) {
  const wiki = useWikiSummary(name);

  if (!wiki) return null;

  return (
    <div className="bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700 transition-all rounded-xl shadow-md p-4 text-center flex flex-col items-center">
      {wiki.thumbnail?.source && (
        <img
          src={wiki.thumbnail.source}
          alt={wiki.title}

          className="w-full h-52 object-contain rounded-lg mb-3"
         

        />
      )}
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-1">
        {wiki.title}
      </h3>
      <p className="text-gray-800 dark:text-gray-300 text-sm">{wiki.extract}</p>
    </div>
  );
}
