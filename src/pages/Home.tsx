import { HeroSection } from '../components/home/HeroSection';
import { ClientsSection } from '../components/home/ClientsSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseSection';
import { PortfolioPreview } from '../components/home/PortfolioPreview';
import { ProcessSection } from '../components/home/ProcessSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';
export function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioPreview />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}