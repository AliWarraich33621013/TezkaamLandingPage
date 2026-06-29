import { Eye, Compass } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    content:
      "To become a trusted digital solutions company known for building reliable, scalable, and impactful technology for businesses and communities.",
  },
  {
    icon: Compass,
    title: "Mission",
    content:
      "To empower businesses with practical, secure, and efficient digital solutions that simplify operations, improve communication, and support sustainable growth.",
  },
];

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vision & Mission
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our direction and purpose guide every project we deliver.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:border-[#ff7900]/30 lg:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff7900]/15 text-[#ff7900]">
                <card.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-300">
                {card.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
