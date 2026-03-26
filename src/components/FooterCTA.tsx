import { ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";

const FooterCTA = () => (
  <>
    {/* CTA Section */}
    <section className="py-20 px-6 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
          Start Capturing Every Patient Call Today
        </h2>
        <p className="text-muted-foreground mb-8">
          Don't let another patient go to your competitor. Let Dentalk handle your calls while you focus on treatment.
        </p>
        <a
          href="https://calendar.app.google/S4wLR9itXhbPMbPk7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition"
        >
          Book an Appointment <ArrowRight size={18} />
        </a>
        <div className="mt-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScZCRM9L3dYHII_fjvFbqvx7VehdN67Ek0y0e8PM7t4jzbRJA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary/80 transition"
          >
            Fill the Form
          </a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-10 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦷</span>
              <span className="text-xl font-bold text-card-foreground">
                <span className="text-primary">D</span>entalk
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your 24/7 AI receptionist that never misses a patient call. Built for modern dental clinics.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/dentalkservices/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/robert-jones-3904293ba/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-card-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary text-sm transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary text-sm transition-colors">How It Works</a></li>
              <li><a href="#demo" className="text-muted-foreground hover:text-primary text-sm transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-card-foreground font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://calendar.app.google/S4wLR9itXhbPMbPk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Book an Appointment
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScZCRM9L3dYHII_fjvFbqvx7VehdN67Ek0y0e8PM7t4jzbRJA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Fill the Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dentalk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default FooterCTA;
