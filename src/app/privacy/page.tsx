import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "TezKaam Privacy Policy — how we collect, use, and protect your information, including email communication practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: June 2026</p>

          <div className="prose-custom mt-10 space-y-8 text-gray-300">
            <section>
              <p className="text-base leading-relaxed">
                TezKaam respects user privacy. We collect only the information
                necessary to respond to inquiries, provide services, manage
                client communication, and deliver service-related notifications.
                We do not sell personal information. Email addresses are used
                only for legitimate business communication, support, account
                notifications, project updates, and service-related messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                What Data We Collect
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                We may collect the following types of information when you
                contact us or use our services:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed">
                <li>
                  Contact information such as your name, email address, and
                  company name
                </li>
                <li>
                  Information you provide in messages, inquiries, or project
                  discussions
                </li>
                <li>
                  Technical information related to service delivery, such as
                  account or project identifiers
                </li>
                <li>
                  Communication records necessary for support and project
                  management
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                Why We Collect Data
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                We collect and use information for the following purposes:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed">
                <li>To respond to inquiries and contact form submissions</li>
                <li>To provide digital services and client support</li>
                <li>To manage projects and communicate with clients</li>
                <li>
                  To send service-related notifications, updates, and
                  transactional messages
                </li>
                <li>To maintain security and account integrity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                How We Use Email
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                TezKaam uses email exclusively for legitimate business and
                service-related communication. This includes account
                notifications, project updates, client support responses, service
                announcements, system alerts, and important transactional
                messages. We do not send unsolicited marketing emails,
                purchased-list campaigns, or spam.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                Data Sharing and Sales
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                We do not sell, rent, or trade personal information to third
                parties. Information may be shared only when necessary to
                deliver agreed services, comply with legal obligations, or
                protect the rights and security of TezKaam and its clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                How to Contact Us
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                If you have questions about this Privacy Policy, your data, or
                our email practices, please contact us at{" "}
                <a
                  href="mailto:notifications@tezkaam.tech"
                  className="text-[#ff7900] hover:underline"
                >
                  notifications@tezkaam.tech
                </a>
                . You may also visit{" "}
                <Link href="/#contact" className="text-[#ff7900] hover:underline">
                  our contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
