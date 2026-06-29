"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LOGIN_URL = "https://staging.tezkaam.tech/login";
const SIGNUP_URL = "https://staging.tezkaam.tech/register";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "Vision & Mission", href: "/#vision-mission" },
  { label: "Why TezKaam", href: "/#why-tezkaam" },
  { label: "Email Use", href: "/#email-use" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="TezKaam home">
          <Image
            src="/TezKaamLogo.png"
            alt="TezKaam logo"
            width={440}
            height={126}
            className="h-20 w-auto sm:h-24 lg:h-28"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition-colors hover:text-[#ff7900]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={LOGIN_URL}
            className="btn-outline inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
          >
            Login
          </a>
          <a
            href={SIGNUP_URL}
            className="btn-orange inline-flex rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
          >
            Sign Up
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-[#0a0a0a]/95 px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-[#ff7900]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={LOGIN_URL}
              className="btn-outline mt-2 inline-flex justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </a>
            <a
              href={SIGNUP_URL}
              className="btn-orange mt-2 inline-flex justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
