"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative flex min-h-[90svh] items-center overflow-hidden pt-32 pb-48 md:pt-48 md:pb-64"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1, ease: EASE }}
            className="text-[11px] tracking-[0.35em] text-white/40"
          >
            05 / YOUR TURN
          </motion.span>
        </div>

        <div className="col-span-12 md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1.2, ease: EASE }}
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
              ease: EASE,
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
