"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

const Radar = dynamic(() => import("./Radar"), { ssr: false });

const EASE = [0.22, 1, 0.36, 1] as const;

const navColumns = [
  [
    { label: "HOME", href: "#hero" },
    { label: "IDENTITY", href: "#identity" },
    { label: "PROCESS", href: "#process" },
    { label: "PROTECTION", href: "#protection" },
    { label: "SHOWCASE", href: "#showcase" },
  ],
  [{ label: "DOCS", href: "#" }],
];

export default function Footer() {
  const year = new Date().getFullYear();

  const backToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Radar
          speed={0.3}
          scale={0.45}
          ringCount={8}
          spokeCount={12}
          ringThickness={0.03}
          spokeThickness={0.008}
          sweepSpeed={0.6}
          sweepWidth={3.0}
          sweepLobes={1}
          color="#0d4f6e"
          backgroundColor="#050e18"
          falloff={1.8}
          brightness={0.7}
          enableMouseInteraction={true}
          mouseInfluence={0.08}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-8 md:px-12">
          <div className="section-divider" />
        </div>

        <div className="mx-auto max-w-[1400px] px-8 pt-16 md:px-12 md:pt-20">
          <div className="grid grid-cols-12 items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="col-span-6 flex flex-col gap-5 md:col-span-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.1] hover:ring-white/20">
                  <Image
                    src="/caleo-logo.png"
                    alt=""
                    width={32}
                    height={32}
                    aria-hidden
                    className="h-6 w-6 object-contain opacity-90"
                  />
                </span>
                <span className="text-[12px] font-semibold tracking-[0.32em] text-white/85">
                  CALEO
                </span>
              </div>

              <ul className="flex items-center gap-3">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/caleoalma?igsh=cHduNXEwajNjaDZl&utm_source=qr",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-[15px] w-[15px]"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    label: "TikTok",
                    href: "#",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-[15px] w-[15px]"
                      >
                        <path d="M16.5 3h-2.6v12.2a2.7 2.7 0 1 1-2.7-2.7c.2 0 .4 0 .6.05V9.9a5.4 5.4 0 1 0 4.7 5.35V8.6a6.2 6.2 0 0 0 3.7 1.2V7.2a3.6 3.6 0 0 1-3.7-4.2Z" />
                      </svg>
                    ),
                  },
                  {
                    label: "WhatsApp",
                    href: "https://wa.me/6281326588810",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-[15px] w-[15px]"
                      >
                        <path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.25A9.5 9.5 0 1 0 12 2.5Zm0 17.2a7.7 7.7 0 0 1-3.95-1.08l-.28-.17-2.85.74.76-2.77-.18-.29A7.7 7.7 0 1 1 12 19.7Zm4.4-5.75c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                      </svg>
                    ),
                  },
                ].map((social, i) => (
                  <motion.li
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: EASE,
                    }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-white/25 hover:scale-110"
                    >
                      <span className="text-white/60 transition-colors duration-300 group-hover:text-white">
                        {social.icon}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className="col-span-12 flex gap-16 md:col-span-6 md:gap-20">
              {navColumns.map((column, idx) => (
                <ul key={idx} className="flex flex-col gap-3">
                  {column.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + i * 0.06,
                        ease: EASE,
                      }}
                    >
                      <a
                        href={link.href}
                        className="group relative text-[11px] tracking-[0.3em] text-white/55 transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[color:var(--caleo-cyan)]/50 transition-all duration-300 group-hover:w-full" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="col-span-6 flex justify-end md:col-span-3"
            >
              <button
                type="button"
                onClick={backToTop}
                className="group flex items-center gap-2 text-[13px] text-white/60 transition-colors duration-300 hover:text-white"
              >
                Back to top
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </button>
            </motion.div>
          </div>

          <div className="relative mt-16 overflow-hidden md:mt-20">
            <Image
              src="/caleo-logo.png"
              alt=""
              width={520}
              height={520}
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/2 hidden h-[70%] w-auto -translate-y-1/2 select-none opacity-[0.12] md:block"
            />
            <h2
              aria-hidden
              className="select-none whitespace-nowrap text-center font-[family-name:var(--font-display)] text-[26vw] font-[900] leading-[0.85] tracking-[-0.05em] text-white/[0.12] md:text-[19vw]"
            >
              CALEO
            </h2>
          </div>

          <div className="flex justify-center pb-10 pt-6 md:pb-12">
            <p className="text-[12px] tracking-wide text-white/40">
              {year} CALEO ALMA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
