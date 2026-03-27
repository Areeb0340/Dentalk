import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦷</span>
          <span className="text-xl font-bold">
            <span className="text-primary">D</span>entalk
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#demo">Demo</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendar.app.google/S4wLR9itXhbPMbPk7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
          >
            Book Appointment <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">

          <a href="#features" onClick={() => setOpen(false)} className="block">Features</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block">How It Works</a>
          <a href="#demo" onClick={() => setOpen(false)} className="block">Demo</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">Contact Us</a>

          {/* Buttons inside mobile menu */}
          <div className="pt-4 space-y-3">

            <a
              href="https://calendar.app.google/S4wLR9itXhbPMbPk7"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold"
            >
              Book Appointment
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold"
            >
              Contact Us
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;