import { ArrowRight } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
      {/* Logo - fixed on mobile, no break */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <span className="text-2xl sm:text-[35px] leading-none">🦷</span>
        <span className="text-xl sm:text-[35px] font-bold text-card-foreground whitespace-nowrap">
          <span className="text-primary">D</span>entalk
        </span>
      </div>
      
      {/* Desktop nav links - hidden on mobile */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-muted-foreground hover:text-card-foreground transition-colors text-sm">Features</a>
        <a href="#how-it-works" className="text-muted-foreground hover:text-card-foreground transition-colors text-sm">How It Works</a>
        <a href="#demo" className="text-muted-foreground hover:text-card-foreground transition-colors text-sm">Demo</a>
        <a href="#contact" className="text-muted-foreground hover:text-card-foreground transition-colors text-sm">Contact Us</a>
      </div>
      
      {/* Button - properly sized on mobile, no overflow */}
     <div className="flex items-center gap-2 sm:gap-3 shrink-0">
  
  <a
    href="https://calendar.app.google/S4wLR9itXhbPMbPk7"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary text-primary-foreground px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 hover:brightness-110 transition whitespace-nowrap"
  >
    Book Appointment <ArrowRight size={14} className="sm:w-4 sm:h-4" />
  </a>

</div>

    </div>
  </nav>
);

export default Navbar;