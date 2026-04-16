"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type Props = {
  text: string;
  className?: string;
  charClassName?: string;
  highlight?: string;
  highlightStyle?: "serif-italic" | "gradient";
  delay?: number;
  stagger?: number;
  mode?: "rise" | "chaos";
  once?: boolean;
};

function seededRand(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export default function SplitText({
  text,
  className,
  charClassName,
  highlight,
  highlightStyle = "serif-italic",
  delay = 0,
  stagger = 0.028,
  mode = "rise",
  once = true,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const chars = useMemo(() => {
    const words = text.split(" ");
    const out: { char: string; key: string; word: string; globalIndex: number }[][] = [];
    let idx = 0;
    words.forEach((word, wi) => {
      const letters: typeof out[number] = [];
      for (let ci = 0; ci < word.length; ci++) {
        letters.push({
          char: word[ci],
          key: `${wi}-${ci}`,
          word,
          globalIndex: idx++,
        });
      }
      out.push(letters);
    });
    return out;
  }, [text]);

  const highlightClass =
    highlightStyle === "gradient"
      ? "bg-gradient-to-b from-[color:var(--caleo-cyan)] to-[color:var(--caleo-sky)] bg-clip-text text-transparent"
      : "font-serif-italic text-white/95";

  return (
    <span ref={ref} className={className} aria-label={text}>
      {chars.map((word, wi) => {
        const joined = word.map((c) => c.char).join("");
        const isHighlight = highlight && joined === highlight;
        return (
          <span
            key={wi}
            aria-hidden
            className={`inline-block whitespace-nowrap ${
              wi < chars.length - 1 ? "mr-[0.28em]" : ""
            }`}
          >
            {word.map(({ char, key, globalIndex }) => {
              const initial =
                mode === "chaos"
                  ? {
                      opacity: 0,
                      x: (seededRand(globalIndex * 3.1) - 0.5) * 180,
                      y: (seededRand(globalIndex * 7.7 + 1) - 0.5) * 160,
                      rotate: (seededRand(globalIndex * 11.3 + 2) - 0.5) * 80,
                      filter: "blur(10px)",
                    }
                  : {
                      opacity: 0,
                      y: "110%",
                      filter: "blur(4px)",
                    };

              return (
                <motion.span
                  key={key}
                  initial={initial}
                  animate={
                    inView
                      ? { opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" }
                      : initial
                  }
                  transition={{
                    duration: mode === "chaos" ? 1.4 : 1.05,
                    delay: delay + globalIndex * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${
                    isHighlight ? highlightClass : ""
                  } ${charClassName ?? ""}`}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
