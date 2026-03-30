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
  <section id="experience" className="py-20 px-4 bg-secondary/30">
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Experience</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.role} className="bg-card shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium text-sm">{exp.company}</p>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {exp.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
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
