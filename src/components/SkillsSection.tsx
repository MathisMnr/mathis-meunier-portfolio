import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = ["All", "Programming", "Web", "Mobile", "DevOps"];

const skills = [
  { name: "C++", category: "Programming", level: 90 },
  { name: "C", category: "Programming", level: 85 },
  { name: "Java", category: "Programming", level: 85 },
  { name: "Python", category: "Programming", level: 80 },
  { name: "C#", category: "Programming", level: 78 },
  { name: "JavaScript", category: "Web", level: 88 },
  { name: "HTML / CSS", category: "Web", level: 92 },
  { name: "PHP", category: "Web", level: 80 },
  { name: "REST API", category: "Web", level: 85 },
  { name: "PostgreSQL", category: "Web", level: 82 },
  { name: "Kotlin", category: "Mobile", level: 80 },
  { name: "Jetpack Compose", category: "Mobile", level: 78 },
  { name: "GitHub", category: "DevOps", level: 90 },
  { name: "Bash / Linux", category: "DevOps", level: 85 },
  { name: "CI/CD", category: "DevOps", level: 82 },
  { name: "Jenkins / GitLab", category: "DevOps", level: 75 },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground glow-sm"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              className="glass rounded-xl p-5 hover:glow-sm transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground">{skill.name}</h3>
                <span className="text-xs text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 block">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
