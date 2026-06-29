import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Client-centric approach",
  "Transparent communication",
  "Secure and reliable development",
  "Scalable solutions",
  "Practical business focus",
  "Long-term support",
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
              We work with businesses that need dependable technology partners —
              teams who value clarity, quality, and long-term collaboration over
              quick fixes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              From startups to established organizations, TezKaam serves clients
              who want practical digital solutions built with professionalism
              and care.
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
