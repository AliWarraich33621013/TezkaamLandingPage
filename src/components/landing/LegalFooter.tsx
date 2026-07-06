import Image from "next/image";
import Link from "next/link";
import { LOGO_PATH, TEZADS_PRODUCT_URL } from "@/lib/constants";

export default function LegalFooter() {
  return (
    <footer style={{ marginTop: "8vh" }}>
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
          <Link href="/#features">Features</Link>
          <Link href="/#product">Product</Link>
          <Link href="/#who">Who it&apos;s for</Link>
          <Link href="/#get">Get access</Link>
          <a
            href={TEZADS_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Product of Tezads
          </a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="wrap" style={{ padding: 0 }}>
        <div className="fine">
          tez — fast · kaam — work · © 2026 tezkaam · built in Islamabad, made
          for teams everywhere.
        </div>
      </div>
    </footer>
  );
}
