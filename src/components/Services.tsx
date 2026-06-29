import {
  Globe,
  Workflow,
  Cloud,
  Palette,
  LineChart,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built for performance and usability.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Smart workflows that reduce manual effort and improve operational efficiency.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud-based infrastructure and deployment support for growing platforms.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces designed around real users and business goals.",
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description:
      "Practical technology planning to help businesses launch and grow with confidence.",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description:
      "Ongoing technical support, updates, and improvements for reliable operations.",
  },
];

export default function Services() {
  return (
    <section
      id="what-we-do"
      className="section-gradient px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Digital Services Built for Growth
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Practical technology services designed to help businesses build,
            improve, and scale with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-[#ff7900]/30 hover:shadow-lg hover:shadow-[#ff7900]/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff7900]/15 text-[#ff7900] transition-colors group-hover:bg-[#ff7900]/25">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
