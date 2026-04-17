"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    title: "Understand",
    body: "We study your team — roots, rivals, rituals. Every detail shapes the identity we build for you.",
  },
  {
    n: "02",
    title: "Design",
    body: "We craft a jersey that represents your team's character — not a template, but something truly yours.",
  },
  {
    n: "03",
    title: "Protect",
    body: "Your final design gets a unique Design Code and enters our protected archive. It is never reused.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="flex flex-col gap-6"
          >
            <span className="text-[11px] tracking-[0.35em] text-white/40">
              02 / PROCESS
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              className="h-px w-16 origin-left bg-white/20"
            />
            <h2 className="font-[family-name:var(--font-display)] text-[32px] font-[500] leading-[1.05] tracking-[-0.02em] text-white sm:text-[40px] md:text-[52px]">
              Three moves.
              <br />
              <span className="font-serif-italic text-white/85">
                Your identity.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="col-span-12 mt-20 md:col-span-8 md:mt-0">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.15,
                  ease: EASE,
                }}
                className="group relative flex items-baseline gap-8 py-10 md:py-14"
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-sm bg-gradient-to-r from-[rgba(0,209,255,0.04)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="relative font-[family-name:var(--font-display)] text-sm tracking-wide text-white/40 transition-all duration-500 group-hover:text-[color:var(--caleo-cyan)] group-hover:drop-shadow-[0_0_8px_rgba(0,209,255,0.5)]">
                  {s.n}
                </span>
                <div className="relative flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-[500] tracking-[-0.02em] text-white transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                    {s.title}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5% 0px" }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: EASE }}
                    className="mt-3 max-w-sm text-sm leading-relaxed text-white/55 md:text-[15px]"
                  >
                    {s.body}
                  </motion.p>
                </div>

                <motion.div
                  aria-hidden
                  className="hidden h-px origin-left bg-gradient-to-r from-[color:var(--caleo-cyan)]/50 to-transparent md:block"
                  initial={{ scaleX: 0, width: 0 }}
                  whileHover={{ scaleX: 1, width: "60px" }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
