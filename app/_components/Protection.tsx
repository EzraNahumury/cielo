"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Protection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="protection"
      className="relative overflow-hidden py-40 md:py-56"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-5">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] tracking-[0.35em] text-white/40">
              04 / PROTECTION
            </span>
            <div className="h-px w-16 bg-white/20" />
            <h2 className="font-[family-name:var(--font-display)] text-[48px] font-[500] leading-[1] tracking-[-0.025em] text-white md:text-[72px]">
              Your jersey is{" "}
              <span className="font-serif-italic text-white/90">sealed.</span>
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/55">
              Each design is assigned a unique code and stored in our vault.
              Once claimed, it never leaves your team.
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 md:pl-10">
          <div
            ref={ref}
            className="relative flex min-h-[480px] items-center justify-center"
          >
            <motion.div
              initial={{ scale: 1.15, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 0.35 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-[460px] w-[460px] rounded-full border border-white/10"
              aria-hidden
            />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[440px]"
            >
              <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[color:var(--caleo-ink)] p-10 backdrop-blur-sm">
                <div className="flex items-center justify-between text-[10px] tracking-[0.35em] text-white/40">
                  <span>CALEO · VAULT</span>
                  <span className="text-[color:var(--caleo-cyan)]/80">
                    SEALED
                  </span>
                </div>

                <div className="mt-14">
                  <div className="text-[10px] tracking-[0.35em] text-white/35">
                    DESIGN CODE
                  </div>
                  <div className="mt-3 font-[family-name:var(--font-display)] text-[32px] font-[500] tracking-[0.12em] text-white md:text-[40px]">
                    CA · 7F2A · 0419
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
                  className="mt-10 h-px origin-left bg-white/20"
                />

                <div className="mt-6 grid grid-cols-3 gap-6 text-[11px] tracking-wide text-white/55">
                  <div>
                    <div className="tracking-[0.25em] text-white/35">TEAM</div>
                    <div className="mt-1 text-white">Your Team</div>
                  </div>
                  <div>
                    <div className="tracking-[0.25em] text-white/35">ISSUED</div>
                    <div className="mt-1 text-white">2026 · 04</div>
                  </div>
                  <div>
                    <div className="tracking-[0.25em] text-white/35">STATUS</div>
                    <div className="mt-1 text-[color:var(--caleo-cyan)]/90">
                      Locked
                    </div>
                  </div>
                </div>

                <p className="mt-10 text-[11px] leading-relaxed tracking-wide text-white/40">
                  This code belongs to one team. Forever.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
