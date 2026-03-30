import { Palette, Globe, Brain, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "Figma-based prototyping & user-centered design." },
  { icon: Globe, title: "Web Development", desc: "Responsive, performant modern websites." },
  { icon: Brain, title: "ML Development", desc: "End-to-end machine learning solutions." },
  { icon: Code, title: "Java Development", desc: "Robust applications with clean architecture." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 px-4">
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          Serv<span className="text-primary">ices</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full glow-box" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <Card
            key={s.title}
            className="bg-card border border-primary/10 glow-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 text-center group"
          >
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
