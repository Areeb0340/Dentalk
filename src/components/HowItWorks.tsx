const steps = [
  { num: "01", title: "Patient Calls Your Clinic", desc: "Dentalk answers instantly — no waiting." },
  { num: "02", title: "Smart Conversation", desc: "The AI talks naturally and collects all required details." },
  { num: "03", title: "Appointment Booked", desc: "The system schedules directly into your Google Calendar." },
  { num: "04", title: "You Stay Focused", desc: "No interruptions. No missed leads." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 px-6 bg-background">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary">HOW IT WORKS</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-card-foreground">
        Simple. Smart. Fully Automated.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <span className="text-5xl font-black text-primary/20">{s.num}</span>
            <h3 className="text-lg font-semibold text-card-foreground mt-4 mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
