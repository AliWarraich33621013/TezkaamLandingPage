import Image from "next/image";
import Link from "next/link";

const LOGIN_URL = "https://staging.tezkaam.tech/login";
const SIGNUP_URL = "https://staging.tezkaam.tech/register";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "Vision & Mission", href: "/#vision-mission" },
  { label: "Why TezKaam", href: "/#why-tezkaam" },
  { label: "Email Use", href: "/#email-use" },
  { label: "Contact", href: "/#contact" },
];

const featureLinks = [
  "Company Workspaces",
  "Team Management",
  "Task Tracking",
  "Role-Based Access",
  "Activity Overview",
  "Account Notifications",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" aria-label="TezKaam home">
              <Image
                src="/TezKaamLogo.png"
                alt="TezKaam logo"
                width={140}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              TezKaam is a team management product built for small and medium
              businesses in Pakistan. Organize your company, manage your team,
              and track work in one place.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#ff7900]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Features
            </h3>
            <ul className="mt-4 space-y-2">
              {featureLinks.map((feature) => (
                <li key={feature}>
                  <Link
                    href="/#features"
                    className="text-sm text-gray-400 transition-colors hover:text-[#ff7900]"
                  >
                    {feature}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:notifications@tezkaam.tech"
                  className="text-sm text-[#ff7900] transition-colors hover:text-[#ff9a40]"
                >
                  notifications@tezkaam.tech
                </a>
              </li>
              <li>
                <a
                  href="https://tezkaam.tech"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff7900]"
                >
                  tezkaam.tech
                </a>
              </li>
              <li>
                <a
                  href={LOGIN_URL}
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff7900]"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href={SIGNUP_URL}
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff7900]"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff7900]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff7900]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm leading-relaxed text-gray-400">
            We do not send unsolicited marketing emails. Email communication is
            only used for legitimate business, support, and service-related
            purposes.
          </p>
          <p className="mt-4 text-center text-sm text-gray-500">
            &copy; 2026 TezKaam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
