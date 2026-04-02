import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2026 Mathis Meunier. Built with passion.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/MathisMnr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/mathis-meunier-084a60265" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:mathis.meunier@isen-ouest.yncrea.fr" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
