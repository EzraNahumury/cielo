"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Pride() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 1.06]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0.15]
  );
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.5]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 0.5, 0.5, 0]
  );

  return (
    <section
      id="pride"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[600px] w-[600px] rounded-full"
        style={{
          scale: glowScale,
          opacity: glowOpacity,
          background:
            "radial-gradient(circle, rgba(0,209,255,0.12) 0%, transparent 70%)",
        }}
      />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/20"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}

      <motion.div
        style={{ scale, opacity, rotate }}
        className="relative z-10 px-6 text-center"
      >
        <h2 className="font-[family-name:var(--font-display)] text-[13vw] font-[500] leading-[0.92] tracking-[-0.04em] text-white md:text-[10.5vw]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            The sky belongs
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-2 block"
          >
            to{" "}
            <span className="font-serif-italic text-white/95">one team.</span>
          </motion.span>
        </h2>
      </motion.div>
    </section>
  );
}
