"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Protection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section id="protection" className="relative py-32 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="flex flex-col gap-6"
          >
            <span className="text-[11px] tracking-[0.35em] text-white/40">
              03 / PROTECTION
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              className="h-px w-16 origin-left bg-white/20"
            />
            <h2 className="font-[family-name:var(--font-display)] text-[36px] font-[500] leading-[1] tracking-[-0.025em] text-white sm:text-[48px] md:text-[72px]">
              Design Protection{" "}
              <span className="font-serif-italic text-white/90">Promise.</span>
            </h2>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-white/55">
              Every final design gets a unique Design Code and enters CALEO ALMA&apos;s
              protected archive. Once it&apos;s yours, we never reproduce it
              for another team.
            </p>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-7 md:pl-10">
          <div
            ref={ref}
            className="relative flex min-h-[400px] items-center justify-center md:min-h-[520px]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.8, ease: EASE }}
              aria-hidden
              className="absolute h-[300px] w-[300px] rounded-full animate-pulse-glow md:h-[480px] md:w-[480px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,209,255,0.18) 0%, rgba(0,209,255,0) 65%)",
              }}
            />

            <motion.div
              initial={{ scale: 1.15, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 0.4 } : {}}
              transition={{ duration: 1.6, ease: EASE }}
              className="absolute h-[270px] w-[270px] rounded-full border border-white/10 animate-rotate-slow md:h-[440px] md:w-[440px]"
              aria-hidden
            >
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[color:var(--caleo-cyan)]/60" />
              <div className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[color:var(--caleo-sky)]/40" />
            </motion.div>

            <motion.div
              initial={{ scale: 1.3, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 0.2 } : {}}
              transition={{ duration: 2, delay: 0.2, ease: EASE }}
              className="absolute hidden rounded-full border border-dashed border-white/[0.06] md:block md:h-[380px] md:w-[380px]"
              style={{ animationDirection: "reverse" }}
              aria-hidden
            />

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: EASE,
              }}
              className="group relative w-full max-w-[460px] overflow-hidden rounded-sm border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm transition-colors duration-700 hover:border-white/15 hover:bg-white/[0.04] sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              >
                <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--caleo-cyan)]/30 to-transparent animate-scan-line" />
              </div>

              <div className="flex items-center justify-between text-[10px] tracking-[0.35em] text-white/40">
                <span>CALEO · VAULT</span>
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[color:var(--caleo-cyan)]/85"
                >
                  PROTECTED
                </motion.span>
              </div>

              <div className="mt-8 sm:mt-14">
                <div className="text-[10px] tracking-[0.35em] text-white/35">
                  DESIGN CODE
                </div>
                <motion.div
                  initial={{ opacity: 0, letterSpacing: "0.3em" }}
                  animate={inView ? { opacity: 1, letterSpacing: "0.1em" } : {}}
                  transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
                  className="mt-3 font-[family-name:var(--font-display)] text-[36px] font-[500] leading-none text-white md:text-[48px]"
                >
                  CA · 7F2A · 0419
                </motion.div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
                className="mt-10 h-px origin-left bg-white/20"
              />

              <div className="mt-6 grid grid-cols-3 gap-6 text-[11px] tracking-wide text-white/55">
                {[
                  { label: "TEAM", value: "Your Team", color: "text-white" },
                  { label: "ISSUED", value: "2026 · 04", color: "text-white" },
                  {
                    label: "STATUS",
                    value: "Protected",
                    color: "text-[color:var(--caleo-cyan)]/90",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.1 + i * 0.1, ease: EASE }}
                  >
                    <div className="tracking-[0.25em] text-white/35">
                      {item.label}
                    </div>
                    <div className={`mt-1 ${item.color}`}>{item.value}</div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5, ease: EASE }}
                className="mt-10 text-[11px] leading-relaxed tracking-wide text-white/40"
              >
                Once it&apos;s yours, we never reuse it. That&apos;s the promise.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
