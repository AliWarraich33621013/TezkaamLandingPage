import { Shield, Zap, TrendingUp, Target } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Secure",
    description: "Security-first development practices for reliable digital products.",
  },
  {
    icon: Zap,
    title: "Reliable",
    description: "Stable systems built for consistent performance and uptime.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "Architecture designed to grow with your business needs.",
  },
  {
    icon: Target,
    title: "Business-Focused",
    description: "Solutions aligned with real operational and commercial goals.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-[#111111] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff7900]/15 text-[#ff7900]">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
