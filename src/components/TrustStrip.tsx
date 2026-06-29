import { Shield, Zap, Building2, MapPin } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Secure",
    description: "Your company data and team accounts are protected with secure access controls.",
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "A clean interface designed so teams can get started quickly without training.",
  },
  {
    icon: Building2,
    title: "Built for SMEs",
    description: "Practical tools sized for small and medium businesses, not enterprise complexity.",
  },
  {
    icon: MapPin,
    title: "Made for Pakistan",
    description: "Built with the needs of Pakistani businesses and teams in mind.",
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
