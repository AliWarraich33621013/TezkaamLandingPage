import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from "@/components/landing/LegalNav";
import LegalFooter from "@/components/landing/LegalFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "tezkaam Privacy Policy — how we collect, use, and protect your information, including email communication practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalNav />
      <main id="main-content" className="legal-page">
        <article className="wrap mx-auto max-w-3xl">
          <h1>Privacy Policy</h1>
          <p className="legal-meta">Last updated: June 2026</p>

          <div className="mt-10 space-y-8">
            <section>
              <p>
                TezKaam respects user privacy. We collect only the information
                necessary to provide our team management product, respond to
                inquiries, manage workspace communication, and deliver
                service-related notifications. We do not sell personal
                information. Email addresses are used only for legitimate
                product communication, support, account notifications,
                workspace updates, and service-related messages.
              </p>
            </section>

            <section>
              <h2>What Data We Collect</h2>
              <p className="mt-4">
                We may collect the following types of information when you
                contact us or use the TezKaam product:
              </p>
              <ul>
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
              <h2>Why We Collect Data</h2>
              <p className="mt-4">
                We collect and use information for the following purposes:
              </p>
              <ul>
                <li>To respond to inquiries and contact form submissions</li>
                <li>To provide the TezKaam team management platform</li>
                <li>To manage workspaces, teams, and tasks</li>
                <li>
                  To send service-related notifications, updates, and
                  transactional messages
                </li>
                <li>To maintain security and account integrity</li>
              </ul>
            </section>

            <section>
              <h2>How We Use Email</h2>
              <p className="mt-4">
                TezKaam uses email exclusively for legitimate business and
                service-related communication. This includes account
                notifications, project updates, client support responses,
                service announcements, system alerts, and important transactional
                messages. We do not send unsolicited marketing emails,
                purchased-list campaigns, or spam.
              </p>
            </section>

            <section>
              <h2>Data Sharing and Sales</h2>
              <p className="mt-4">
                We do not sell, rent, or trade personal information to third
                parties. Information may be shared only when necessary to
                deliver agreed services, comply with legal obligations, or
                protect the rights and security of TezKaam and its clients.
              </p>
            </section>

            <section>
              <h2>How to Contact Us</h2>
              <p className="mt-4">
                If you have questions about this Privacy Policy, your data, or
                our email practices, please contact us at{" "}
                <a href="mailto:notifications@tezkaam.tech">
                  notifications@tezkaam.tech
                </a>
                . You may also visit{" "}
                <Link href="/#get">our contact section</Link>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <LegalFooter />
    </>
  );
}
