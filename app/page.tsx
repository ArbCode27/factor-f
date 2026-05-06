import {
  EpisodesSection,
  FinalCtaSection,
  HostsSection,
  MomentsSection,
  SiteFooter,
  UniverseSection,
} from "@/components/landing/content-sections";
import { HeroSection } from "@/components/landing/hero-section";
import { SiteHeader } from "@/components/landing/site-header";
import { VelocityBanner } from "@/components/landing/animated-brand";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#e7dfc9] text-[#14110d]">
      <SiteHeader />
      <main>
        <HeroSection />
        <VelocityBanner />
        <UniverseSection />
        <HostsSection />
        <EpisodesSection />
        <MomentsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
