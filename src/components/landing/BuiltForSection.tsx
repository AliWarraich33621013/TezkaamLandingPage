export default function BuiltForSection() {
  return (
    <section className="builtfor" id="who">
      <div className="wrap">
        <span className="eyebrow" data-fade>
          Built for
        </span>
        <h2 className="display" data-fade style={{ marginTop: 18 }}>
          Made for teams that move fast.
        </h2>
        <div className="bgrid">
          <div className="bcard" data-fade data-cursor>
            <div className="k">01</div>
            <h3>Agencies</h3>
            <p>
              Client work, deadlines and handoffs — kept tidy across every
              account.
            </p>
          </div>
          <div className="bcard" data-fade data-cursor>
            <div className="k">02</div>
            <h3>Small businesses</h3>
            <p>
              The whole team&apos;s work in one place, without enterprise bloat
              or cost.
            </p>
          </div>
          <div className="bcard" data-fade data-cursor>
            <div className="k">03</div>
            <h3>Content &amp; creative</h3>
            <p>
              From brief to posted — scripts, posters and reels, tracked end to
              end.
            </p>
          </div>
          <div className="bcard" data-fade data-cursor>
            <div className="k">04</div>
            <h3>Remote teams</h3>
            <p>
              Shared workspace, clear roles, live status. Everyone sees the same
              picture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
