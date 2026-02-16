import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Work = () => {
    return (
        <Layout>
            <section className="section-padding">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mb-16"
                    >
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Work</span>
                        <h1 className="font-heading text-4xl lg:text-5xl font-semibold mt-4 mb-6">
                            Case Studies
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Real world applications solving real world problems.
                        </p>
                    </motion.div>

                    <div className="grid gap-20">
                        {/* STANDARD Case Study */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group"
                        >
                            {/* Project Header */}
                            <div className="grid lg:grid-cols-2 gap-12 mb-12">
                                <div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
                                        Product Design & Development
                                    </div>
                                    <h2 className="font-heading text-4xl font-semibold mb-6">
                                        STANDARD — Minimal Wallpaper Platform
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                        A distraction-free wallpaper experience designed for daily use.
                                        STANDARD is a lightweight wallpaper platform focused on calm browsing and simplicity.
                                        No login, no ads, no clutter — just open, preview and download.
                                    </p>
                                    <a href="https://standard-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <Button variant="hero">
                                            Visit Website
                                            <ArrowUpRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </a>
                                </div>
                                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden flex items-center justify-center relative border border-border/40">
                                    <div className="absolute inset-0 bg-black/20" />
                                    <h3 className="text-5xl font-heading font-bold text-white/10 select-none">STANDARD</h3>
                                </div>
                            </div>

                            {/* Key Features / What this shows */}
                            <div className="bg-card/30 border border-border/40 rounded-3xl p-8 md:p-12">
                                <h3 className="font-heading text-2xl font-semibold mb-8">What this product demonstrates</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        "Clean and practical UI decisions",
                                        "Real user interaction flow",
                                        "Performance-focused build",
                                        "Installable web-app experience",
                                        "Product thinking beyond static websites"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Work;
