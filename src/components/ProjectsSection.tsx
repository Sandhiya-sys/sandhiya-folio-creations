import { ExternalLink, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "AI Agricultural Market Price Forecasting",
    desc: "Uses ensemble learning models to predict market prices with data preprocessing and evaluation.",
    tags: ["Python", "ML", "Data Science"],
    details: {
      overview: "A machine learning-based system that forecasts agricultural commodity prices using historical market data. The system helps farmers and traders make informed decisions.",
      features: [
        "Ensemble learning models (Random Forest, XGBoost, LSTM)",
        "Data preprocessing & feature engineering pipeline",
        "Historical price trend analysis & visualization",
        "Model evaluation with MAE, RMSE, and R² metrics",
        "Interactive dashboard for price predictions",
      ],
      tech: "Python, Scikit-learn, XGBoost, Pandas, NumPy, Matplotlib, Streamlit",
      role: "ML Developer – Built the entire forecasting pipeline from data collection to deployment.",
    },
  },
  {
    title: "Smart Study Planner",
    desc: "AI-powered study planner with notes creation, priority-based scheduling, quiz system & leaderboard.",
    tags: ["AI", "React", "Education"],
    details: {
      overview: "An intelligent study planning tool that uses AI to generate notes, schedule subjects by priority, and test knowledge through quizzes with a competitive leaderboard.",
      features: [
        "AI-powered notes creation from topics & materials",
        "Priority-based subject scheduling (High / Medium / Easy)",
        "Hourly study allocation based on subject priority",
        "Interactive quiz system with timed questions",
        "Leaderboard system with rankings & streaks",
        "Progress tracking & performance analytics",
      ],
      tech: "React, AI/NLP APIs, Firebase, Tailwind CSS, Chart.js",
      role: "Full-Stack Developer – Designed and built the entire platform including AI integration.",
    },
  },
  {
    title: "Civic Issue Reporting App",
    desc: "Real-time issue tracking with auth & location, built with React.js, Python & Firebase.",
    tags: ["React", "Python", "Firebase"],
    details: {
      overview: "A civic engagement platform that allows citizens to report and track local issues like potholes, broken streetlights, and waste management problems in real-time.",
      features: [
        "User authentication & role-based access",
        "GPS-based location tagging for reported issues",
        "Real-time status tracking & notifications",
        "Image upload for issue documentation",
        "Admin dashboard for issue management",
      ],
      tech: "React.js, Python (Flask), Firebase Auth & Firestore, Google Maps API",
      role: "Full-Stack Developer – Built frontend, backend API, and Firebase integration.",
    },
  },
  {
    title: "FarmConnect – Transport System",
    desc: "UI/UX prototype in Figma for logistics, order tracking, and usability.",
    tags: ["Figma", "UI/UX", "Prototype"],
    details: {
      overview: "A comprehensive UI/UX design for a farm-to-market transport logistics system that connects farmers directly with transport providers and buyers.",
      features: [
        "Complete user flow design in Figma",
        "Order tracking & logistics dashboard",
        "Driver and farmer app interfaces",
        "Usability testing & iteration",
        "Design system & component library",
      ],
      tech: "Figma, FigJam, Adobe Illustrator",
      role: "UI/UX Designer – Led the entire design process from research to high-fidelity prototypes.",
    },
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto space-y-10">
        <ScrollReveal>
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">
              Proj<span className="text-primary">ects</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full glow-box" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.12}>
              <Card
                onClick={() => setSelected(i)}
                className="group bg-card border border-primary/10 glow-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full cursor-pointer"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground leading-snug pr-2 text-sm">{p.title}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t} className="text-[10px] bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-primary/20 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 space-y-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-foreground pr-4">{projects[selected].title}</h3>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {projects[selected].tags.map((t) => (
                  <Badge key={t} className="text-[10px] bg-primary/10 text-primary border-primary/20">{t}</Badge>
                ))}
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Overview</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{projects[selected].details.overview}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Key Features</h4>
                <ul className="space-y-1.5">
                  {projects[selected].details.features.map((f, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Tech Stack</h4>
                <p className="text-sm text-muted-foreground">{projects[selected].details.tech}</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">My Role</h4>
                <p className="text-sm text-muted-foreground">{projects[selected].details.role}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
