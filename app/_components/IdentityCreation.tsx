"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Shard = {
  id: string;
  d: string;
  fill?: string;
  stroke?: string;
  from: { x: number; y: number; r: number; s: number };
};

const shards: Shard[] = [
  { id: "sh-l", d: "M60 20 L100 35 L78 56 L46 44 Z",      fill: "#00D1FF", from: { x: -220, y: -110, r: -40, s: 0.6 } },
  { id: "sh-r", d: "M140 20 L180 40 L156 60 L118 36 Z",   fill: "#00D1FF", from: { x: 240, y: -130, r: 35, s: 0.6 } },
  { id: "neck", d: "M100 35 L118 36 L100 54 L78 56 Z",    fill: "#081827", stroke: "#5BB6FF", from: { x: 0, y: -180, r: 60, s: 0.5 } },
  { id: "a-l",  d: "M20 40 L46 44 L40 96 L30 90 Z",       fill: "#5BB6FF", from: { x: -300, y: 20, r: -30, s: 0.7 } },
  { id: "a-r",  d: "M180 40 L160 96 L170 90 L156 60 L180 40 Z", fill: "#5BB6FF", from: { x: 300, y: 30, r: 30, s: 0.7 } },
  { id: "t1",   d: "M46 44 L156 60 L156 96 L46 96 Z",     fill: "#0d2a44", stroke: "#5BB6FF", from: { x: -140, y: 170, r: -15, s: 0.75 } },
  { id: "t2",   d: "M50 96 L150 96 L150 150 L50 150 Z",   fill: "#102A43", from: { x: 160, y: 190, r: 20, s: 0.75 } },
  { id: "t3",   d: "M50 150 L150 150 L150 200 L50 200 Z", fill: "#081827", stroke: "#5BB6FF", from: { x: -100, y: 240, r: -12, s: 0.8 } },
  { id: "no1",  d: "M86 116 L114 116 L114 128 L96 128 L96 158 L86 158 Z", fill: "#F5FAFF", from: { x: -260, y: -200, r: -60, s: 0.5 } },
  { id: "no2",  d: "M96 158 L114 158 L114 170 L86 170 L86 158 Z", fill: "#F5FAFF", from: { x: 260, y: 220, r: 55, s: 0.5 } },
  { id: "tag",  d: "M75 180 L125 180 L125 188 L75 188 Z", fill: "#00D1FF", from: { x: 0, y: 300, r: -90, s: 0.4 } },
];

export default function IdentityCreation() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const heading1Ref = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !svgRef.current) return;

    const ctx = gsap.context(() => {
      const paths = svgRef.current!.querySelectorAll<SVGPathElement>(
        "path[data-shard]"
      );
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=140%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        shards.forEach((s, i) => {
          const el = paths[i];
          if (!el) return;
          gsap.set(el, {
            x: s.from.x,
            y: s.from.y,
            rotate: s.from.r,
            scale: s.from.s,
            opacity: 0,
            transformOrigin: "50% 50%",
          });
          tl.to(
            el,
            {
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
            },
            i * 0.04
          );
        });

        tl.fromTo(
          heading1Ref.current,
          { opacity: 1 },
          { opacity: 0, duration: 0.25, ease: "power1.in" },
          0.5
        );
        tl.fromTo(
          heading2Ref.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          0.7
        );
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.8,
          },
        });
        shards.forEach((s, i) => {
          const el = paths[i];
          if (!el) return;
          gsap.set(el, {
            x: s.from.x * 0.45,
            y: s.from.y * 0.45,
            rotate: s.from.r * 0.5,
            scale: Math.max(0.65, s.from.s),
            opacity: 0,
            transformOrigin: "50% 50%",
          });
          tl.to(el, { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, duration: 0.55 }, i * 0.05);
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="creation"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[680px] overflow-hidden"
    >
      <div className="absolute left-8 top-10 z-10 text-[11px] tracking-[0.35em] text-white/45 md:left-12 md:top-14">
        02 / CREATION
      </div>

      <div className="absolute right-8 top-10 z-10 hidden text-[11px] tracking-[0.35em] text-white/30 md:right-12 md:top-14 md:block">
        scroll to assemble
      </div>

      <div className="absolute left-1/2 top-[22%] z-10 w-full -translate-x-1/2 px-6 text-center">
        <div className="relative h-[56px] md:h-[72px]">
          <div
            ref={heading1Ref}
            className="absolute inset-0 font-[family-name:var(--font-display)] text-3xl font-[500] tracking-[-0.02em] text-white/70 md:text-5xl"
          >
            From chaos —
          </div>
          <div
            ref={heading2Ref}
            className="absolute inset-0 font-[family-name:var(--font-display)] text-3xl font-[500] tracking-[-0.02em] text-white md:text-5xl opacity-0"
          >
            An identity,{" "}
            <span className="font-serif-italic text-white/95">assembled.</span>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[44%]">
        <svg
          ref={svgRef}
          viewBox="0 0 200 220"
          className="h-[52vh] w-auto max-w-[92vw]"
        >
          {shards.map((s) => (
            <path
              key={s.id}
              data-shard
              d={s.d}
              fill={s.fill ?? "none"}
              stroke={s.stroke}
              strokeWidth={s.stroke ? 1 : 0}
            />
          ))}
        </svg>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.35em] text-white/35">
        CA · 7F2A · 0419
      </div>
    </section>
  );
}
