import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ignitionLogo from "@/assets/ignition-logo.jpg.asset.json";

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
    <section className="min-h-[90vh] flex items-center relative pt-12 pb-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Ignition Badge */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm hover:bg-card/70 transition-colors"
          >
            <img src={ignitionLogo.url} alt="Ignition in AI Era" className="w-5 h-5 rounded-full object-cover" />
            <span className="text-xs text-muted-foreground">
              Powered by <span className="text-foreground font-medium">Ignition in AI Era</span>
            </span>
          </motion.a>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6"
          >
            PXP Lab
            <br />
            <span className="text-muted-foreground">AI Studio for</span>
            <br />
            Modern Businesses
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mb-4 leading-relaxed"
          >
            We design, build, and automate digital experiences that help businesses grow faster.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed"
          >
            From high-performance websites and AI automation to marketing content, software, and business intelligence — we build practical solutions that create real impact.
          </motion.p>

          {/* Services checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 mb-10 max-w-3xl"
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
            className="flex flex-wrap items-center gap-4"
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

          {/* Small caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-xs text-muted-foreground/70"
          >
            Building practical AI solutions for modern businesses.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
