import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const webServices = [
  { service: "Single Page Portfolio", price: "From ₹4,000" },
  { service: "Multi-Page Portfolio", price: "From ₹5,000" },
  { service: "Frontend Website", price: "From ₹6,000" },
  { service: "Fullstack Website", price: "From ₹12,000" },
  { service: "New Page Addition", price: "From ₹1,500" },
  { service: "UI / Content Changes", price: "From ₹500" },
];

const automationServices = [
  { service: "Automation Workflows", price: "From ₹3,000" },
];

const scrapingServices = [
  { service: "Data Scraping", price: "From ₹1,500" },
];

const videoServices = [
  { service: "Short Reels (15–30 sec)", price: "From ₹800" },
  { service: "Long-Form Video", price: "From ₹3,000" },
  { service: "Podcast / Interview", price: "From ₹4,500" },
  { service: "Promo Video", price: "From ₹3,000" },
  { service: "Portfolio Intro", price: "From ₹3,500" },
  { service: "Montage", price: "From ₹1,500" },
  { service: "Content Creation", price: "From ₹2,000" },
];

const aiVideoServices = [
  { service: "AI Marketing Video", price: "From ₹2,500" },
  { service: "AI Face Swap Video", price: "From ₹1,500" },
  { service: "AI Video Editing", price: "From ₹2,000" },
  { service: "AI Voiceover (ElevenLabs)", price: "From ₹1,000" },
  { service: "AI Product Showcase", price: "From ₹3,000" },
];

const commercialServices = [
  { service: "Advertisements (Shoot + Edit)", price: "From ₹15,000" },
  { service: "Trailer Cuts", price: "From ₹4,000" },
  { service: "Documentary", price: "From ₹2,000" },
  { service: "Advanced After Effects", price: "From ₹3,000" },
];

const designServices = [
  { service: "Poster Design", price: "From ₹500" },
  { service: "Social Media Templates", price: "From ₹500" },
  { service: "Logo Design", price: "From ₹200" },
  { service: "Business Card (Design Only)", price: "From ₹200" },
  { service: "YouTube Thumbnail", price: "From ₹300" },
  { service: "Brochure", price: "From ₹300" },
];

interface ServiceSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  services: { service: string; price: string }[];
  note?: string;
}

const ServiceSection = ({ id, number, title, subtitle, services, note }: ServiceSectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="py-16 border-t border-border/40"
  >
    <div className="flex items-start gap-8 mb-8">
      <span className="text-xs text-muted-foreground font-mono">{number}</span>
      <div>
        <h2 className="font-heading text-2xl font-medium">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
    </div>

    <div className="ml-12 lg:ml-16">
      <div className="space-y-0">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b border-border/30"
          >
            <span className="text-muted-foreground">{item.service}</span>
            <span className="font-medium">{item.price}</span>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-6 text-sm text-muted-foreground">{note}</p>
      )}
    </div>
  </motion.section>
);

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Services</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold mt-4 mb-6">
              Transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              All prices listed are starting points. Final quotes are customized based on project complexity (backend, API integrations, etc.).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <div className="container mx-auto pb-24">
        <ServiceSection
          id="web"
          number="01"
          title="Website Design & Development"
          subtitle="Landing pages, portfolios, SaaS, dashboards, custom web apps"
          services={webServices}
        />
        <ServiceSection
          id="automation"
          number="02"
          title="AI Automation"
          subtitle="Workflows, integrations, internal tools, business systems"
          services={automationServices}
          note="Tools: n8n, Make.com, OpenAI, Lovable Cloud, Notion, Google Sheets, APIs"
        />
        <ServiceSection
          id="scraping"
          number="03"
          title="Data & Lead Intelligence"
          subtitle="Lead research, scraping, CSV enrichment, automation-ready datasets"
          services={scrapingServices}
          note="Includes: Business name, email, phone, location, website, social links, ratings. Export: CSV/Excel"
        />
        <ServiceSection
          id="ai-video"
          number="04"
          title="AI Marketing Content"
          subtitle="Powered by RunwayML, Kling, Veo & ElevenLabs"
          services={aiVideoServices}
        />
        <ServiceSection
          id="video"
          number="05"
          title="Video Editing"
          subtitle="For creators, founders, YouTube channels, podcasts, brands"
          services={videoServices}
        />
        <ServiceSection
          id="commercial"
          number="06"
          title="Commercial & Documentary"
          services={commercialServices}
        />
        <ServiceSection
          id="software"
          number="07"
          title="Custom Software"
          subtitle="Internal tools, desktop apps, AI utilities, dashboards, automation"
          services={[
            { service: "Internal Business Tool", price: "From ₹8,000" },
            { service: "Desktop / Cross-platform App", price: "From ₹15,000" },
            { service: "AI Utility / Mini SaaS", price: "From ₹10,000" },
            { service: "Custom Dashboard", price: "From ₹6,000" },
          ]}
        />
        <ServiceSection
          id="oss"
          number="08"
          title="Open Source & Free AI Tools"
          subtitle="Production-ready templates and free AI tools for builders"
          services={[
            { service: "Open-Source Templates", price: "Free" },
            { service: "Free AI Tools", price: "Free" },
            { service: "Custom OSS Sponsorship", price: "On request" },
          ]}
        />
        <ServiceSection
          id="design"
          number="09"
          title="Graphic Design"
          services={designServices}
        />
      </div>

      {/* CTA */}
      <section className="section-padding border-t border-border/40">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="font-heading text-3xl font-semibold mb-4">
              Ready to start?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a custom quote for your project.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
