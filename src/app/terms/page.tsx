import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "TezKaam Terms of Service — terms and conditions for using our team management product and website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: June 2026</p>

          <div className="prose-custom mt-10 space-y-8 text-gray-300">
            <section>
              <p className="text-base leading-relaxed">
                By using the TezKaam product or contacting us through this
                website, users agree to communicate honestly, provide accurate
                information, and use our platform for lawful business purposes.
                TezKaam provides team management software and product support
                according to applicable terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">Our Product</h2>
              <p className="mt-4 text-base leading-relaxed">
                TezKaam is a team management platform for small and medium
                businesses. The product includes company workspaces, team member
                management, task assignment and tracking, role-based access, and
                related features. Use of the platform is subject to these terms
                and any applicable account agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                User Responsibilities
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                Users agree to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed">
                <li>Provide accurate and complete information when contacting us</li>
                <li>Use our services and communications for lawful purposes only</li>
                <li>Respect intellectual property and confidentiality obligations</li>
                <li>Cooperate in good faith during project engagements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                Communication and Email
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                TezKaam uses email for legitimate business communication
                including account notifications, project updates, support
                responses, and service-related messages. We do not send
                unsolicited marketing emails or spam. By engaging with our
                services, you consent to receive communications necessary for
                service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                Limitation of Liability
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                TezKaam provides services on an as-agreed basis. To the extent
                permitted by law, TezKaam is not liable for indirect,
                incidental, or consequential damages arising from use of this
                website or our services beyond what is specified in applicable
                project agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                Changes to These Terms
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                We may update these Terms of Service from time to time. Continued
                use of our website or services after changes are posted
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">Contact</h2>
              <p className="mt-4 text-base leading-relaxed">
                For questions about these Terms of Service, contact us at{" "}
                <a
                  href="mailto:notifications@tezkaam.tech"
                  className="text-[#ff7900] hover:underline"
                >
                  notifications@tezkaam.tech
                </a>{" "}
                or visit{" "}
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
