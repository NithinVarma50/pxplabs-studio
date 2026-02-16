import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
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
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Products</span>
                        <h1 className="font-heading text-4xl lg:text-5xl font-semibold mt-4 mb-6">
                            Tools for the modern web
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            "We don’t just design pages — we build working products people can use."
                        </p>
                    </motion.div>

                    <div className="grid gap-12">
                        {/* STANDARD Product */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group border border-border/40 rounded-3xl overflow-hidden bg-card/30"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 w-fit">
                                        <Smartphone className="w-3 h-3" />
                                        Installable Web App
                                    </div>

                                    <h2 className="font-heading text-3xl font-semibold mb-4">
                                        STANDARD
                                    </h2>
                                    <p className="text-muted-foreground text-lg mb-6">
                                        A distraction-free wallpaper experience designed for daily use.
                                        No login, no ads, no clutter — just open, preview and download.
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {["No login required", "No advertisements", "Instant download", "PWA Support (Install on mobile/desktop)"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <Check className="w-4 h-4 text-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href="https://standard-ten.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="hero" size="lg">
                                                Try it live
                                                <ArrowUpRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </a>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-border/40">
                                        <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                                            <Download className="w-4 h-4" />
                                            How to install properly
                                        </h4>
                                        <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                                            <li>Open the website</li>
                                            <li>Tap browser menu (top right)</li>
                                            <li>Select Install App / Add to Home Screen</li>
                                            <li>Use it like a normal app</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-[300px] md:min-h-full flex items-center justify-center relative p-8">
                                    {/* Placeholder for product screenshot */}
                                    <div className="absolute inset-0 bg-black/20" />
                                    <h3 className="text-6xl font-heading font-bold text-white/10 select-none rotate-[-10deg]">STANDARD</h3>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Products;
