export default function FeatureGrid() {
  return (
    <section className="features" id="features">
      <div className="feat-head">
        <span className="eyebrow" data-fade>
          Everything, in one place
        </span>
        <h2 className="display" data-fade>
          Six tools that usually live in six tabs.
        </h2>
        <p data-fade>
          Create a task once and it shows up on the board, the calendar and the
          report — instantly. One workspace, always in sync.
        </p>
      </div>
      <div className="feat-grid-wrap" id="featWrap">
        <div className="spot" id="featSpot" />
        <div className="feat-grid" id="featGrid">
          <article className="fcard" data-cursor>
            <div className="top">
              <span className="num">01</span>
              <span className="ico">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="6" rx="1.5" />
                  <rect x="3" y="14" width="11" height="6" rx="1.5" />
                </svg>
              </span>
            </div>
            <h3>Projects</h3>
            <p>
              Spin up a project, drop in tasks, and watch progress fill in —
              percent complete, at a glance.
            </p>
            <div className="minui">
              <div className="bar o" style={{ width: "62%" }} />
              <div className="bar" style={{ width: "88%" }} />
              <div className="feat-prog">FALCON CONTENT · 62%</div>
            </div>
          </article>

          <article className="fcard" data-cursor>
            <div className="top">
              <span className="num">02</span>
              <span className="ico">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="5" height="18" rx="1.2" />
                  <rect x="10" y="3" width="5" height="12" rx="1.2" />
                  <rect x="17" y="3" width="4" height="8" rx="1.2" />
                </svg>
              </span>
            </div>
            <h3>Board &amp; tasks</h3>
            <p>
              Drag tasks from To&nbsp;do to Doing to Done. Set priority, owner
              and due date in seconds.
            </p>
            <div className="minui">
              <div className="chips">
                <span className="chip o">High</span>
                <span className="chip">Safiya</span>
                <span className="chip">Jun 30</span>
              </div>
            </div>
          </article>

          <article className="fcard" data-cursor>
            <div className="top">
              <span className="num">03</span>
              <span className="ico">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M3 9h18M8 2v4M16 2v4" />
                </svg>
              </span>
            </div>
            <h3>Calendar</h3>
            <p>
              Every due date plotted on a clean month view. Spot the crunch
              early, never get blindsided.
            </p>
            <div className="minui">
              <div className="chips">
                <span className="chip">Mon</span>
                <span className="chip o">30 · Umrah Poster</span>
              </div>
            </div>
          </article>

          <article className="fcard" data-cursor>
            <div className="top">
              <span className="num">04</span>
              <span className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M4 20V10M10 20V4M16 20v-7M21 20H3" />
                </svg>
              </span>
            </div>
            <h3>Reports</h3>
            <p>
              Open, done, overdue, due today — and who&apos;s carrying the load.
              Live, with zero spreadsheets.
            </p>
            <div className="minui">
              <div className="bar o" style={{ width: "74%" }} />
              <div className="feat-prog">
                WORKLOAD · SAFIYA 4 · AROUSHA 2
              </div>
            </div>
          </article>

          <article className="fcard" data-cursor>
            <div className="top">
              <span className="num">05</span>
              <span className="ico">
                <svg viewBox="0 0 24 24">
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0-2-5.2M21 20a6 6 0 0 0-5-5.9" />
                </svg>
              </span>
            </div>
            <h3>Team &amp; roles</h3>
            <p>
              Invite people, set roles, control access. Owners and managers —
              resend, reset, deactivate.
            </p>
            <div className="minui">
              <div className="chips">
                <span className="chip who">Owner</span>
                <span className="chip">Manager</span>
                <span className="chip">Manager</span>
              </div>
            </div>
          </article>

          <article className="fcard" data-cursor>
            <div className="top">
              <span className="num">06</span>
              <span className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M5 3h9l5 5v13H5z" />
                  <path d="M14 3v5h5M8 13h8M8 17h6" />
                </svg>
              </span>
            </div>
            <h3>Notes</h3>
            <p>
              Quick workspace notes that live beside the work — briefs,
              decisions, the half-thought you&apos;ll need Tuesday.
            </p>
            <div className="minui">
              <div className="bar" style={{ width: "90%" }} />
              <div className="bar" style={{ width: "70%" }} />
              <div className="bar" style={{ width: "50%" }} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
