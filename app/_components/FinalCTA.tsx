"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative flex min-h-[90svh] items-center overflow-hidden py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[color:var(--caleo-cyan)]/8 blur-[160px]"
      />

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-3">
          <span className="text-[11px] tracking-[0.35em] text-white/40">
            07 / YOUR TURN
          </span>
        </div>

        <div className="col-span-12 md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-display)] text-[48px] font-[500] leading-[0.98] tracking-[-0.03em] text-white md:text-[88px] lg:text-[104px]"
          >
            If it&apos;s yours,
            <br />
            no one else{" "}
            <span className="font-serif-italic text-white/90">wears it.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-white/55">
              Tell us about your team. We&apos;ll design and seal an identity
              that is only yours.
            </p>

            <a
              href="mailto:hello@caleoalma.studio"
              className="group inline-flex items-center gap-4 text-sm tracking-wide text-white"
            >
              Start your design
              <span className="h-px w-12 bg-white transition-all duration-500 ease-out group-hover:w-20" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
