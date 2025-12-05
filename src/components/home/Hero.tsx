import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StackedImageHover } from "@/components/ui/hover-deck-fx";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                <span className="w-8 h-px bg-muted-foreground/50" />
                Digital Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6"
            >
              We build websites, automations, and content that{" "}
              <span className="text-muted-foreground">actually work.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              A two-person studio by Nithin & Koushik — delivering clean interfaces,
              time-saving workflows, and modern content for creators, startups, and agencies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="heroOutline" size="lg">
                  View Work
                </Button>
              </Link>
            </motion.div>

            {/* Services tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-3"
            >
              {["Web Development", "Automation", "Data Scraping", "Video Editing", "Design"].map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 text-xs text-muted-foreground border border-border/50 rounded-full"
                >
                  {service}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Hero Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <StackedImageHover
              images={[
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558655146-d09347e0b7a8?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
              ]}
              width={500}
              height={350}
              rotateDeg={-5}
              skewDeg={5}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
