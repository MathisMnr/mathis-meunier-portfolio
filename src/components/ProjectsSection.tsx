import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ArrowRight, X, Cpu, Globe2, Rocket, Terminal, Smartphone } from "lucide-react";
import projectMp3 from "@/assets/project-mp3player.jpg";
import projectStreaming from "@/assets/project-streaming.jpg";
import projectBallistic from "@/assets/project-ballistic.jpg";
import projectCicd from "@/assets/project-cicd.jpg";
import projectSport from "@/assets/project-sportapp.jpg";

const categories = ["All", "Full-Stack", "Systems", "DevOps", "Mobile"];

const categoryIcons: Record<string, React.ElementType> = {
  "Full-Stack": Globe2,
  Systems: Cpu,
  DevOps: Terminal,
  Mobile: Smartphone,
};

interface Project {
  title: string;
  category: string;
  tagline: string;
  problem: string;
  approach: string;
  impact: string;
  tech: string[];
  image: string;
  github: string;
  highlight: string;
}

const projects: Project[] = [
  {
    title: "AUDISEN — Custom MP3 Player",
    category: "Systems",
    tagline: "Hardware-to-software, built from zero",
    problem:
      "How do you build a fully functional audio player when all you have is raw electronic components and a blank PCB?",
    approach:
      "Designed the complete electronic circuit from scratch, implemented audio decoding algorithms in C, and engineered an interactive user interface — bridging hardware design, signal processing, and embedded software into one cohesive system.",
    impact:
      "Delivered a working physical product that plays audio files, demonstrating end-to-end engineering ownership across electronics, firmware, and user experience.",
    tech: ["C", "Embedded Systems", "Signal Processing", "PCB Design"],
    image: projectMp3,
    github: "https://github.com/Kaioox/AUDISEN",
    highlight: "Hardware + Software",
  },
  {
    title: "Web Streaming Platform",
    category: "Full-Stack",
    tagline: "Full-stack audio platform, ground up",
    problem:
      "Building a real-time audio streaming service requires solving authentication, data modeling, API design, and responsive UI — simultaneously.",
    approach:
      "Architected the entire system: designed a normalized PostgreSQL schema, built a RESTful API in PHP, implemented secure user authentication, and crafted a responsive frontend with playlist management and streaming controls.",
    impact:
      "A production-quality platform demonstrating full-stack architecture thinking — from database normalization to API contract design to frontend state management.",
    tech: ["JavaScript", "PHP", "PostgreSQL", "REST API", "HTML/CSS"],
    image: projectStreaming,
    github: "https://github.com/MathisMnr/web-streaming-platform",
    highlight: "Full-Stack",
  },
  {
    title: "3D Ballistic Simulator",
    category: "Systems",
    tagline: "Real-time physics in object-oriented C++",
    problem:
      "Simulating 3D ballistic trajectories requires both mathematical precision and performant rendering — a challenge at the intersection of physics and software architecture.",
    approach:
      "Designed a modular OOP architecture in C++ with separated physics computation, rendering pipeline, and configuration layers. Implemented trajectory algorithms with real-time 3D visualization and configurable launch parameters.",
    impact:
      "High-performance simulator with accurate collision detection, showcasing ability to model complex physical systems with clean, extensible code architecture.",
    tech: ["C++", "OOP Architecture", "Physics Engine", "3D Rendering"],
    image: projectBallistic,
    github: "https://github.com/MathisMnr/ballistic-trajectory-simulator",
    highlight: "Performance",
  },
  {
    title: "Automated Dev Environment",
    category: "DevOps",
    tagline: "CI/CD from commit to production",
    problem:
      "Manual deployments across multiple branches are error-prone, slow, and don't scale. Teams need automated, reliable pipelines.",
    approach:
      "Engineered a fully automated GitHub environment using custom Bash scripts — CI/CD pipelines with multi-branch strategies, automated testing gates, and deployment automation from commit to production.",
    impact:
      "Eliminated manual deployment overhead and reduced release errors, demonstrating infrastructure-as-code thinking and DevOps engineering maturity.",
    tech: ["Bash", "GitHub Actions", "CI/CD", "Jenkins", "Linux"],
    image: projectCicd,
    github: "#",
    highlight: "Automation",
  },
  {
    title: "Strive — Sports Community App",
    category: "Mobile",
    tagline: "Connecting athletes through mobile",
    problem:
      "Sports enthusiasts lack a dedicated platform to discover events, form teams, and communicate within their local communities.",
    approach:
      "Designed and built a native Android application using Kotlin and Jetpack Compose with Material Design 3. Implemented event discovery, group management, and real-time messaging with Firebase backend integration.",
    impact:
      "A polished mobile product with modern architecture patterns (MVVM, Compose navigation), demonstrating ability to ship complete mobile experiences from concept to deployment.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "REST API"],
    image: projectSport,
    github: "https://github.com/Goustan-Sermon/Strive",
    highlight: "Mobile",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container px-4" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Engineering <span className="gradient-text">Case Studies</span>
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary mb-4" />
            <p className="text-muted-foreground text-lg max-w-lg">
              Each project is a system I designed and built end-to-end. Click to explore the engineering behind it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground glow-sm"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => {
              const CategoryIcon = categoryIcons[project.category];
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass rounded-2xl overflow-hidden group hover:glow-sm transition-all duration-500 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={512}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      {project.highlight}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {CategoryIcon && (
                        <CategoryIcon
                          size={18}
                          className="text-muted-foreground shrink-0 mt-1"
                        />
                      )}
                    </div>
                    <p className="text-primary/80 text-sm font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.problem}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={15} /> Source
                      </a>
                      <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                        View case study <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case study modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-strong rounded-2xl"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full glass text-foreground hover:bg-card/80 transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-2">
                    {selectedProject.highlight}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    The Problem
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    My Approach
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    Impact & Result
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Github size={16} /> View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
