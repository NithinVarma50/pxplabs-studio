import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description: "Landing pages, business websites, portfolios, SaaS platforms, dashboards, and custom web applications.",
    link: "/services#web",
  },
  {
    number: "02",
    title: "AI Automation",
    description: "Automate repetitive work with AI workflows, integrations, internal tools, and business systems.",
    link: "/services#automation",
  },
  {
    number: "03",
    title: "Data & Lead Intelligence",
    description: "Business data collection, CSV enrichment, lead research, scraping, and automation-ready datasets.",
    link: "/services#scraping",
  },
  {
    number: "04",
    title: "AI Marketing Content",
    description: "Short-form videos, product showcases, AI commercials, promotional content, and social campaigns.",
    link: "/services#ai-video",
  },
  {
    number: "05",
    title: "Video Editing",
    description: "Professional editing for creators, founders, startups, YouTube channels, podcasts, and brands.",
    link: "/services#video",
  },
  {
    number: "06",
    title: "Custom Software",
    description: "Internal business tools, desktop applications, AI utilities, dashboards, and automation software.",
    link: "/services#software",
  },
  {
    number: "07",
    title: "Open Source & AI Tools",
    description: "Production-ready software, templates, and free AI tools built for founders, freelancers, and businesses.",
    link: "/services#oss",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding border-t border-border/40">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Services</span>
          <h2 className="font-heading text-3xl lg:text-5xl font-semibold mt-4 leading-tight">
            Building AI-Powered<br />Digital Solutions
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Helping startups, creators, local businesses, and growing companies build better systems with AI.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={service.link}
                className="group flex items-start justify-between py-8 border-t border-border/40 hover:bg-muted/30 -mx-2 px-2 sm:-mx-6 sm:px-6 transition-colors"
              >
                <div className="flex items-start gap-8">
                  <span className="text-xs text-muted-foreground font-mono pt-1">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-medium mb-2 group-hover:text-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
