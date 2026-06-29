const SIGNUP_URL = "https://staging.tezkaam.tech/register";

export default function ContactCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-gradient-to-r from-[#ff7900] to-[#e56d00] px-8 py-14 text-center shadow-lg shadow-[#ff7900]/20 sm:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to manage your team better?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Create your company workspace on TezKaam and start organizing your
            team in minutes.
          </p>
          <a
            href={SIGNUP_URL}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-black px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-black/80 hover:shadow-lg"
          >
            Create Your Company
          </a>
        </div>
      </div>
    </section>
  );
}
