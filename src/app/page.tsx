import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import VisionMission from "@/components/VisionMission";
import WhyTezKaam from "@/components/WhyTezKaam";
import EmailPolicy from "@/components/EmailPolicy";
import ContactCTA from "@/components/ContactCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Features />
        <VisionMission />
        <WhyTezKaam />
        <EmailPolicy />
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
