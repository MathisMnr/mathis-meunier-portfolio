import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Refined gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/5" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 justify-center md:justify-start mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground">
              <Sparkles size={14} className="text-primary" />
              Open to apprenticeship — Software / Web / Mobile — 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-5"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Mathis Meunier</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 justify-center md:justify-start mb-6"
          >
            <Code2 size={22} className="text-primary" />
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-secondary-foreground">
              Software Engineer & System Builder
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 mx-auto md:mx-0 text-balance leading-relaxed"
          >
            I design and build complete systems — from hardware to full-stack apps.
            Driven by curiosity, shaped by international experience, focused on impact.
          </motion.p>

          {/* Inline code snippet accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden md:flex items-center gap-2 mb-10 font-mono text-sm text-muted-foreground"
          >
            <Terminal size={14} className="text-primary" />
            <span className="text-primary">const</span> mindset
            <span className="text-muted-foreground/60">=</span>
            <span className="text-accent">"build · ship · iterate"</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-sm hover:glow-md"
            >
              View Case Studies
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full glass font-medium text-foreground hover:bg-card/80 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
