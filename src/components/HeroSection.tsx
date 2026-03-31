import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/40 glow-box"
        >
          <img src={profileImg} alt="Sandhiya R" className="w-full h-full object-cover object-top" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">I'm</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="text-foreground">Sandhiya</span>{" "}
            <span className="text-primary glow-text">R</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-medium">
            AI & ML Student · Software Developer · UI/UX Designer
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Passionate about building intelligent and user-friendly digital solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Button asChild size="lg" className="glow-box font-semibold">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/10">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce hidden md:block"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
