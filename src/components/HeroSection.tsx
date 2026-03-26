import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-dentist.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Dentist at work" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(222 47% 6% / 0.92) 0%, hsl(222 47% 6% / 0.6) 60%, hsl(222 47% 6% / 0.3) 100%)" }} />
    </div>
    <div className="relative z-10 flex min-h-screen items-center px-6 py-32 lg:px-12 xl:px-20">
      <div className="w-full max-w-2xl text-left">
        <div className="flex items-center gap-2 mb-6 justify-start">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-muted-foreground text-sm">Built for modern dental clinics in the US, UK, Canada & Australia</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-card-foreground">
          Never Miss Another Patient Call — <span className="text-primary">Even After Hours</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
          Dentalk is your 24/7 AI receptionist that answers every call, books appointments instantly, and captures patient details — so your clinic never loses revenue again.
        </p>
        <div className="flex flex-wrap gap-4 mb-6 justify-start">
          <a
            href="https://calendar.app.google/TLrDDVRKvxnFDpDq9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:brightness-110 transition text-base"
          >
            Book an Appointment <ArrowRight size={18} />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScZCRM9L3dYHII_fjvFbqvx7VehdN67Ek0y0e8PM7t4jzbRJA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary/80 transition text-base"
          >
            Fill the Form
          </a>
        </div>
        <p className="text-muted-foreground text-sm">Book a quick call to see Dentalk in action — or fill the form and our team will reach out</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
