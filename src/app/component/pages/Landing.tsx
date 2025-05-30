"use client";
import Footer from "../Footer";
import Header from "../Header";
import KnowMe from "../KnowMe";
import MainContent from "../MainContent";
import Projects from "../Projects";
import Skills from "../Skills";
import GlowEffect from "../ui/GlowEffect";
import ScrollEffect from "../ui/ScrollEffect";
import WhoAmI from "../WhoAmI";
import TimelineDisplay from "../Timeline";
import Certificates from "../Certificates";



export function Landing() {
  

  return (
    <div suppressHydrationWarning>
      <ScrollEffect />
      <GlowEffect />
      <Header />
      <MainContent />
      <WhoAmI />
      <Skills />
      <TimelineDisplay/>
      <Projects />
      <Certificates/>
      <KnowMe />
      <Footer />
    </div>
  );
}
