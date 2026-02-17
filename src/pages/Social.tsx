import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    platform: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/pxplab",
    description: "Follow us for updates, insights, and behind-the-scenes content.",
    featured: "https://www.linkedin.com/posts/pxplab_most-business-owners-dont-lack-ideas-they-activity-7429478347371577345-sLzp?utm_source=share&utm_medium=member_desktop",
  },
];

const Social = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Social</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold mt-4 mb-6">
              Stay connected
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Follow us on social media for the latest updates, project showcases, and digital insights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding border-t border-border/40">
        <div className="container mx-auto">
          <div className="grid gap-6 max-w-2xl">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-border/40 bg-card/30 hover:bg-muted/30 transition-colors flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center shrink-0 group-hover:bg-muted transition-colors">
                  <link.icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-medium mb-1">{link.platform}</h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-2xl"
          >
            <h2 className="font-heading text-2xl font-semibold mb-6">Featured Post</h2>
            <a
              href="https://www.linkedin.com/posts/pxplab_most-business-owners-dont-lack-ideas-they-activity-7429478347371577345-sLzp?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-2xl border border-border/40 bg-card/30 hover:bg-muted/30 transition-colors"
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Most business owners don't lack ideas — they lack the systems to bring them to life."
              </p>
              <Button variant="outline" size="sm" className="gap-2">
                Read on LinkedIn <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Social;
