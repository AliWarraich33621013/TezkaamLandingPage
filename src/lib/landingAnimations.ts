import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const CURSOR_LERP = 0.14;
const LENIS_LERP = 0.085;
const SPOTLIGHT_QUICKTO = 0.45;
const CARD_TILT_QUICKTO = 0.55;
const PRODUCT_ZOOM_SCRUB = 0.75;
const MARQUEE_DECAY = 1.0;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function isFinePointer(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches
  );
}

function ensureStatic(root: HTMLElement): void {
  root.querySelectorAll("#manifestoText w").forEach((w) => {
    const el = w as HTMLElement;
    el.style.color = el.classList.contains("o") ? "#FF6A00" : "#fff";
  });
  const intro = root.querySelector("#intro") as HTMLElement | null;
  if (intro) intro.style.display = "none";
  document.body.style.overflow = "";
}

function setupCustomCursor(root: HTMLElement, reduce: boolean): (() => void) | void {
  if (!isFinePointer() || reduce) {
    const c1 = root.querySelector("#cursor") as HTMLElement | null;
    const c2 = root.querySelector("#cursorDot") as HTMLElement | null;
    if (c1) c1.style.display = "none";
    if (c2) c2.style.display = "none";
    return;
  }

  const cur = root.querySelector("#cursor") as HTMLElement | null;
  const dot = root.querySelector("#cursorDot") as HTMLElement | null;
  if (!cur || !dot) return;

  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  let dx = cx;
  let dy = cy;
  let rafId = 0;

  const onMove = (e: MouseEvent) => {
    cx = e.clientX;
    cy = e.clientY;
    dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
  };

  const loop = () => {
    dx += (cx - dx) * CURSOR_LERP;
    dy += (cy - dy) * CURSOR_LERP;
    cur.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(loop);
  };

  document.addEventListener("mousemove", onMove);
  rafId = requestAnimationFrame(loop);

  const hoverEls = root.querySelectorAll("[data-cursor]");
  const enter = () => cur.classList.add("is-hover");
  const leave = () => cur.classList.remove("is-hover");
  hoverEls.forEach((el) => {
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
  });

  return () => {
    cancelAnimationFrame(rafId);
    document.removeEventListener("mousemove", onMove);
    hoverEls.forEach((el) => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    });
  };
}

function runIntro(root: HTMLElement, done: () => void): gsap.core.Timeline | void {
  const intro = root.querySelector("#intro") as HTMLElement | null;
  const reduce = prefersReducedMotion();

  if (reduce || !intro) {
    if (intro) intro.style.display = "none";
    document.body.style.overflow = "";
    done();
    return;
  }

  document.body.style.overflow = "hidden";
  const cnt = { v: 0 };
  const countEl = root.querySelector("#introCount");

  const tl = gsap.timeline({
    onComplete: () => {
      if (intro) intro.style.display = "none";
      document.body.style.overflow = "";
      done();
    },
  });

  tl.to("#introMark", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(
      "#introBar",
      { width: "100%", duration: 1.0, ease: "power2.inOut" },
      0,
    )
    .to(
      cnt,
      {
        v: 100,
        duration: 1.0,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countEl) {
            countEl.textContent = String(Math.round(cnt.v)).padStart(3, "0");
          }
        },
      },
      0,
    )
    .to("#introMark", { scale: 1.06, duration: 0.4, ease: "power2.in" })
    .to("#intro", { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "-=0.05");

  return tl;
}

function setupEmailCta(root: HTMLElement): void {
  const rb = root.querySelector("#reqBtn");
  if (!rb) return;

  rb.addEventListener("click", () => {
    const input = root.querySelector("#email") as HTMLInputElement | null;
    const v = (input?.value || "").trim();
    const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
    if (ok) {
      window.location.href = `mailto:falcon@tezads.com?subject=Early%20access%20to%20tezkaam&body=Please%20add%20me%20to%20early%20access.%20My%20email%3A%20${encodeURIComponent(v)}`;
      rb.textContent = "Opening mail…";
    } else if (input) {
      input.style.borderColor = "#FF6A00";
      input.focus();
      input.placeholder = "enter a valid email";
    }
  });
}

function setupAnchorLinks(
  root: HTMLElement,
  lenis: Lenis | null,
): void {
  root.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      const target = root.querySelector(id) ?? document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -10, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function buildAnimations(root: HTMLElement): () => void {
  gsap.registerPlugin(ScrollTrigger);
  const reduce = prefersReducedMotion();
  const fine = isFinePointer();

  let lenis: Lenis | null = null;
  let lenisRaf: ((time: number) => void) | null = null;
  const cleanups: (() => void)[] = [];

  if (reduce) {
    ensureStatic(root);
    setupAnchorLinks(root, null);
    return () => {};
  }

  lenis = new Lenis({
    lerp: LENIS_LERP,
    wheelMultiplier: 1,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);
  lenisRaf = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(lenisRaf);
  gsap.ticker.lagSmoothing(500, 33);

  cleanups.push(() => {
    if (lenisRaf) gsap.ticker.remove(lenisRaf);
    lenis?.destroy();
  });

  gsap.utils.toArray("[data-fade]", root).forEach((el) => {
    gsap.from(el as Element, {
      y: 34,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el as Element,
        start: "top 88%",
      },
    });
  });

  gsap.to("#heroH1", {
    y: -50,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#top",
      start: "30% top",
      end: "bottom top",
      scrub: true,
    },
  });

  const fill = root.querySelector("#railFill") as HTMLElement | null;
  const comet = root.querySelector("#railComet") as HTMLElement | null;
  if (fill && comet) {
    const setComet = gsap.quickSetter(comet, "y", "px");
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const h = window.innerHeight;
        fill.style.height = `${self.progress * 100}%`;
        setComet(self.progress * h - 32);
        const v = Math.min(Math.abs(self.getVelocity()) / 180, 1);
        comet.style.height = `${56 + v * 90}px`;
        fill.style.filter = `brightness(${1 + v * 0.6})`;
      },
    });
  }

  gsap.utils.toArray("[data-marquee]", root).forEach((m) => {
    const el = m as HTMLElement;
    const dir = parseFloat(el.getAttribute("data-marquee") || "1") || 1;
    const row = el.querySelector(".row");
    if (!row) return;

    const loop = gsap.to(row, {
      xPercent: -50,
      duration: 24,
      ease: "none",
      repeat: -1,
    });
    loop.timeScale(dir);

    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = self.getVelocity();
        loop.timeScale(dir * (1 + Math.min(Math.abs(v) / 300, 6)));
        gsap.to(loop, {
          timeScale: dir,
          duration: MARQUEE_DECAY,
          overwrite: true,
          ease: "power2.out",
        });
      },
    });
  });

  const words = gsap.utils.toArray("#manifestoText w", root);
  if (words.length) {
    gsap.to(words, {
      color: (_i: number, t: Element) =>
        (t as HTMLElement).classList.contains("o") ? "#FF6A00" : "#FFFFFF",
      stagger: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#manifesto",
        start: "top 60%",
        end: "bottom 75%",
        scrub: true,
      },
    });
  }

  const grid = root.querySelector("#featGrid");
  if (grid) {
    const cards = gsap.utils.toArray(".fcard", grid);
    gsap.set(grid, { transformPerspective: 1200 });
    gsap.from(cards, {
      opacity: 0,
      y: 60,
      rotateX: -22,
      transformOrigin: "50% 100%",
      duration: 0.9,
      ease: "power3.out",
      stagger: { each: 0.09, from: "start" },
      scrollTrigger: { trigger: grid, start: "top 80%" },
    });

    if (fine) {
      const wrap = root.querySelector("#featWrap") as HTMLElement | null;
      const spot = root.querySelector("#featSpot") as HTMLElement | null;
      if (wrap && spot) {
        gsap.set(spot, { xPercent: -50, yPercent: -50 });
        const sx = gsap.quickTo(spot, "x", {
          duration: SPOTLIGHT_QUICKTO,
          ease: "power3",
        });
        const sy = gsap.quickTo(spot, "y", {
          duration: SPOTLIGHT_QUICKTO,
          ease: "power3",
        });
        const onMove = (e: MouseEvent) => {
          const r = wrap.getBoundingClientRect();
          sx(e.clientX - r.left);
          sy(e.clientY - r.top);
        };
        wrap.addEventListener("mousemove", onMove);
        cleanups.push(() => wrap.removeEventListener("mousemove", onMove));
      }

      cards.forEach((card) => {
        const el = card as HTMLElement;
        const qrx = gsap.quickTo(el, "rotationX", {
          duration: CARD_TILT_QUICKTO,
          ease: "power3",
        });
        const qry = gsap.quickTo(el, "rotationY", {
          duration: CARD_TILT_QUICKTO,
          ease: "power3",
        });
        const qty = gsap.quickTo(el, "y", {
          duration: CARD_TILT_QUICKTO,
          ease: "power3",
        });
        const onCardMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          qry(px * 10);
          qrx(-py * 10);
          qty(-6);
        };
        const onCardLeave = () => {
          qrx(0);
          qry(0);
          qty(0);
        };
        el.addEventListener("mousemove", onCardMove);
        el.addEventListener("mouseleave", onCardLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onCardMove);
          el.removeEventListener("mouseleave", onCardLeave);
        });
      });
    }
  }

  const mm = gsap.matchMedia();
  mm.add("(min-width: 861px)", () => {
    gsap.fromTo(
      "#appframe",
      { scale: 0.3, y: 30, filter: "blur(3px)" },
      {
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: "#zoomStage",
          start: "top top",
          end: "+=65%",
          scrub: PRODUCT_ZOOM_SCRUB,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      },
    );
    gsap.from(".task", {
      y: 18,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: { trigger: "#zoomStage", start: "top 30%" },
    });
  });

  mm.add("(max-width: 860px)", () => {
    gsap.from("#appframe", {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: "#zoomStage", start: "top 80%" },
    });
  });

  cleanups.push(() => mm.revert());

  gsap.utils.toArray("[data-count]", root).forEach((el) => {
    const node = el as HTMLElement;
    const to = parseFloat(node.getAttribute("data-count") || "0");
    const o = { v: to > 0 ? 0 : 9 };
    ScrollTrigger.create({
      trigger: node,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(o, {
          v: to,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            node.textContent = String(Math.round(o.v));
          },
        });
      },
    });
  });

  const nav = root.querySelector("#nav") as HTMLElement | null;
  let lastY = 0;
  if (nav) {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const y = self.scroll();
        if (y > lastY && y > 300) nav.classList.add("hide");
        else nav.classList.remove("hide");
        lastY = y;
      },
    });
  }

  setupAnchorLinks(root, lenis);
  setupEmailCta(root);

  const onLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", onLoad);
  ScrollTrigger.refresh();
  cleanups.push(() => window.removeEventListener("load", onLoad));

  return () => {
    cleanups.forEach((fn) => fn());
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}

export function initLandingAnimations(root: HTMLElement): () => void {
  const reduce = prefersReducedMotion();
  const cursorCleanup = setupCustomCursor(root, reduce);

  let buildCleanup: (() => void) | null = null;

  runIntro(root, () => {
    buildCleanup = buildAnimations(root);
    ScrollTrigger.refresh();
  });

  return () => {
    cursorCleanup?.();
    buildCleanup?.();
    gsap.globalTimeline.clear();
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}
