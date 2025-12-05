import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Monitor, Cog, Database, Video, Palette, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", name: "All Work", icon: null },
  { id: "websites", name: "Websites", icon: Monitor },
  { id: "automation", name: "Automation", icon: Cog },
  { id: "scraping", name: "Data Scraping", icon: Database },
  { id: "video", name: "Video Editing", icon: Video },
  { id: "design", name: "Graphic Design", icon: Palette },
];

const projects = [
  {
    id: 1,
    category: "websites",
    title: "Portfolio Website",
    description: "Clean single-page portfolio for a freelance photographer",
    tools: ["React", "Tailwind", "Framer Motion"],
    color: "primary",
  },
  {
    id: 2,
    category: "websites",
    title: "E-commerce Landing",
    description: "High-converting landing page for a fashion brand",
    tools: ["Next.js", "Stripe", "Supabase"],
    color: "primary",
  },
  {
    id: 3,
    category: "automation",
    title: "Lead Nurturing System",
    description: "Automated email sequences based on user behavior",
    tools: ["n8n", "Gmail", "Google Sheets"],
    color: "accent",
  },
  {
    id: 4,
    category: "automation",
    title: "Social Media Scheduler",
    description: "Content scheduling workflow with AI caption generation",
    tools: ["Make.com", "OpenAI", "Buffer"],
    color: "accent",
  },
  {
    id: 5,
    category: "scraping",
    title: "Restaurant Database",
    description: "5000+ restaurant listings from Bangalore with contact info",
    tools: ["Python", "Selenium", "Excel"],
    color: "secondary",
  },
  {
    id: 6,
    category: "scraping",
    title: "Agency Lead List",
    description: "Marketing agency data from top 10 Indian cities",
    tools: ["Node.js", "Puppeteer", "CSV"],
    color: "secondary",
  },
  {
    id: 7,
    category: "video",
    title: "Product Launch Reel",
    description: "30-second promotional reel for a tech startup",
    tools: ["Premiere Pro", "After Effects"],
    color: "secondary",
  },
  {
    id: 8,
    category: "video",
    title: "Podcast Episode",
    description: "Full podcast edit with intro, transitions, and captions",
    tools: ["DaVinci Resolve", "Audition"],
    color: "secondary",
  },
  {
    id: 9,
    category: "design",
    title: "Event Poster Series",
    description: "10 posters for a music festival campaign",
    tools: ["Photoshop", "Illustrator"],
    color: "accent",
  },
  {
    id: 10,
    category: "design",
    title: "Brand Identity Kit",
    description: "Logo, business cards, and social templates",
    tools: ["Figma", "Illustrator"],
    color: "accent",
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              A showcase of projects we've delivered across web development, automation, 
              data services, video editing, and graphic design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 sticky top-16 lg:top-20 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat.icon && <cat.icon size={16} />}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Placeholder Image */}
                <div
                  className={`aspect-video relative ${
                    project.color === "primary"
                      ? "bg-gradient-to-br from-primary/20 to-cyan-light/10"
                      : project.color === "secondary"
                      ? "bg-gradient-to-br from-secondary/20 to-coral-light/10"
                      : "bg-gradient-to-br from-accent/20 to-accent/10"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-4xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Want Your Project <span className="gradient-text-secondary">Here</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's create something amazing together.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
