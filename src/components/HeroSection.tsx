import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl ring-4 ring-primary/10">
            <img
              src={profileImg}
              alt="Sandhiya R"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left space-y-5">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-medium">
            Hello World, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight">
            Sandhiya <span className="text-primary">R</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            AI & ML Student | Software Developer | UI/UX Designer
          </p>
          <p className="text-muted-foreground max-w-lg">
            Passionate about building intelligent and user-friendly digital solutions
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hidden md:block"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default HeroSection;
