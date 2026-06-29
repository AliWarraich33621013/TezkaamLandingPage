"use client";

import { useState, FormEvent } from "react";
import { Mail, Globe, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="section-gradient px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact TezKaam
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have a question about TezKaam? Reach out and our team will get back
            to you.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8"
              noValidate
            >
              {submitted ? (
                <div
                  className="rounded-lg border border-[#ff7900]/30 bg-[#ff7900]/10 p-6 text-center"
                  role="status"
                >
                  <p className="text-lg font-semibold text-white">
                    Thank you for your message.
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    We have received your inquiry and will respond as soon as
                    possible. For immediate assistance, email{" "}
                    <a
                      href="mailto:notifications@tezkaam.tech"
                      className="text-[#ff7900] hover:underline"
                    >
                      notifications@tezkaam.tech
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-[#ff7900]/50 focus:ring-1 focus:ring-[#ff7900]/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-[#ff7900]/50 focus:ring-1 focus:ring-[#ff7900]/50"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-[#ff7900]/50 focus:ring-1 focus:ring-[#ff7900]/50"
                      placeholder="Your company"
                    />
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-[#ff7900]/50 focus:ring-1 focus:ring-[#ff7900]/50"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-orange mt-6 w-full rounded-lg px-8 py-3.5 text-base font-semibold text-white sm:w-auto"
                  >
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>

          <aside className="flex flex-col gap-6 lg:col-span-2">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff7900]/15 text-[#ff7900]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a
                    href="mailto:notifications@tezkaam.tech"
                    className="mt-1 block text-sm text-[#ff7900] transition-colors hover:text-[#ff9a40]"
                  >
                    notifications@tezkaam.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff7900]/15 text-[#ff7900]">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Website</h3>
                  <a
                    href="https://tezkaam.tech"
                    className="mt-1 block text-sm text-[#ff7900] transition-colors hover:text-[#ff9a40]"
                  >
                    tezkaam.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff7900]/15 text-[#ff7900]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Availability</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Worldwide / Remote-first
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
