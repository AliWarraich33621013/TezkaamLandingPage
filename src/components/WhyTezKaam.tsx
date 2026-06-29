import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Purpose-built for Pakistani SMEs",
  "Simple team and task management",
  "No complicated setup or training",
  "Secure workspace for your company",
  "Scales as your team grows",
  "Reliable product support",
];

export default function WhyTezKaam() {
  return (
    <section
      id="why-tezkaam"
      className="section-gradient px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Choose TezKaam
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              Pakistani SMEs need tools that are practical, affordable, and easy
              for real teams to adopt — not bloated software built for large
              corporations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              TezKaam is a product designed for business owners, managers, and
              teams who want a straightforward way to coordinate work and stay
              organized.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="glass-card flex items-start gap-3 rounded-xl p-4 transition-colors hover:border-[#ff7900]/30"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#ff7900]"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-gray-200">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
