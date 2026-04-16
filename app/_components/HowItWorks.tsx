"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    title: "Understand",
    body: "We study your team — roots, rivals, rituals.",
  },
  {
    n: "02",
    title: "Design",
    body: "A jersey system that reads at five meters and at five centimeters.",
  },
  {
    n: "03",
    title: "Seal",
    body: "Your design enters the vault. It is yours, forever.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="flex flex-col gap-6"
          >
            <span className="text-[11px] tracking-[0.35em] text-white/40">
              02 / PROCESS
            </span>
            <div className="h-px w-16 bg-white/20" />
            <h2 className="font-[family-name:var(--font-display)] text-[40px] font-[500] leading-[1.05] tracking-[-0.02em] text-white md:text-[52px]">
              Three moves.
              <br />
              <span className="font-serif-italic text-white/85">
                One identity.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="col-span-12 mt-20 md:col-span-8 md:mt-0">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.12,
                  ease: EASE,
                }}
                className="group flex items-baseline gap-8 py-10 md:py-14"
              >
                <span className="font-[family-name:var(--font-display)] text-sm tracking-wide text-white/40 transition-colors duration-500 group-hover:text-[color:var(--caleo-cyan)]">
                  {s.n}
                </span>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-[500] tracking-[-0.02em] text-white md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55 md:text-[15px]">
                    {s.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
