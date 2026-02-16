import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "STANDARD — Minimal Wallpaper Platform",
        description: "A distraction-free wallpaper experience designed for daily use. No login, no ads, no clutter — just open, preview and download.",
        image: "/standard-preview.png", // We might need to handle the image later or use a placeholder/gradient
        link: "https://standard-ten.vercel.app/",
        tags: ["Web App", "PWA", "Minimalist"],
        badge: "Installable Web App"
    }
];

const FeaturedWork = () => {
    return (
        <section className="section-padding border-t border-border/40">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Featured Work</span>
                    <h2 className="font-heading text-3xl lg:text-4xl font-semibold mt-4">
                        Selected Projects
                    </h2>
                </motion.div>

                <div className="grid gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative grid md:grid-cols-2 gap-8 items-center"
                        >
                            {/* Content */}
                            <div className="order-2 md:order-1">
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                                    {project.badge}
                                </div>
                                <h3 className="font-heading text-2xl lg:text-3xl font-medium mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs border border-border px-2 py-1 rounded-md text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group-hover:gap-3"
                                >
                                    Try it live
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Visual/Preview - Using a gradient placeholder for now if no image */}
                            <div className="order-1 md:order-2 aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-border/40 group-hover:border-primary/50 transition-colors flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <h4 className="text-4xl font-heading font-bold text-white/10 select-none">STANDARD</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
