import { useState } from "react";
import { X } from "lucide-react";
import chat1 from "/1.png";
import chat2 from "/2.png";
import chat3 from "/3.png";
import chat4 from "/4.png";
import chat5 from "/5.png";

const chats = [
  { img: chat1, name: "Noah Thompson", },
  { img: chat2, name: "Mr Jones",  },
  { img: chat3, name: "Lime carter", },
   { img: chat4, name: "Harry Wilson",  },
    { img: chat5, name: "Caven Clark",},
];

const Testimonials = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3 text-primary">
            TESTIMONIALS
          </p>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
            Real Conversations with Real Patients
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-14 text-muted-foreground">
            See how Dentalk handles patient inquiries, books appointments, and confirms payments — all automatically via WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {chats.map((chat, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(211_100%_55%/0.3)] cursor-pointer bg-card border border-border"
                onClick={() => setSelected(i)}
              >
                <div className="p-4 flex items-center gap-3 border-b border-border">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-primary text-primary-foreground">
                    {chat.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-card-foreground">{chat.name}</p>
                  
                  </div>
                </div>
                <div className="relative overflow-hidden" style={{ maxHeight: 320 }}>
                  <img
                    src={chat.img}
                    alt={`Chat with ${chat.name}`}
                    className="w-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <span className="text-xs text-primary font-medium">Click to view full chat</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white z-50"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>
          <img
            src={chats[selected].img}
            alt={`Chat with ${chats[selected].name}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Testimonials;
