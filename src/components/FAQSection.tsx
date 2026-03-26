import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Will it sound robotic?", a: "No — Dentalk speaks naturally like a real human." },
  { q: "Can I customize it?", a: "Yes — you can add your own questions and workflows." },
  { q: "Is it hard to set up?", a: "Not at all — we handle everything for you." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-card-foreground">Still Not Sure?</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-card-foreground font-medium"
              >
                "{faq.q}"
                <ChevronDown size={20} className={`text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-muted-foreground text-sm">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
