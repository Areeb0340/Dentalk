import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import DemoSection from "@/components/DemoSection";
import OfferSection from "@/components/OfferSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <DemoSection />
      <OfferSection />
      <WhyChooseSection />
      <Testimonials />
      <FAQSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
