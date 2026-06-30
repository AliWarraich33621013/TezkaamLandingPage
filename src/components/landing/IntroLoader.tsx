import { LOGO_PATH } from "@/lib/constants";

export default function IntroLoader() {
  return (
    <div id="intro" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mark" id="introMark" src={LOGO_PATH} alt="" />
      <div className="bar" id="introBar" />
      <div className="count" id="introCount">
        000
      </div>
    </div>
  );
}
