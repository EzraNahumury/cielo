"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Pride() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.1, 1, 1, 0.2]
  );

  return (
    <section
      id="pride"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[580px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[color:var(--caleo-cyan)]/8 blur-[160px]"
      />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 px-6 text-center"
      >
        <h2 className="font-[family-name:var(--font-display)] text-[14vw] font-[500] leading-[0.9] tracking-[-0.04em] text-white md:text-[11vw]">
          <span className="block">The sky belongs</span>
          <span className="mt-2 block">
            to <span className="font-serif-italic text-white/95">one team.</span>
          </span>
        </h2>
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[color:var(--caleo-ink)]"
      />
    </section>
  );
}
