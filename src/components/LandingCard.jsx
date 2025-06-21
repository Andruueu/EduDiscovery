export default function LandingCard({ id, title, emoji, imgSrc, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer
                 w-72 h-52 sm:w-80 sm:h-56 md:w-96 md:h-64
                 bg-blue-100 dark:bg-blue-900 transition-transform transform hover:scale-105"
    >
      <img
        src={imgSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
      />
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70 flex flex-col items-center justify-center p-4">
        <span className="text-6xl sm:text-7xl">{emoji}</span>
        <h3 className="text-2xl sm:text-3xl font-bold mt-3">{title}</h3>
      </div>
    </div>
  );
}
