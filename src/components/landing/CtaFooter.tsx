import Image from "next/image";
import Link from "next/link";
import { LOGO_PATH } from "@/lib/constants";

export default function CtaFooter() {
  return (
    <section className="cta" id="get">
      <div className="glow" />
      <div className="wrap inner">
        <h2 className="display">
          Start working at <span className="hl">tez</span> speed.
        </h2>
        <p>
          Early access is opening up. Leave your email and we&apos;ll bring your
          team in.
        </p>
        <div className="signup">
          <input
            id="email"
            type="email"
            inputMode="email"
            placeholder="you@yourteam.com"
            aria-label="Email address"
            data-cursor
          />
          <button type="button" className="btn btn-primary" id="reqBtn" data-cursor>
            Request access
          </button>
        </div>

        <footer>
          <div className="wrap frow" style={{ padding: 0 }}>
            <Link href="/">
              <Image
                className="flogo"
                src={LOGO_PATH}
                alt="tezkaam"
                width={130}
                height={26}
              />
            </Link>
            <div className="fnav">
              <a href="#features" data-cursor>
                Features
              </a>
              <a href="#product" data-cursor>
                Product
              </a>
              <a href="#who" data-cursor>
                Who it&apos;s for
              </a>
              <a href="#get" data-cursor>
                Get access
              </a>
              <Link href="/privacy" data-cursor>
                Privacy
              </Link>
              <Link href="/terms" data-cursor>
                Terms
              </Link>
            </div>
          </div>
          <div className="wrap" style={{ padding: 0 }}>
            <div className="fine">
              tez — fast · kaam — work · © 2026 tezkaam · built in Islamabad,
              made for teams everywhere.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
