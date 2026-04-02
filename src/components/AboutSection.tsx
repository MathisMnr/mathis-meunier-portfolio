import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Layers, Zap, Globe } from "lucide-react";

const strengths = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "I start from constraints and work backward to elegant, working systems",
  },
  {
    icon: Layers,
    title: "Full-Stack Builder",
    desc: "From soldered circuits to deployed APIs — I own every layer of the stack",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    desc: "New stack? Give me a weekend. I ship production code in days, not weeks",
  },
  {
    icon: Globe,
    title: "International",
    desc: "Double degree in Canada — adaptable across cultures, languages, and teams",
  },
];

const stats = [
  { value: "5+", label: "End-to-end projects" },
  { value: "6", label: "Programming languages" },
  { value: "1 yr", label: "International experience" },
  { value: "2026", label: "Engineering graduation" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a software engineering student at ISEN Nantes, graduating in 2026. I don't
              just write code — I architect systems. From designing electronic circuits to
              building full-stack platforms, I think in components, interfaces, and trade-offs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A year-long double degree at UQAC in Canada sharpened my adaptability and
              cross-cultural communication. I learn fast, work autonomously, and thrive in
              environments where I can build things that matter.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Patient, creative, persistent. I'm looking for a 1-year apprenticeship where
              I can bring engineering depth — not just development speed.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-4 gap-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass rounded-xl p-5 hover:glow-sm transition-all duration-300 group"
              >
                <s.icon
                  size={28}
                  className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
