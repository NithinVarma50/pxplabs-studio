import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StackedImageHover } from "@/components/ui/hover-deck-fx";
import { ScrollingHeroMarquee } from "@/components/ui/scrolling-hero-marquee";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
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

const slogans = [
  { prefix: "Your", words: ["Presence", "Brand", "Idea"], suffix: "deserves expert solutions" },
  { prefix: "Transform your", words: ["Workflow", "Business", "Future"], suffix: "with smart automation" },
  { prefix: "Crafting", words: ["Digital Experiences", "Websites", "User Flows"], suffix: "that convert" },
  { prefix: "Empowering", words: ["Creators", "Startups", "Agencies"], suffix: "with modern tech" },
  { prefix: "", words: ["Design", "Strategy", "Execution"], suffix: "that sets you apart" },
  { prefix: "Turn", words: ["Data", "Insights", "Analytics"], suffix: "into actionable growth" },
  { prefix: "", words: ["Video", "Content", "Storytelling"], suffix: "that captures attention" },
  { prefix: "Building", words: ["Trust", "Authority", "Influence"], suffix: "through premium design" },
  { prefix: "", words: ["Seamless", "Fast", "Scalable"], suffix: "solutions for your business" },
  { prefix: "Your", words: ["Vision", "Goal", "Project"], suffix: "realized with precision" },
];

const Hero = () => {
  const [currentSlogan, setCurrentSlogan] = useState(slogans[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * slogans.length);
    setCurrentSlogan(slogans[randomIndex]);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center relative pt-12 pb-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
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

            {/* Scrolling marquee */}
            <div className="mb-6 lg:-ml-4">
              <ScrollingHeroMarquee
                text="We design, build, and automate digital experiences that help businesses grow faster."
                fontSize="clamp(1rem, 2.2vw, 1.75rem)"
                rowHeight={60}
                durationSec={22}
                bottomRotateXDeg={-10}
                bottomSkewXDeg={10}
              />
            </div>

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
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 mb-10 max-w-2xl"
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

            {/* Animated Text Cycle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-xl lg:text-2xl font-light text-left text-muted-foreground">
                {currentSlogan.prefix}{" "}
                <AnimatedTextCycle
                  words={currentSlogan.words}
                  interval={3000}
                  className={"text-foreground font-semibold"}
                />{" "}
                {currentSlogan.suffix}
              </h2>
            </motion.div>
          </div>

          {/* Hero Image Stack (money) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-20 lg:mt-0 w-full flex justify-center lg:block origin-center lg:origin-left"
          >
            <StackedImageHover
              className="!w-[280px] !h-[115px] sm:!w-[500px] sm:!h-[220px] lg:!w-[640px] lg:!h-[260px]"
              images={[
                "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
