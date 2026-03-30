import { GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">About Me</h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A passionate Artificial Intelligence and Machine Learning student,
              Software Developer, and UI/UX Designer. I love turning complex
              problems into elegant, intuitive solutions using modern technology
              and thoughtful design.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-1 text-muted-foreground">
              <p className="font-medium text-foreground">
                B.Tech in Artificial Intelligence & Data Science
              </p>
              <p>Panimalar Engineering College</p>
              <p className="text-sm">2023 – 2027</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default AboutSection;
