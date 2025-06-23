export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-yellow-200 to-green-300 dark:from-purple-900 dark:via-indigo-800 dark:to-blue-900 text-center text-sm py-6 mt-16 shadow-inner">
      <div className="max-w-4xl mx-auto px-4 text-gray-800 dark:text-white font-medium leading-relaxed">
        <div className="overflow-hidden whitespace-nowrap">
          <p
            className="inline-block animate-scroll"
            style={{ paddingRight: "100%" }}
          >
            📚 Resources & APIs used: Wikipedia REST • WorldTimeAPI • Freesound
            • NASA Images • GBIF and more.
          </p>
        </div>
        <p className="mt-4">
          🌟 <span className="font-bold">EduDiscovery</span> — a free
          educational project &copy; 2025. All rights reserved. 🎓🧒👧
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}
