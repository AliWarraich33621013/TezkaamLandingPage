export default function LandingHero() {
  return (
    <header className="hero" id="top">
      <div className="glow" />
      <div className="grain" />
      <div className="wrap inner">
        <span className="eyebrow" data-fade>
          One workspace · projects · tasks · team
        </span>
        <div className="gloss" data-fade>
          <span>
            <b>tez</b> <span className="o">/tez/</span> &nbsp;— fast.
          </span>
          <span>
            <b>kaam</b> <span className="o">/kɑːm/</span> &nbsp;— work.
          </span>
        </div>
        <h1 className="display" id="heroH1">
          The workspace that <span className="hl">keeps up</span> with your
          team.
        </h1>
        <p className="sub" data-fade>
          Projects, tasks, calendar, reports, team and notes — pulled into one
          fast, uncluttered place. No tab-juggling. No work lost in the gaps
          between apps.
        </p>
        <div className="cta-row" data-fade>
          <a href="#get" className="btn btn-primary" data-cursor>
            Get early access
          </a>
          <a href="#manifesto" className="btn btn-ghost" data-cursor>
            Watch it move ↓
          </a>
        </div>
      </div>
      <div className="scrollcue" aria-hidden="true">
        <span>scroll</span>
        <div className="dotline" />
      </div>
    </header>
  );
}
