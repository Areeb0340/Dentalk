import { PhoneOff, Clock, ClipboardX, CalendarX } from "lucide-react";

const problems = [
  { icon: Clock, text: "Calls missed after working hours" },
  { icon: PhoneOff, text: "Staff too busy to answer every call" },
  { icon: ClipboardX, text: "No proper system to capture patient details" },
  { icon: CalendarX, text: "Manual scheduling wasting time" },
];

const ProblemSection = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary">THE PROBLEM</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
        How Many Patients Are You Losing Every Day?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
        Missed calls = lost revenue. Patients don't wait. If your clinic doesn't answer, they move on to the next one.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <div key={i} className="rounded-2xl p-6 bg-card border border-border flex flex-col items-center gap-4 transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/15">
              <p.icon size={24} className="text-primary" />
            </div>
            <p className="text-card-foreground font-medium text-sm">{p.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-muted-foreground font-medium">Every missed call is a missed opportunity.</p>
    </div>
  </section>
);

export default ProblemSection;
