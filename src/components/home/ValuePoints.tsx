import { motion } from "framer-motion";
import { Zap, Sparkles, Clock, Film, DollarSign } from "lucide-react";

const valuePoints = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnarounds without compromising quality.",
  },
  {
    icon: Sparkles,
    title: "Clean UI with Animations",
    description: "Modern designs with smooth, intentional motion.",
  },
  {
    icon: Clock,
    title: "Reduce Manual Work",
    description: "Systems that automate repetitive tasks.",
  },
  {
    icon: Film,
    title: "Premium Video Editing",
    description: "Professional-grade editing for all formats.",
  },
  {
    icon: DollarSign,
    title: "Affordable & Modular",
    description: "Pay for what you need, scale as you grow.",
  },
];

const ValuePoints = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Why <span className="gradient-text-secondary">Choose Us</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {valuePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all"
            >
              <point.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">{point.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Expanded descriptions on larger screens */}
        <div className="hidden lg:grid grid-cols-5 gap-6 mt-12">
          {valuePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePoints;
