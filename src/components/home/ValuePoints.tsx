import { motion } from "framer-motion";

const valuePoints = [
  {
    title: "AI-First",
    description: "Every solution is designed to leverage modern AI where it creates real value.",
  },
  {
    title: "Fast Delivery",
    description: "Rapid execution without sacrificing quality.",
  },
  {
    title: "Business Focused",
    description: "We solve business problems — not just deliver websites.",
  },
  {
    title: "End-to-End",
    description: "Design, development, automation, AI, software, and content under one roof.",
  },
];

const ValuePoints = () => {
  return (
    <section className="section-padding border-t border-border/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Why PXP Lab</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold mt-4">
            What makes us different
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {valuePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border/40 bg-card/30 hover:bg-card/50 transition-colors"
            >
              <h3 className="font-heading text-lg font-medium mb-3">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePoints;
