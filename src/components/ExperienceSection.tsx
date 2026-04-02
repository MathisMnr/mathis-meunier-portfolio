import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Software Engineering Intern",
    company: "LINET France",
    period: "2024 — 2 months",
    highlights: [
      "Managed inventory systems and streamlined order preparation workflows",
      "Handled IT administration tasks and created standardized usage procedures",
      "Demonstrated autonomy and adaptability in an industrial environment",
    ],
  },
  {
    type: "education",
    role: "Double Degree — Computer Science",
    company: "UQAC, Chicoutimi, Canada",
    period: "2024 — 2025",
    highlights: [
      "One-year international program strengthening cross-cultural communication and adaptability",
      "Advanced coursework in algorithms, distributed systems, and software architecture",
      "Collaborated with international teams on research-level engineering projects",
    ],
  },
  {
    type: "education",
    role: "Engineering Degree — Software & Digital",
    company: "ISEN Nantes",
    period: "2021 — 2026",
    highlights: [
      "Comprehensive curriculum: systems programming, web development, mobile, DevOps, and electronics",
      "Hands-on project-based learning with real-world engineering challenges each semester",
      "Graduating 2026 — currently seeking a 1-year apprenticeship in software engineering",
    ],
  },
  {
    type: "education",
    role: "Baccalauréat Scientifique — mention AB",
    company: "Lycée Sainte-Ursule, Tours",
    period: "2021",
    highlights: [
      "Mathematics and Physics specializations",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-primary glow-sm" />

                <div className="glass rounded-xl p-6 hover:glow-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                      <span className="text-primary text-sm flex items-center gap-1.5">
                        {exp.type === "work" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                        {exp.company}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm flex items-center gap-1.5">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
