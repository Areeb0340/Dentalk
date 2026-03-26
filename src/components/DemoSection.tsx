import { Play, Cpu, Settings, Plug } from "lucide-react";

const points = [
  { icon: Cpu, text: "Built using advanced AI systems" },
  { icon: Settings, text: "Designed for real clinic workflows" },
  { icon: Plug, text: "Easy integration with your current setup" },
];

const DemoSection = () => (
  <section id="demo" className="py-20 px-6 bg-card">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary">DEMO</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
        See Dentalk in Action
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
        Watch how our AI assistant handles real patient calls and books appointments seamlessly.
      </p>
     <video
      className="mx-auto rounded-xl mb-5"
      autoPlay
      controls
      loop
      playsInline
      width="800"
    >
      <source src="/1.mp4" type="video/mp4" />
    
    </video>

      <div className="flex flex-wrap justify-center gap-6">
        {points.map((p, i) => (
          <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
            <p.icon size={16} className="text-primary" />
            {p.text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DemoSection;
