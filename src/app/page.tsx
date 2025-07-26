/* eslint-disable @typescript-eslint/no-unused-vars */
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { LiquidGlass } from "@/components/gsap/liquid-glass";
import { Meteors } from "@/components/magicui/meteors";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";

export default function Home() {
  return (
    <div className="h-screen w-full inclusive-sans">
      <Meteors />
      {/* <LiquidGlass borderRadius={20} blur={1} width={20} height={20} /> */}
      <Navbar />
      <HeroSection />
      {/*will add to hero section https://magicui.design/docs/components/icon-cloud*/}
      <AboutSection />
      <WorkSection />
      <WorkExperienceSection />
      {/*<Testimonials /> --> https://magicui.design/docs/components/marquee https://magicui.design/docs/components/pointer
      <Contact />
      <Footer /> */}
      <div className="mt-20 h-20 bg-black"></div>
    </div>
  );
}
