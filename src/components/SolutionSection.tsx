import { Phone, Calendar, UserCheck, Settings, Zap, MessagesSquare } from "lucide-react";

const features = [
  { icon: Phone, text: "Answers calls 24/7" },
  { icon: Calendar, text: "Books appointments directly on Google Calendar" },
  { icon: UserCheck, text: "Collects patient details accurately" },
  { icon: Settings, text: "Custom questions based on your clinic needs" },
  { icon: Zap, text: "Works without breaks, delays, or human errors" },
    { icon: MessagesSquare, text: "Patients receive instant booking confirmation via SMS or email" },
];

const SolutionSection = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary">THE SOLUTION</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
        Meet Dentalk — Your AI Receptionist
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
        Dentalk answers every patient call instantly — just like a real receptionist. It listens, understands, and responds naturally while handling everything automatically.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl p-6 bg-background border border-border flex items-center gap-4 text-left transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center bg-primary/15">
              <f.icon size={20} className="text-primary" />
            </div>
            <p className="text-card-foreground font-medium text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
