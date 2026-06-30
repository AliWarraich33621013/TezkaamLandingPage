import Image from "next/image";
import Link from "next/link";
import { AUTH_LOGIN, AUTH_REGISTER, LOGO_PATH } from "@/lib/constants";

export default function LegalNav() {
  return (
    <nav id="nav" style={{ position: "relative", top: 0, transform: "none", margin: "18px auto" }}>
      <Link href="/">
        <Image
          className="navlogo"
          src={LOGO_PATH}
          alt="tezkaam"
          width={120}
          height={24}
        />
      </Link>
      <div className="links">
        <Link href="/#manifesto">Why</Link>
        <Link href="/#features">Features</Link>
        <Link href="/#product">Product</Link>
        <Link href="/#who">Who it&apos;s for</Link>
        <a href={AUTH_LOGIN} className="nav-login">
          Log in
        </a>
        <a href={AUTH_REGISTER} className="nav-cta">
          Sign up
        </a>
      </div>
    </nav>
  );
}
