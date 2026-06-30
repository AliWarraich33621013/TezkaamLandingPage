type MarqueeProps = {
  direction: 1 | -1;
  children: React.ReactNode;
};

export default function Marquee({ direction, children }: MarqueeProps) {
  return (
    <div className="marquee" data-marquee={String(direction)} aria-hidden="true">
      <div className="row">
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

export function MarqueeOne() {
  return (
    <Marquee direction={1}>
      tez <span className="star">✦</span>{" "}
      <span className="ghost">kaam</span> <span className="star">✦</span>{" "}
      <span className="o">tez</span> <span className="star">✦</span> kaam{" "}
      <span className="star">✦</span> <span className="ghost">tez</span>{" "}
      <span className="star">✦</span> kaam <span className="star">✦</span>
    </Marquee>
  );
}

export function MarqueeTwo() {
  return (
    <Marquee direction={-1}>
      <span className="ghost">fast work</span> <span className="star">✦</span>{" "}
      tez kaam <span className="star">✦</span>{" "}
      <span className="o">fast work</span> <span className="star">✦</span>{" "}
      <span className="ghost">tez kaam</span> <span className="star">✦</span>
    </Marquee>
  );
}
