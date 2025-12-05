import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Monitor, Cog, Database, Video, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description: "Clean, modern websites that convert visitors into customers.",
    color: "primary",
  },
  {
    icon: Cog,
    title: "Automation & Workflows",
    description: "Systems that save hours of manual work every week.",
    color: "secondary",
  },
  {
    icon: Database,
    title: "Data Scraping",
    description: "City or niche-based data extraction for lead generation.",
    color: "accent",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Premium video editing for reels, podcasts, and promos.",
    color: "secondary",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Modern posters, thumbnails, and brand assets.",
    color: "primary",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end digital services for your brand, business, or personal project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/services"
                className="group block glass-card p-6 lg:p-8 h-full hover:border-primary/50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    service.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : service.color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
