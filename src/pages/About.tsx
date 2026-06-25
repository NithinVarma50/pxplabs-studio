import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Linkedin, Globe, ArrowUpRight } from "lucide-react";


const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">About</span>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold mt-4 mb-8 leading-tight">
              We Build More Than Websites
            </h1>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                PXP Lab is an AI-focused digital studio helping businesses modernize their online presence, automate operations, create better marketing content, and develop custom software.
              </p>
              <p>
                Our goal isn't simply to deliver projects. It's to build digital systems that continue creating value long after launch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ignition Badge Section */}
      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl border border-border/40 bg-card/30 hover:bg-card/50 transition-colors max-w-3xl"
          >
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-black flex items-center justify-center">
              <img src="/ignition-logo.jpg" alt="Ignition in AI Era" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Powered by</p>
              <h3 className="font-heading text-lg font-medium mb-1">Ignition in AI Era</h3>
              <p className="text-sm text-muted-foreground">
                A community and ecosystem focused on AI, innovation, research, and builders.
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 hidden sm:block" />
          </motion.a>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Team</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold mt-4">
              Meet the team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Nithin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl border border-border/40 bg-card/30"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border border-border/50">
                <img src="/nithin.webp" alt="Nithin" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl font-medium mb-1">Nithin</h3>
              <p className="text-sm text-muted-foreground mb-6">Founder • Software, AI & Automation</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Building websites, AI tools, automation systems, software products, and digital experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/nithin-varma-801227318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://pixelprophett-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Koushik */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl border border-border/40 bg-card/30"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border border-border/50">
                <img src="/koushik.jpg" alt="Koushik" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl font-medium mb-1">Koushik</h3>
              <p className="text-sm text-muted-foreground mb-6">Creative Lead</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Video Editing • Branding • Motion Design • Graphics
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/koushik-aila-32a621385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Saiteja */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl border border-border/40 bg-card/30"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border border-border/50">
                <img src="/saiteja.jpg" alt="Saiteja" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-heading text-xl font-medium mb-1">Saiteja</h3>
              <p className="text-sm text-muted-foreground mb-6">AI Creative Engineer</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AI Video Production • Short-form Content • Generative Media
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Process</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold mt-4">
              How we work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Listen & Plan",
                desc: "We start by understanding your vision and requirements. No jargon, just clear goals.",
              },
              {
                step: "02",
                title: "Build & Refine",
                desc: "We create with precision, keeping you in the loop. Iterative feedback ensures we hit the mark.",
              },
              {
                step: "03",
                title: "Launch & Scale",
                desc: "We deliver a polished product ready for the world, and help you understand how to use it.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-6xl font-heading font-bold text-muted/20 absolute -top-8 -left-4 -z-10">
                  {item.step}
                </span>
                <h3 className="font-heading text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
