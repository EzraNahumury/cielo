"use client";

import { motion } from "framer-motion";
import SplitText from "./SplitText";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-black"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"
      />

      <div className="relative z-10 flex flex-1 flex-col px-8 pb-20 pt-36 md:px-12 md:pb-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between text-[11px] tracking-[0.3em] text-white/50"
        >
          <span>CALEO · ALMA</span>
          <span className="hidden md:inline">
            PROTECTED TEAM IDENTITY · EST. 2026
          </span>
        </motion.div>

        <div className="flex flex-1 flex-col items-center justify-center gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-1 w-1 rounded-full bg-white" />
            <span className="text-[13px] font-medium tracking-wide">
              <span className="text-white/60">Protected identity ·</span>{" "}
              <span className="text-white">Est. 2026</span>
            </span>
          </motion.div>

          <h1 className="max-w-[900px] font-[family-name:var(--font-display)] text-balance text-[12vw] font-[500] leading-[0.96] tracking-[-0.035em] text-white sm:text-[9vw] md:text-[6.2vw] lg:text-[5.6vw]">
            <span className="block">
              <SplitText
                text="Built for your team,"
                mode="chaos"
                delay={0.5}
                stagger={0.02}
              />
            </span>
            <span className="mt-1 block">
              <SplitText
                text="not for everyone."
                mode="chaos"
                delay={1.0}
                stagger={0.024}
                highlight="everyone."
                highlightStyle="serif-italic"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[600px] text-[15px] leading-[1.55] text-white/70"
          >
            One jersey, sealed to one team. Never produced for anyone else — a
            protected identity, kept out of anyone else&apos;s hands.
          </motion.p>

          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative inline-flex rounded-full border-[0.6px] border-white/70 p-[1px] transition-transform duration-500 ease-out hover:scale-[1.02]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white to-transparent opacity-80 blur-[6px]"
            />
            <span className="relative inline-flex items-center gap-3 rounded-full bg-white px-[29px] py-[11px] text-[14px] font-medium tracking-wide text-black">
              Claim your identity
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-500 ease-out group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3, duration: 1.2 }}
        className="absolute bottom-8 right-8 z-10 hidden text-[10px] tracking-[0.35em] text-white/50 md:flex md:items-center md:gap-3"
      >
        SCROLL
        <span className="h-px w-12 bg-white/40" />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-48 bg-gradient-to-b from-transparent to-[color:var(--caleo-ink)]"
      />
    </section>
  );
}
