import { AUTH_LOGIN, AUTH_REGISTER } from "@/lib/constants";

export default function ProductZoom() {
  return (
    <section className="zoom" id="product">
      <div className="wrap zoom-head">
        <span className="eyebrow" data-fade>
          The product
        </span>
        <h2 className="display" data-fade>
          One chip becomes the whole picture.
        </h2>
      </div>
      <div className="zoom-stage" id="zoomStage">
        <div className="appframe" id="appframe">
          <div className="top">
            <i />
            <i />
            <i />
            <span className="url">
              app.tezkaam.com / falcon-content / board
            </span>
          </div>
          <div className="board">
            <div className="col">
              <h4>
                To do <b>3</b>
              </h4>
              <div className="task">
                <div className="t">Umrah poster — final pass</div>
                <div className="meta">
                  <span className="pill high">High</span>
                  <span className="pill who">Safiya</span>
                </div>
              </div>
              <div className="task">
                <div className="t">Reel script · fitness Q3</div>
                <div className="meta">
                  <span className="pill low">Low</span>
                  <span className="pill who">Arousha</span>
                </div>
              </div>
              <div className="task">
                <div className="t">Client deck outline</div>
                <div className="meta">
                  <span className="pill low">Med</span>
                  <span className="pill who">Safiya</span>
                </div>
              </div>
            </div>
            <div className="col">
              <h4>
                Doing <b>2</b>
              </h4>
              <div className="task">
                <div className="t">Carousel · travel offers</div>
                <div className="meta">
                  <span className="pill high">High</span>
                  <span className="pill who">Arousha</span>
                </div>
              </div>
              <div className="task">
                <div className="t">Caption pack · 12 posts</div>
                <div className="meta">
                  <span className="pill low">Med</span>
                  <span className="pill who">Safiya</span>
                </div>
              </div>
            </div>
            <div className="col">
              <h4>
                Done <b>4</b>
              </h4>
              <div className="task">
                <div className="t">Brand colours locked</div>
                <div className="meta">
                  <span className="pill who">Majeed</span>
                </div>
              </div>
              <div className="task">
                <div className="t">Logo handoff</div>
                <div className="meta">
                  <span className="pill who">Safiya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap live" id="live">
        <span className="badge" data-fade>
          <span className="dot" />
          LIVE NOW · app.tezkaam.com
        </span>
        <h3 className="display" data-fade>
          Your workspace is ready.
        </h3>
        <p data-fade>
          The whole picture, the moment you sign in. Bring your team and start
          moving today.
        </p>
        <div className="auth" data-fade>
          <a
            href={AUTH_REGISTER}
            className="btn btn-primary"
            id="signupBtn"
            data-cursor
          >
            Sign up free
          </a>
          <a
            href={AUTH_LOGIN}
            className="btn btn-ghost"
            id="loginBtn"
            data-cursor
          >
            Log in
          </a>
        </div>
      </div>
    </section>
  );
}
