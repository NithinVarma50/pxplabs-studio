import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Ecosystem = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Ecosystem</span>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold mt-4 mb-6 leading-tight">
              More Than a Studio
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PXP Lab is part of a larger ecosystem built around learning, building, and applying AI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Each part has a different purpose, but together they help people move from knowledge to execution.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Ignition */}
            <motion.a
              href="https://www.ignitioninaiera.space/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl border border-border/40 bg-card/30 hover:bg-card/40 transition-colors block group cursor-pointer"
            >
              <h2 className="font-heading text-2xl font-semibold mb-4 flex items-center gap-3 group-hover:underline">
                <span className="text-3xl">🚀</span> Ignition in AI Era
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A growing community of 3,000+ builders, founders, students, creators, developers, and AI enthusiasts exploring artificial intelligence, startups, and innovation.
                </p>
                <p>
                  Through webinars, workshops, hackathons, founder talks, and community events, Ignition brings ambitious people together to learn, collaborate, and build.
                </p>
              </div>
            </motion.a>

            {/* IgnitePedia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl border border-border/40 bg-card/30"
            >
              <h2 className="font-heading text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">📚</span> IgnitePedia
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The research and knowledge platform of Ignition in AI Era.
                </p>
                <p>
                  Explore research papers, case studies, playbooks, guides, and deep dives covering AI, startups, technology, business, and the future of innovation.
                </p>
              </div>
            </motion.div>

            {/* IgnitePedia Exclusive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl border border-border/40 bg-card/30"
            >
              <h2 className="font-heading text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">⭐</span> IgnitePedia Exclusive
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Premium research, implementation guides, builder playbooks, and curated resources designed for founders, professionals, and serious builders looking to go deeper.
              </p>
            </motion.div>

            {/* PXP Lab */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl border border-border/40 bg-card/30"
            >
              <h2 className="font-heading text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">💼</span> PXP Lab
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground">
                  The execution layer of the ecosystem.
                </p>
                <p>
                  While Ignition focuses on community, learning, and research, PXP Lab helps businesses apply AI through websites, automation, software, AI content, and digital solutions.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-2xl bg-card border border-border/40 text-center"
          >
            <h3 className="font-heading text-2xl font-semibold mb-6">One Ecosystem. Different Missions.</h3>
            <div className="space-y-3 text-lg">
              <p><span className="text-muted-foreground">Learn with</span> Ignition.</p>
              <p><span className="text-muted-foreground">Research with</span> IgnitePedia.</p>
              <p><span className="text-muted-foreground">Build with</span> PXP Lab.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Ecosystem;
