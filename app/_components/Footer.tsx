import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative">
      <div
        aria-hidden
        className="mx-auto max-w-[1400px] px-8 md:px-12"
      >
        <div className="section-divider" />
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 px-8 pb-20 pt-16 md:flex-row md:items-center md:px-12 md:pb-24 md:pt-20">
        <Image
          src="/caleo-logo.png"
          alt="CALEO ALMA"
          width={149}
          height={76}
          className="h-6 w-auto opacity-70 select-none"
        />

        <p className="text-[11px] tracking-[0.3em] text-white/35">
          © {new Date().getFullYear()} · CALEO ALMA
        </p>

        <div className="flex items-center gap-8 text-[12px] tracking-wide text-white/45">
          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Vault
          </a>
        </div>
      </div>
    </footer>
  );
}
