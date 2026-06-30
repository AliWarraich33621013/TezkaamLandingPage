import { buildManifestoHtml } from "@/lib/manifesto";

export default function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="wrap">
        <span className="eyebrow" data-fade>
          The problem
        </span>
        <p
          className="big"
          id="manifestoText"
          style={{ marginTop: 28 }}
          dangerouslySetInnerHTML={{ __html: buildManifestoHtml() }}
        />
      </div>
    </section>
  );
}
