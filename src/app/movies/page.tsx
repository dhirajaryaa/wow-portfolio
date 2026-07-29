import { Film } from "lucide-react";
import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";

const movies = [
  {
    title: "Interstellar",
    year: 2014,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    title: "The Social Network",
    year: 2010,
    description:
      "The story of the founding of Facebook and the legal battles that followed.",
  },
  {
    title: "LifeHack",
    year: 2025,
    description:
      "Four teenagers attempt a multi-million-dollar Bitcoin heist from their bedrooms, only to spiral into the darkest corners of the internet.",
  },
];

export default function MoviesPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <Heading
        hint="recommendations 🎬"
        title="Movies"
        description="Films that left an impression on me."
      />

      <div className="flex flex-col gap-3">
        {movies.map((movie, idx) => (
          <Card
            key={idx}
            icon={Film}
            title={movie.title}
            subtitle={String(movie.year)}
            description={movie.description}
          />
        ))}
      </div>
    </main>
  );
}
