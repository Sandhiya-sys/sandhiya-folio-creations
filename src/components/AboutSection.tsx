import { GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full glow-box" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card border border-primary/10 glow-border hover:border-primary/30 transition-all duration-300">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              A passionate Artificial Intelligence and Machine Learning student,
              Software Developer, and UI/UX Designer. I love turning complex
              problems into elegant, intuitive solutions using modern technology
              and thoughtful design.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border border-accent/10 hover:border-accent/30 transition-all duration-300" style={{ boxShadow: '0 0 15px hsl(260 80% 60% / 0.1)' }}>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-medium text-foreground">
                B.Tech in AI & Data Science
              </p>
              <p className="text-muted-foreground">Panimalar Engineering College</p>
              <p className="text-primary text-xs font-medium">2023 – 2027</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default AboutSection;
