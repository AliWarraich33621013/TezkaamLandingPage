import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Vision & Mission", href: "/#vision-mission" },
  { label: "Why TezKaam", href: "/#why-tezkaam" },
  { label: "Email Use", href: "/#email-use" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  "Web Development",
  "Business Automation",
  "Cloud Solutions",
  "UI/UX Design",
  "Digital Strategy",
  "Support & Maintenance",
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
              TezKaam is a digital solutions company helping businesses design,
              build, and scale reliable technology products and platforms.
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
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/#what-we-do"
                    className="text-sm text-gray-400 transition-colors hover:text-[#ff7900]"
                  >
                    {service}
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
