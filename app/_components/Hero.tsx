"use client";

import { motion } from "framer-motion";
import SplitText from "./SplitText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[620px] w-[1100px] -translate-x-1/2 rounded-[50%] bg-[color:var(--caleo-cyan)]/8 blur-[180px]"
      />
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col px-8 pb-16 pt-36 md:px-12 md:pb-20 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between text-[11px] tracking-[0.3em] text-white/45"
        >
          <span>CALEO · ALMA</span>
          <span className="hidden md:inline">
            PROTECTED TEAM IDENTITY · EST. 2026
          </span>
        </motion.div>

        <div className="flex flex-1 items-center">
          <h1 className="max-w-[1200px] font-[family-name:var(--font-display)] text-balance text-[13vw] font-[500] leading-[0.92] tracking-[-0.035em] text-white sm:text-[11vw] md:text-[9.5vw] lg:text-[9vw]">
            <span className="block">
              <SplitText
                text="Built for your team,"
                mode="chaos"
                delay={0.4}
                stagger={0.02}
              />
            </span>
            <span className="mt-1 block">
              <SplitText
                text="not for everyone."
                mode="chaos"
                delay={0.95}
                stagger={0.024}
                highlight="everyone."
                highlightStyle="serif-italic"
              />
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-sm text-[15px] leading-[1.5] text-white/55"
          >
            One jersey, sealed to one team. Never produced for anyone else.
          </motion.p>

          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group inline-flex items-center gap-3 text-sm tracking-wide text-white"
          >
            Claim your identity
            <span className="h-px w-10 bg-white transition-all duration-500 ease-out group-hover:w-16" />
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3, duration: 1.2 }}
        className="absolute bottom-8 right-8 z-10 hidden text-[10px] tracking-[0.35em] text-white/40 md:flex md:items-center md:gap-3"
      >
        SCROLL
        <span className="h-px w-12 bg-white/30" />
      </motion.div>
    </section>
  );
}
