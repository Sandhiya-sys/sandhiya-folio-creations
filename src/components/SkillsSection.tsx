import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "UI/UX Design (Figma)", level: 85 },
  { name: "Web Development (HTML, CSS, JS)", level: 80 },
  { name: "Machine Learning", level: 70 },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 px-4">
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Skills</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2.5" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
