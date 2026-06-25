import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ValuePoints from "@/components/home/ValuePoints";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { StackedImageHover } from "@/components/ui/hover-deck-fx";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <ValuePoints />

      {/* CTA Section */}
      <section className="section-padding border-t border-border/40 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold mb-4">
                Ready to start?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Tell us about your project and we'll help you generate more revenue and scale efficiently with modern AI solutions.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mt-12 lg:mt-0 w-full flex justify-center lg:justify-end origin-center lg:origin-right"
            >
              <StackedImageHover
                className="!w-[280px] !h-[115px] sm:!w-[400px] sm:!h-[180px] lg:!w-[500px] lg:!h-[220px]"
                images={[
                  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
