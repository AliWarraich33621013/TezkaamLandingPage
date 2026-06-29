import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
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
        <Services />
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
