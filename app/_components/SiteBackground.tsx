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

      <div
        className="absolute -left-[10%] -top-[15%] h-[900px] w-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,209,255,0.10), rgba(0,209,255,0) 60%)",
        }}
      />

      <div
        className="absolute -bottom-[12%] -right-[8%] h-[820px] w-[820px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(91,182,255,0.08), rgba(91,182,255,0) 55%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 50%, transparent 45%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="noise absolute inset-0" />
    </div>
  );
}
