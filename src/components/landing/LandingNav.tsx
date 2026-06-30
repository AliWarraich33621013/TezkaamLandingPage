import Link from "next/link";
import { AUTH_LOGIN, AUTH_REGISTER, LOGO_PATH } from "@/lib/constants";

export default function LandingNav() {
  return (
    <nav id="nav" data-cursor>
      <Link href="/" className="navlogo-link">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="navlogo" src={LOGO_PATH} alt="tezkaam" />
      </Link>
      <div className="links">
        <a href="#manifesto" data-cursor>
          Why
        </a>
        <a href="#features" data-cursor>
          Features
        </a>
        <a href="#product" data-cursor>
          Product
        </a>
        <a href="#who" data-cursor>
          Who it&apos;s for
        </a>
        <a href={AUTH_LOGIN} className="nav-login" data-cursor>
          Log in
        </a>
        <a href={AUTH_REGISTER} className="nav-cta" data-cursor>
          Sign up
        </a>
      </div>
    </nav>
  );
}
