export default function LandingCard({ id, title, emoji, imgSrc, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl shadow-lg w-full sm:w-64 h-40 sm:h-48 bg-blue-100 dark:bg-blue-900 transition-transform transform hover:scale-105 cursor-pointer"
    >
      <img
        src={imgSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
      />
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70 flex flex-col items-center justify-center">
        <span className="text-4xl sm:text-5xl">{emoji}</span>
        <h3 className="text-xl sm:text-2xl font-bold mt-2">{title}</h3>
      </div>
    </div>
  );
}
