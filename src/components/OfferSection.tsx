import { ArrowRight, Gift, Clock, Headphones } from "lucide-react";

const perks = [
  { icon: Gift, text: "FREE Setup (Save $99)" },
  { icon: Clock, text: "30-Day Free Trial" },
  { icon: Headphones, text: "Full Support & Custom Setup" },
];

const OfferSection = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary">LIMITED OFFER</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
        Get Started Risk-Free
      </h2>
      <p className="text-muted-foreground mb-10">
        We're onboarding our first 5 clinics with an exclusive early access offer:
      </p>
      <div className="rounded-2xl bg-card border border-border p-8 mb-8">
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          {perks.map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-card-foreground font-medium">
              <p.icon size={18} className="text-primary" />
              {p.text}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mb-2">After trial:</p>
        <p className="text-4xl font-black text-card-foreground mb-1">$199<span className="text-lg font-normal text-muted-foreground">/month</span></p>
        <p className="text-muted-foreground text-sm mb-6">No long-term contracts. Cancel anytime.</p>
        <a
          href="https://calendar.app.google/S4wLR9itXhbPMbPk7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition"
        >
          Book an Appointment <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </section>
);

export default OfferSection;
