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
    [0.1, 1, 1, 0.25]
  );

  return (
    <section
      id="pride"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 px-6 text-center"
      >
        <h2 className="font-[family-name:var(--font-display)] text-[13vw] font-[500] leading-[0.92] tracking-[-0.04em] text-white md:text-[10.5vw]">
          <span className="block">The sky belongs</span>
          <span className="mt-2 block">
            to{" "}
            <span className="font-serif-italic text-white/95">one team.</span>
          </span>
        </h2>
      </motion.div>
    </section>
  );
}
