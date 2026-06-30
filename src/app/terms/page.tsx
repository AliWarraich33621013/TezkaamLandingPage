import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from "@/components/landing/LegalNav";
import LegalFooter from "@/components/landing/LegalFooter";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "tezkaam Terms of Service — terms and conditions for using our team management product and website.",
};

export default function TermsPage() {
  return (
    <>
      <LegalNav />
      <main id="main-content" className="legal-page">
        <article className="wrap mx-auto max-w-3xl">
          <h1>Terms of Service</h1>
          <p className="legal-meta">Last updated: June 2026</p>

          <div className="mt-10 space-y-8">
            <section>
              <p>
                By using the TezKaam product or contacting us through this
                website, users agree to communicate honestly, provide accurate
                information, and use our platform for lawful business purposes.
                TezKaam provides team management software and product support
                according to applicable terms.
              </p>
            </section>

            <section>
              <h2>Our Product</h2>
              <p className="mt-4">
                TezKaam is a team management platform for small and medium
                businesses. The product includes company workspaces, team member
                management, task assignment and tracking, role-based access, and
                related features. Use of the platform is subject to these terms
                and any applicable account agreements.
              </p>
            </section>

            <section>
              <h2>User Responsibilities</h2>
              <p className="mt-4">Users agree to:</p>
              <ul>
                <li>
                  Provide accurate and complete information when contacting us
                </li>
                <li>
                  Use our services and communications for lawful purposes only
                </li>
                <li>
                  Respect intellectual property and confidentiality obligations
                </li>
                <li>Cooperate in good faith during project engagements</li>
              </ul>
            </section>

            <section>
              <h2>Communication and Email</h2>
              <p className="mt-4">
                TezKaam uses email for legitimate business communication
                including account notifications, project updates, support
                responses, and service-related messages. We do not send
                unsolicited marketing emails or spam. By engaging with our
                services, you consent to receive communications necessary for
                service delivery.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p className="mt-4">
                TezKaam provides services on an as-agreed basis. To the extent
                permitted by law, TezKaam is not liable for indirect,
                incidental, or consequential damages arising from use of this
                website or our services beyond what is specified in applicable
                project agreements.
              </p>
            </section>

            <section>
              <h2>Changes to These Terms</h2>
              <p className="mt-4">
                We may update these Terms of Service from time to time. Continued
                use of our website or services after changes are posted
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p className="mt-4">
                For questions about these Terms of Service, contact us at{" "}
                <a href="mailto:notifications@tezkaam.tech">
                  notifications@tezkaam.tech
                </a>{" "}
                or visit <Link href="/#get">our contact section</Link>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <LegalFooter />
    </>
  );
}
