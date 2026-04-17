"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative flex min-h-[90svh] items-center overflow-hidden pt-32 pb-48 md:pt-48 md:pb-64"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[10%] h-[500px] w-[500px] rounded-full"
        style={{
          y: bgY,
          background:
            "radial-gradient(circle, rgba(0,209,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-3">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1, ease: EASE }}
            className="text-[11px] tracking-[0.35em] text-white/40"
          >
            05 / YOUR TURN
          </motion.span>
        </div>

        <div className="col-span-12 md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.4, ease: EASE }}
            className="font-[family-name:var(--font-display)] text-[48px] font-[500] leading-[0.98] tracking-[-0.03em] text-white md:text-[88px] lg:text-[104px]"
          >
            If it&apos;s yours,
            <br />
            no one else{" "}
            <span className="font-serif-italic text-white/90">wears it.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: EASE,
            }}
            className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-white/55">
              Tell us about your team. CALEO ALMA will design and protect an
              identity that is only yours.
            </p>

            <motion.a
              href="https://wa.me/6281326588810"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 text-sm tracking-wide text-white"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative">
                Start your design
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--caleo-cyan)] transition-all duration-500 ease-out group-hover:w-full" />
              </span>
              <span className="h-px w-12 bg-white transition-all duration-500 ease-out group-hover:w-20 group-hover:bg-[color:var(--caleo-cyan)]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
