import {
  Bell,
  MessageSquare,
  Headphones,
  Megaphone,
  ShieldAlert,
} from "lucide-react";

const emailTypes = [
  {
    icon: Bell,
    title: "Transactional Notifications",
    description: "Account confirmations, password resets, and login link emails.",
  },
  {
    icon: MessageSquare,
    title: "Team & Workspace Updates",
    description: "Notifications about tasks, assignments, and workspace activity.",
  },
  {
    icon: Headphones,
    title: "Support Responses",
    description: "Replies to your product support and account inquiries.",
  },
  {
    icon: Megaphone,
    title: "Product Updates",
    description: "Important announcements about platform changes and features.",
  },
  {
    icon: ShieldAlert,
    title: "Security or Account Alerts",
    description: "Notifications related to account security and access changes.",
  },
];

export default function EmailPolicy() {
  return (
    <section
      id="email-use"
      className="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How TezKaam Uses Email
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg">
            TezKaam uses email only for legitimate product and service-related
            communication. This may include account notifications, workspace
            updates, support responses, product announcements, system alerts, and
            important transactional messages. We do not send unsolicited emails,
            purchased-list campaigns, or spam.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {emailTypes.map((type) => (
            <article
              key={type.title}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-[#ff7900]/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#ff7900]/15 text-[#ff7900]">
                <type.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{type.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {type.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-gray-400">
          Recipients can contact us at{" "}
          <a
            href="mailto:notifications@tezkaam.tech"
            className="font-medium text-[#ff7900] transition-colors hover:text-[#ff9a40]"
          >
            notifications@tezkaam.tech
          </a>{" "}
          for questions, corrections, or email-related concerns.
        </p>
      </div>
    </section>
  );
}
