import Image from "next/image";
import Link from "next/link";

const SIGNUP_URL = "https://staging.tezkaam.tech/register";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="fade-in">
          <p className="mb-4 inline-block rounded-full border border-[#ff7900]/30 bg-[#ff7900]/10 px-4 py-1.5 text-sm font-medium text-[#ff7900]">
            Team management for Pakistani SMEs
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Manage Your Team. Grow Your Business.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            TezKaam is a team management platform built for small and medium
            businesses in Pakistan. Organize your company, assign work, and keep
            your team aligned — all in one simple product.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={SIGNUP_URL}
              className="btn-orange inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold text-white"
            >
              Get Started Free
            </a>
            <Link
              href="#features"
              className="btn-outline inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold text-white"
            >
              Explore Features
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="orange-glow relative rounded-2xl p-2">
            <Image
              src="/TezKaamLogo.png"
              alt="TezKaam brand logo"
              width={480}
              height={160}
              className="h-auto w-full max-w-md rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
