import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Agricultural Market Price Forecasting",
    desc: "Uses ensemble learning models to predict market prices with data preprocessing and evaluation pipelines.",
    tags: ["Python", "ML", "Data Science"],
  },
  {
    title: "Civic Issue Reporting Application",
    desc: "Real-time issue tracking with authentication and location features, built with React.js, Python & Firebase.",
    tags: ["React", "Python", "Firebase"],
  },
  {
    title: "FarmConnect – Farmer Transport System",
    desc: "UI/UX prototype designed in Figma focusing on logistics, order tracking, and usability.",
    tags: ["Figma", "UI/UX", "Prototype"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-4">
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Projects</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="group bg-card shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-foreground leading-snug pr-2">
                  {p.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
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
