import { useEffect, useState } from "react";

export default function Navbar({ setActiveSection }) {
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

  const sections = [
    { id: "terrestrial", label: "🐾 Land animals" },
    { id: "marine", label: "🐟 Marine animals" },
    { id: "universe", label: "🌌 Galaxy" },
    { id: "anatomy", label: "🧬 Human body" },
  ];

  return (
    <nav className="bg-purple-300 dark:bg-purple-700 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <button
          onClick={() => setActiveSection(null)}
          className="text-2xl font-extrabold cursor-pointer bg-transparent border-0"
          aria-label="Go to home"
        >
          EduDiscovery 🚀
        </button>
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          {sections.map((sec) => (
            <li key={sec.id}>
              <button
                onClick={() => setActiveSection(sec.id)}
                className="hover:underline"
              >
                {sec.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDark(!dark)}
          className="text-3xl"
          aria-label="Toggle dark mode"
        >
          {dark ? "💡" : "💤"}
        </button>
      </div>
    </nav>
  );
}
