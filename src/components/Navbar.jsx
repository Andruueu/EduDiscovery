import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(
    () => localStorage.theme === "dark" || false
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <nav className="bg-purple-300 dark:bg-purple-700 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-2xl font-extrabold">
          EduDiscovery 🚀
        </a>
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          <li>
            <a href="#terrestrial">🐾 Land animals</a>
          </li>
          <li>
            <a href="#marine">🐟 Marine animals</a>
          </li>
          <li>
            <a href="#universe">🌌 Galaxy</a>
          </li>
          <li>
            <a href="#anatomy">🧬 Human body</a>
          </li>
        </ul>
        <button
          onClick={() => setDark(!dark)}
          className="text-3xl"
          aria-label="Toggle dark mode"
        >
          {dark ? "🌞" : "🌜"}
        </button>
      </div>
    </nav>
  );
}
