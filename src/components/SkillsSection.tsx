import { Progress } from "@/components/ui/progress";
import ScrollReveal from "@/components/ScrollReveal";

const skills = [
  { name: "Machine Learning", level: 85 },
  { name: "Java", level: 85 },
  { name: "UI/UX Design (Figma)", level: 75 },
  { name: "Web Development", level: 70 },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 px-4 bg-secondary/20">
    <div className="max-w-4xl mx-auto space-y-10">
      <ScrollReveal>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            Sk<span className="text-primary">ills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full glow-box" />
        </div>
      </ScrollReveal>

      <div className="space-y-5">
        {skills.map((skill, i) => (
          <ScrollReveal key={skill.name} delay={i * 0.1}>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                  style={{ width: `${skill.level}%`, boxShadow: '0 0 8px hsl(170 90% 50% / 0.4)' }}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
