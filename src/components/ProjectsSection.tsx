import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Agricultural Market Price Forecasting",
    desc: "Uses ensemble learning models to predict market prices with data preprocessing and evaluation.",
    tags: ["Python", "ML", "Data Science"],
  },
  {
    title: "Civic Issue Reporting App",
    desc: "Real-time issue tracking with auth & location, built with React.js, Python & Firebase.",
    tags: ["React", "Python", "Firebase"],
  },
  {
    title: "FarmConnect – Transport System",
    desc: "UI/UX prototype in Figma for logistics, order tracking, and usability.",
    tags: ["Figma", "UI/UX", "Prototype"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-4 bg-secondary/20">
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          Proj<span className="text-primary">ects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full glow-box" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="group bg-card border border-primary/10 glow-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-foreground leading-snug pr-2 text-sm">
                  {p.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Badge key={t} className="text-[10px] bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
