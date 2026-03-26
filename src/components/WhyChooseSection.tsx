import { PhoneCall, TrendingUp, Users, Clock, Star, Scale, DollarSign, CalendarCheck } from "lucide-react";

const benefits = [
  { icon: PhoneCall, title: "Never miss a patient call again" },
  { icon: TrendingUp, title: "Increase appointment bookings" },
  { icon: Users, title: "Reduce staff workload" },
  { icon: Clock, title: "Provide instant response 24/7" },
  { icon: Star, title: "Professional patient experience" },
  { icon: Scale, title: "Scale your clinic without hiring more staff" },
  { icon: DollarSign, title: "Affordable for Every Clinic"},
   { icon: CalendarCheck, title: "Easy Appointment Booking"},
    { icon: PhoneCall, title: "Instant Call Handling"},
];

const WhyChooseSection = () => (
  <section className="py-20 px-6 bg-card">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary">BENEFITS</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-card-foreground">
        Why Clinics Choose Dentalk
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-background border border-border flex flex-col items-start gap-3 transition-transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/15">
              <b.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">{b.title}</h3>
           
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
