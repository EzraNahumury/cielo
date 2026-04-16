"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-8 md:px-12">
        <div className="col-span-12 md:col-span-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: EASE }}
            className="sticky top-32 flex flex-col gap-6"
          >
            <span className="text-[11px] tracking-[0.35em] text-white/40">
              01 / PHILOSOPHY
            </span>
            <div className="h-px w-16 bg-white/20" />
            <span className="font-[family-name:var(--font-display)] text-[13px] tracking-wide text-white/50">
              Identity, not product.
            </span>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <h2 className="font-[family-name:var(--font-display)] text-[40px] font-[500] leading-[1.08] tracking-[-0.02em] text-white md:text-[60px] lg:text-[76px]">
            {[
              <>
                Your team is not a{" "}
                <span className="font-serif-italic text-white/85">
                  template.
                </span>
              </>,
              "Every jersey we design belongs to one team,",
              <>
                and is sealed so it is{" "}
                <span className="font-serif-italic text-white/85">never</span>{" "}
                sold to another.
              </>,
            ].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.15,
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
