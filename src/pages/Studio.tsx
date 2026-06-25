import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Studio = () => {
  const [modelType, setModelType] = useState<"free" | "exclusive">("free");

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
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Studio</span>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold mt-4 mb-6 leading-tight">
              The PXP Lab Studio
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore everything we're building—from AI models and software to experiments and future releases.
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* AI Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl font-medium mb-6">AI Models</h2>
              
              <div className="flex bg-card/30 p-1 rounded-lg w-max mb-8 border border-border/40">
                <button
                  onClick={() => setModelType("free")}
                  className={`px-4 py-2 rounded-md text-sm transition-colors ${
                    modelType === "free" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Free
                </button>
                <button
                  onClick={() => setModelType("exclusive")}
                  className={`px-4 py-2 rounded-md text-sm transition-colors ${
                    modelType === "exclusive" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Exclusive
                </button>
              </div>

              <div className="p-8 rounded-2xl border border-border/40 bg-card/10 text-center">
                <p className="font-medium text-lg mb-2">No models have been released yet.</p>
                <p className="text-muted-foreground">
                  Our first AI models are currently in development and will be available here when they're ready.
                </p>
              </div>
            </motion.div>

            {/* Software */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl font-medium mb-2">Software</h2>
              <p className="text-muted-foreground mb-8">
                Desktop applications and business tools built by PXP Lab.
              </p>

              <div className="p-8 rounded-2xl border border-border/40 bg-card/10 text-center">
                <p className="font-medium text-lg">No software has been released yet.</p>
              </div>
            </motion.div>

            {/* Open Source */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl font-medium mb-2">Open Source</h2>
              <p className="text-muted-foreground mb-8">
                Projects and utilities we choose to build in public.
              </p>

              <div className="p-8 rounded-2xl border border-border/40 bg-card/10 text-center">
                <p className="font-medium text-lg">Nothing has been published yet.</p>
              </div>
            </motion.div>

            {/* Studio Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-3xl bg-card border border-border/40"
            >
              <h2 className="font-heading text-2xl font-medium mb-6">Studio Status</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-foreground font-medium">PXP Lab has just launched.</p>
                <p>Every model, tool, and software released by us will appear here as the studio grows.</p>
                <p>Follow our journey as we build practical AI products for businesses, creators, and builders.</p>
              </div>
            </motion.div>

            {/* Powered by Ignition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-6 pt-12 border-t border-border/40"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-black flex items-center justify-center">
                <img src="/ignition-logo.jpg" alt="Ignition in AI Era" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Powered by Ignition in AI Era</p>
                <p className="font-medium mb-2">PXP Lab is the product and software studio of the Ignition in AI Era ecosystem.</p>
                <p className="text-muted-foreground">The community explores ideas.<br/>PXP Lab turns those ideas into products.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
