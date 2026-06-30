"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initLandingAnimations } from "@/lib/landingAnimations";
import CustomCursor from "./CustomCursor";
import VelocityRail from "./VelocityRail";
import IntroLoader from "./IntroLoader";
import LandingNav from "./LandingNav";
import LandingHero from "./LandingHero";
import { MarqueeOne, MarqueeTwo } from "./Marquee";
import Manifesto from "./Manifesto";
import FeatureGrid from "./FeatureGrid";
import ProductZoom from "./ProductZoom";
import MetricsSection from "./MetricsSection";
import BuiltForSection from "./BuiltForSection";
import CtaFooter from "./CtaFooter";

gsap.registerPlugin(ScrollTrigger);

export default function LandingShell() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanup = initLandingAnimations(root);
    return cleanup;
  }, []);

  return (
    <div ref={rootRef}>
      <CustomCursor />
      <VelocityRail />
      <IntroLoader />
      <LandingNav />
      <main id="main-content">
        <LandingHero />
        <MarqueeOne />
        <Manifesto />
        <FeatureGrid />
        <ProductZoom />
        <MetricsSection />
        <BuiltForSection />
        <MarqueeTwo />
        <CtaFooter />
      </main>
    </div>
  );
}
