import {
  Building2,
  Users,
  ListTodo,
  Shield,
  LayoutDashboard,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Company Workspaces",
    description:
      "Register your organization and manage your entire team from one dedicated workspace.",
  },
  {
    icon: Users,
    title: "Team Member Management",
    description:
      "Invite colleagues, organize your team structure, and keep everyone connected.",
  },
  {
    icon: ListTodo,
    title: "Task Assignment & Tracking",
    description:
      "Assign work, set priorities, and track progress so nothing falls through the cracks.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Control permissions so the right people have access to the right information.",
  },
  {
    icon: LayoutDashboard,
    title: "Team Activity Overview",
    description:
      "Get a clear picture of what your team is working on and how projects are moving.",
  },
  {
    icon: Bell,
    title: "Secure Account Notifications",
    description:
      "Receive important updates about your workspace, tasks, and account activity.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-gradient px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Product Features Built for SMEs
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything your growing Pakistani business needs to coordinate
            people, tasks, and daily operations — without complexity.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-[#ff7900]/30 hover:shadow-lg hover:shadow-[#ff7900]/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff7900]/15 text-[#ff7900] transition-colors group-hover:bg-[#ff7900]/25">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
