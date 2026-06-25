import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Websites",
  "AI Automation",
  "AI Marketing Videos",
  "Video Editing",
  "Data & Lead Intelligence",
  "Software Development",
  "Open-Source Software",
  "Free AI Tools",
];

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center relative pt-12 pb-20 justify-center text-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <div className="max-w-3xl flex flex-col items-center">
          {/* Ignition Badge */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm hover:bg-card/70 transition-colors"
          >
            <img src="/ignition-logo.jpg" alt="Ignition in AI Era" className="w-5 h-5 rounded-full object-cover" />
            <span className="text-xs text-muted-foreground">
              Powered by <span className="text-foreground font-medium">Ignition in AI Era</span>
            </span>
          </motion.a>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
          >
            PXP Lab
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">AI Studio for Modern Businesses</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed"
          >
            From high-performance websites and AI automation to marketing content, software, and business intelligence — we build practical solutions that create real impact.
          </motion.p>

          {/* Services checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 max-w-2xl"
          >
            {services.map((service) => (
              <div key={service} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-foreground shrink-0" strokeWidth={2.5} />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" size="lg">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
