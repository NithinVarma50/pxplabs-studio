import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Monitor, Cog, Database, Video, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const webServices = [
  { service: "Single Page Portfolio", price: "₹4,000+" },
  { service: "Multi-Page Portfolio", price: "₹5,000+" },
  { service: "Frontend Website (Business/Personal)", price: "₹6,000+" },
  { service: "Fullstack Website (Backend + Auth + DB)", price: "₹12,000+" },
  { service: "New Page Addition", price: "₹1,500+" },
  { service: "UI / Content Changes", price: "₹500 – ₹1,500" },
];

const automationServices = [
  { service: "Single Automation Workflow", price: "₹3,000+" },
  { service: "Email Automation Setup", price: "₹4,000+" },
  { service: "Full Workflow System (Data → Logic → Email → Sheets)", price: "₹10,000+" },
];

const scrapingServices = [
  { service: "Data Scraping (per city)", price: "₹1,500+" },
  { service: "Restaurant data extraction (per city)", price: "₹1,500+" },
  { service: "Export format", price: "CSV / Excel" },
];

const videoServices = [
  { service: "Short Reels / Shorts (15–30 sec)", price: "₹800+ each" },
  { service: "Long-Form Video Editing", price: "₹3,000+" },
  { service: "Podcast / Interview Edit", price: "₹4,500+" },
  { service: "Promo / Brand Announcement Video", price: "₹3,000 – ₹6,000" },
  { service: "Portfolio Intro / Identity Video", price: "₹3,500+" },
];

const designServices = [
  { service: "Poster Design", price: "₹500 – ₹1,200" },
  { service: "Social Media Post Templates", price: "₹500+" },
  { service: "Logo Design", price: "₹2,000+" },
  { service: "Business Card", price: "₹800+" },
  { service: "YouTube Thumbnail", price: "₹300+" },
  { service: "Event Flyer / Digital Poster", price: "₹700+" },
  { service: "Brochure (Digital / Print Ready)", price: "₹1,500+" },
];

interface ServiceTableProps {
  services: { service: string; price: string }[];
}

const ServiceTable = ({ services }: ServiceTableProps) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left py-3 px-4 font-heading font-semibold">Service</th>
          <th className="text-right py-3 px-4 font-heading font-semibold">Starting Price</th>
        </tr>
      </thead>
      <tbody>
        {services.map((item, index) => (
          <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
            <td className="py-4 px-4 text-muted-foreground">{item.service}</td>
            <td className="py-4 px-4 text-right font-medium text-primary">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Services = () => {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Transparent pricing for all our services. All prices are starting points — 
              final cost depends on project scope and complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-16 lg:py-24" id="web">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold">Web Development</h2>
            </div>
            <ServiceTable services={webServices} />
          </motion.div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-muted/20 to-transparent" id="automation">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Cog className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold">Automation & Workflow System</h2>
            </div>
            <ServiceTable services={automationServices} />
            <div className="mt-6 p-4 rounded-xl bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Tools we use:</span> n8n, Make.com, OpenAI, Notion, Google Sheets, APIs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Scraping */}
      <section className="py-16 lg:py-24" id="scraping">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold">Data Scraping Service</h2>
            </div>
            <ServiceTable services={scrapingServices} />
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-heading font-semibold mb-3">Included Data (as available)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Business Name</li>
                  <li>• Email / Phone</li>
                  <li>• Location</li>
                  <li>• Website</li>
                  <li>• Social Links</li>
                  <li>• Ratings & Reviews</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-heading font-semibold mb-3">Perfect for</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✔ Agencies</li>
                  <li>✔ Freelancers</li>
                  <li>✔ Lead Generation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Editing */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-muted/20 to-transparent" id="video">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Video className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold">Video Editing</h2>
                <p className="text-muted-foreground text-sm">by Koushik</p>
              </div>
            </div>
            <ServiceTable services={videoServices} />
          </motion.div>
        </div>
      </section>

      {/* Graphic Design */}
      <section className="py-16 lg:py-24" id="design">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold">Graphic Design & Posters</h2>
                <p className="text-muted-foreground text-sm">by Koushik</p>
              </div>
            </div>
            <ServiceTable services={designServices} />
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
              <p className="text-sm italic text-foreground">
                "Clean, modern design that fits your brand — not random templates."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Get a custom quote for your project. We'll get back to you within 24 hours.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
