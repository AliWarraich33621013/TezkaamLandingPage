import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="fade-in">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Digital Solutions That Move Businesses Forward.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            TezKaam helps businesses design, build, and scale reliable digital
            products, web platforms, automation systems, and cloud-powered
            solutions.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#what-we-do"
              className="btn-orange inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold text-white"
            >
              Explore What We Do
            </Link>
            <Link
              href="#contact"
              className="btn-outline inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold text-white"
            >
              Contact Us
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
