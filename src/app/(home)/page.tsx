import {
  HeroSection,
  FunnelSection,
  SamplesSection,
  PlatformFeaturesSection,
  VideoTypesSection,
  HowItWorksSection,
  DemoModal,
} from '@/components';

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <FunnelSection />
      <SamplesSection />
      <PlatformFeaturesSection />
      <VideoTypesSection />
      <HowItWorksSection />
      <DemoModal />
    </main>
  );
}