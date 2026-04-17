"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CircularGallery = dynamic(() => import("./CircularGallery"), {
  ssr: false,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const galleryItems = [
  {
    image: "/design/662610944_17856303279689259_5006615055239657437_n.jpg",
    text: "",
  },
  {
    image: "/design/670062625_17856312627689259_6384890452828074236_n.jpg",
    text: "",
  },
  {
    image: "/design/670138873_17938413714194916_4188580253992676216_n.jpg",
    text: "",
  },
  {
    image: "/design/670413349_17856381681689259_7746952354273923476_n.jpg",
    text: "",
  },
  {
    image: "/design/670873583_17938416444194916_5410925776168977415_n.jpg",
    text: "",
  },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-[color:var(--caleo-ink)]"
    >
      <div className="absolute left-8 top-10 z-20 md:left-12 md:top-14">
        <span className="text-[11px] tracking-[0.35em] text-white/40">
          04 / SHOWCASE
        </span>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-4 sm:px-8 md:px-12 md:pt-32 md:pb-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="font-[family-name:var(--font-display)] text-[32px] font-[500] leading-[1] tracking-[-0.025em] text-white sm:text-[44px] md:text-[72px]"
          >
            Identities already{" "}
            <span className="font-serif-italic text-white/90">protected.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="max-w-sm text-[15px] leading-relaxed text-white/55"
          >
            Each design below lives in the CALEO ALMA archive. Once protected,
            it is never offered to another team.
          </motion.p>
        </div>
      </div>

      <div className="relative h-[380px] sm:h-[480px] md:h-[650px] lg:h-[700px]">
        <CircularGallery
          items={galleryItems}
          bend={2}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.03}
          font="bold 14px sans-serif"
        />
      </div>
    </section>
  );
}
