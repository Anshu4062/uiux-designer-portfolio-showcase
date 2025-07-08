/* eslint-disable @typescript-eslint/no-unused-vars */
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { LiquidGlass } from "@/components/gsap/liquid-glass";
import { Meteors } from "@/components/magicui/meteors";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="h-screen w-full">
      {/* <Meteors /> */}
      {/* <LiquidGlass borderRadius={20} blur={1} width={40} height={40} /> */}
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
    </div>
  );
}
