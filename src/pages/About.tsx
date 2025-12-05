import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Code, Video, Palette, Cog } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
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
              Who <span className="gradient-text">We Are</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Pixelprophett Labs is a compact digital studio providing end-to-end digital presence — 
              your identity, systems, and content. We turn ideas into systems and systems into screens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text-secondary">Team</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Nithin */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 lg:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-light flex items-center justify-center">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Nithin</h3>
                  <p className="text-muted-foreground">Web Developer & Automation</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Builds websites & workflow systems that save hours of manual work. 
                Specializes in clean, modern interfaces and automation setups that actually work.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  React
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  n8n
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Make.com
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  APIs
                </span>
              </div>
            </motion.div>

            {/* Koushik */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 lg:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-coral-light flex items-center justify-center">
                  <Video className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Koushik</h3>
                  <p className="text-muted-foreground">Video Editing & Graphic Design</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Creates modern and aesthetic content that enhances your brand presence. 
                From reels to posters, delivers premium quality that makes you stand out.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                  Premiere Pro
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                  After Effects
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                  Photoshop
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                  Figma
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Personal Touch",
                description: "Direct communication with the people actually doing the work.",
              },
              {
                title: "No Middlemen",
                description: "Efficient pricing without agency overheads.",
              },
              {
                title: "Full-Stack Team",
                description: "Code, design, video, automation — all under one roof.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
