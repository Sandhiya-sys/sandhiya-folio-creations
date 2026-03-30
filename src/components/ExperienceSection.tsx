import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Java Intern",
    company: "Big Bucks Innovation",
    period: "May 26 – June 28",
    points: [
      "Developed Java applications using Core and Advanced concepts",
      "Applied OOP principles for structured development",
      "Solved real-time problems and debugged applications",
    ],
  },
  {
    role: "Web Development Intern",
    company: "CodeBind Technology",
    period: "June 19 – July 5",
    points: [
      "Built responsive web pages using HTML, CSS, JavaScript",
      "Improved UI functionality and performance",
      "Collaborated on real-time web projects",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 px-4">
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          Exper<span className="text-primary">ience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full glow-box" />
      </div>

      <div className="space-y-5">
        {experiences.map((exp) => (
          <Card key={exp.role} className="bg-card border border-primary/10 glow-border hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 mt-0.5">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full w-fit">{exp.period}</span>
                  </div>
                  <p className="text-primary/80 font-medium text-sm">{exp.company}</p>
                  <ul className="space-y-1.5 text-muted-foreground text-sm">
                    {exp.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
