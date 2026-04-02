import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");

    // mailto fallback — opens user's email client with pre-filled fields
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:mathis.meunier@isen-ouest.yncrea.fr?subject=${subject}&body=${body}`;

    setStatus("sent");
    form.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-4" />
          <p className="text-muted-foreground text-lg max-w-md">
            Looking for a motivated software engineering apprentice? Let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                minLength={2}
                maxLength={100}
                className="w-full px-5 py-3 rounded-xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                maxLength={255}
                className="w-full px-5 py-3 rounded-xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                minLength={10}
                maxLength={1000}
                className="w-full px-5 py-3 rounded-xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-sm hover:glow-md disabled:opacity-50"
            >
              {status === "sent" ? (
                "Message Sent! ✓"
              ) : status === "sending" ? (
                "Opening email..."
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground">
              This will open your default email client. You can also reach me directly at the contacts below.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center gap-6"
          >
            <a
              href="mailto:mathis.meunier@isen-ouest.yncrea.fr"
              className="flex items-center gap-4 glass rounded-xl p-5 hover:glow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Email</span>
                <p className="text-foreground font-medium">mathis.meunier@isen-ouest.yncrea.fr</p>
              </div>
            </a>

            <a
              href="tel:+33783164142"
              className="flex items-center gap-4 glass rounded-xl p-5 hover:glow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Phone</span>
                <p className="text-foreground font-medium">07 83 16 41 42</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mathis-meunier-084a60265"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-xl p-5 hover:glow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin size={22} className="text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">LinkedIn</span>
                <p className="text-foreground font-medium">Mathis Meunier</p>
              </div>
            </a>

            <a
              href="https://github.com/MathisMnr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-xl p-5 hover:glow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github size={22} className="text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">GitHub</span>
                <p className="text-foreground font-medium">github.com/MathisMnr</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
