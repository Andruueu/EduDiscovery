import Navbar from "./Navbar";
import LandingCard from "./LandingCard";
import TimeDisplay from "./TimeDisplay";
import anatomyImage from "../assets/nhia-moua-F4cJtI7HCMw-unsplash.jpg";

export default function Home() {
  const cards = [
    {
      id: "terrestrial",
      title: "Land animals",
      emoji: "🐾",
      img: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "marine",
      title: "Marine animals",
      emoji: "🐟",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "universe",
      title: "Galaxy",
      emoji: "🌌",
      img: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "anatomy",
      title: "Human body",
      emoji: "🧬",
      img: anatomyImage,
    },
  ];

  return (
    <>
      <Navbar />

      <header className="bg-blue-100 dark:bg-blue-900 py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
          Welcome to EduDiscovery! 🌟
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto">
          Choose your category and let's explore!
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-10 px-4">
          {cards.map((c) => (
            <LandingCard
              key={c.id}
              id={c.id}
              title={c.title}
              emoji={c.emoji}
              imgSrc={c.img}
            />
          ))}
        </div>

        <TimeDisplay />
      </header>
    </>
  );
}
