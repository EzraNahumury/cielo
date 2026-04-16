import FinalCTA from "./_components/FinalCTA";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import Nav from "./_components/Nav";
import Philosophy from "./_components/Philosophy";
import Pride from "./_components/Pride";
import Protection from "./_components/Protection";
import Showcase from "./_components/Showcase";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative flex flex-1 flex-col">
        <Hero />
        <Philosophy />
        <HowItWorks />
        <Protection />
        <Showcase />
        <Pride />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
