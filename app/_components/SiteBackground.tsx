"use client";

import Waves from "./Waves";

export default function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #050e18 0%, #0a1520 28%, #0d1f33 55%, #0a1a2a 78%, #050e18 100%)",
        }}
      />

      <Waves
        lineColor="rgba(0, 209, 255, 0.12)"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={14}
        yGap={36}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 50%, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="noise absolute inset-0" />
    </div>
  );
}
