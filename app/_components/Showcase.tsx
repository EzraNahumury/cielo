"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pieces = [
  {
    index: "01",
    name: "Aurora",
    code: "CA · 7F2A · 0419",
    sport: "Basketball",
    palette: ["#00D1FF", "#5BB6FF", "#102A43"],
    bg: "from-[#0a2540] to-[#061826]",
  },
  {
    index: "02",
    name: "Nocturne",
    code: "CA · 3B19 · 0318",
    sport: "Football",
    palette: ["#5BB6FF", "#1F2933", "#F5FAFF"],
    bg: "from-[#10243a] to-[#05101c]",
  },
  {
    index: "03",
    name: "Cirrus",
    code: "CA · A04C · 0227",
    sport: "Esports",
    palette: ["#F5FAFF", "#00D1FF", "#081827"],
    bg: "from-[#0e2b44] to-[#061525]",
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current!;
        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative overflow-hidden bg-[color:var(--caleo-ink)] py-20 md:h-[100svh] md:py-0"
    >
      <div className="absolute left-8 top-10 z-20 md:left-12 md:top-14">
        <span className="text-[11px] tracking-[0.35em] text-white/40">
          05 / SHOWCASE
        </span>
      </div>

      <div className="relative flex h-full w-full items-center">
        <div
          ref={trackRef}
          className="flex w-full flex-col gap-10 px-8 md:w-auto md:flex-row md:items-center md:gap-0 md:px-0"
        >
          <div className="shrink-0 md:flex md:h-screen md:w-[60vw] md:flex-col md:justify-center md:pl-[8vw] md:pr-[8vw]">
            <h2 className="font-[family-name:var(--font-display)] text-[44px] font-[500] leading-[1] tracking-[-0.025em] text-white md:text-[88px]">
              Identities
              <br />
              already{" "}
              <span className="font-serif-italic text-white/90">sealed.</span>
            </h2>
            <p className="mt-10 max-w-sm text-[15px] leading-relaxed text-white/55">
              Each design below lives in the CALEO ALMA vault. Once sealed, it
              is never offered to another team.
            </p>
          </div>

          {pieces.map((p) => (
            <article
              key={p.name}
              className="group shrink-0 md:h-screen md:w-[44vw] md:px-6 md:py-20"
            >
              <div
                className={`relative flex h-full min-h-[500px] flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-gradient-to-b ${p.bg} p-8 transition-[border-color] duration-500 group-hover:border-white/25`}
              >
                <div className="flex items-baseline justify-between text-[11px] tracking-[0.3em] text-white/50">
                  <span className="font-[family-name:var(--font-display)] text-white/35">
                    {p.index}
                  </span>
                  <span>{p.sport.toUpperCase()}</span>
                </div>

                <div className="relative flex flex-1 items-center justify-center py-10">
                  <svg
                    viewBox="0 0 200 220"
                    className="h-[min(42vh,340px)] w-auto transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  >
                    <defs>
                      <linearGradient
                        id={`sc-${p.index}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor={p.palette[0]} />
                        <stop offset="100%" stopColor={p.palette[1]} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M60 20 L100 35 L140 20 L180 40 L170 90 L150 85 L150 200 L50 200 L50 85 L30 90 L20 40 Z"
                      fill={`url(#sc-${p.index})`}
                      opacity="0.95"
                    />
                    <path
                      d="M60 20 L100 35 L140 20"
                      stroke={p.palette[2]}
                      strokeWidth="3"
                      fill="none"
                    />
                    <text
                      x="100"
                      y="140"
                      textAnchor="middle"
                      fill={p.palette[2]}
                      fontSize="42"
                      fontWeight="500"
                      fontFamily="var(--font-display)"
                      letterSpacing="-1"
                    >
                      {p.index}
                    </text>
                  </svg>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-3xl font-[500] tracking-[-0.02em] text-white">
                      {p.name}
                    </div>
                    <div className="mt-2 text-[11px] tracking-[0.3em] text-white/45">
                      {p.code}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {p.palette.map((c) => (
                      <span
                        key={c}
                        className="h-3 w-3 rounded-full border border-white/15"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="hidden shrink-0 md:block md:w-[10vw]" />
        </div>
      </div>
    </section>
  );
}
