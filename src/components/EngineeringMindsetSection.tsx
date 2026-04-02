import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Boxes, GitBranch, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Problem First",
    description:
      "I start with the problem, not the technology. Understanding constraints and defining the right abstraction is where real engineering begins.",
    accent: "from-primary/20 to-transparent",
  },
  {
    icon: Boxes,
    title: "System Thinking",
    description:
      "I design components that work together — from database schemas to API contracts to UI states. Every layer is intentional.",
    accent: "from-accent/20 to-transparent",
  },
  {
    icon: GitBranch,
    title: "Ship & Iterate",
    description:
      "I believe in working software over perfect plans. Build, deploy, measure, improve — fast feedback loops drive better outcomes.",
    accent: "from-primary/20 to-transparent",
  },
  {
    icon: Wrench,
    title: "Own the Stack",
    description:
      "From soldering circuits to writing CI/CD pipelines — I'm comfortable across the full stack because understanding the system means understanding every layer.",
    accent: "from-accent/20 to-transparent",
  },
];

const EngineeringMindsetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mindset" className="py-24 relative">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Engineering <span className="gradient-text">Mindset</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-4" />
          <p className="text-muted-foreground text-lg max-w-lg">
            I don't just code features — I think in systems, trade-offs, and long-term impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative glass rounded-2xl p-7 hover:glow-sm transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <pillar.icon
                    size={20}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringMindsetSection;
