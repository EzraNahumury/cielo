"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Process", href: "#process" },
  { label: "Protection", href: "#protection" },
  { label: "Showcase", href: "#showcase" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-colors duration-500 ${
          scrolled
            ? "bg-[color:var(--caleo-ink)]/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5 md:px-12">
          <a
            href="#"
            aria-label="CALEO ALMA"
            className="group flex items-center"
          >
            <Image
              src="/caleo-logo.png"
              alt="CALEO ALMA"
              width={149}
              height={76}
              priority
              className="h-7 w-auto select-none transition-opacity duration-500 group-hover:opacity-80"
            />
          </a>

          <ul className="hidden items-center gap-10 text-[13px] tracking-wide text-white/60 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className="group inline-flex items-center gap-2 text-[13px] tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
          >
            <span>Start</span>
            <span className="h-px w-8 bg-white/40 transition-all duration-500 ease-out group-hover:w-12 group-hover:bg-white" />
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
