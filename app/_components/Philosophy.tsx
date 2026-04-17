"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowX = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.6, 0.6, 0]
  );

  return (
    <section id="identity" ref={sectionRef} className="relative py-32 md:py-48">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-[200px] h-[600px] w-[600px] rounded-full"
        style={{
          left: glowX,
          opacity: glowOpacity,
          background:
            "radial-gradient(circle, rgba(0,209,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: EASE }}
            className="sticky top-32 flex flex-col gap-6"
          >
            <span className="text-[11px] tracking-[0.35em] text-white/40">
              01 / IDENTITY
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              className="h-px w-16 origin-left bg-white/20"
            />
            <span className="font-[family-name:var(--font-display)] text-[13px] tracking-wide text-white/50">
              Identity, not product.
            </span>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <h2 className="font-[family-name:var(--font-display)] text-[28px] font-[500] leading-[1.08] tracking-[-0.02em] text-white sm:text-[40px] md:text-[60px] lg:text-[76px]">
            {[
              <>
                Every team has a{" "}
                <motion.span
                  className="font-serif-italic text-white/85"
                  whileHover={{ color: "rgba(0,209,255,0.9)" }}
                  transition={{ duration: 0.3 }}
                >
                  character.
                </motion.span>
              </>,
              "Your jersey should represent that,",
              <>
                not look like{" "}
                <motion.span
                  className="font-serif-italic text-white/85"
                  whileHover={{ color: "rgba(0,209,255,0.9)" }}
                  transition={{ duration: 0.3 }}
                >
                  everyone else&apos;s.
                </motion.span>
              </>,
            ].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 1.3,
                  delay: i * 0.2,
                  ease: EASE,
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
