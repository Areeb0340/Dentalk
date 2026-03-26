import { ArrowRight } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="max-w-7xl mx-auto  py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-[35px]">🦷</span>
        <span className="text-[35px] font-bold text-card-foreground">
          <span className="text-primary">D</span>entalk
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-muted-foreground hover:text-card-foreground transition-colors text-sm">Features</a>
        <a href="#how-it-works" className="text-muted-foreground hover:text-card-foreground transition-colors text-sm">How It Works</a>
        <a href="#demo" className="text-muted-foreground hover:text-card-foreground transition-colors text-sm">Demo</a>
      </div>
      <a
        href="https://calendar.app.google/S4wLR9itXhbPMbPk7"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:brightness-110 transition"
      >
        Book Appointment <ArrowRight size={16} />
      </a>
    </div>
  </nav>
);

export default Navbar;
