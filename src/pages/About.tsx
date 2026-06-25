import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

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
              Building Practical AI for the Real World
            </h1>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>Technology is evolving rapidly, but adopting AI shouldn't be complicated.</p>
              <p>That's why we built PXP Lab.</p>
              <p>
                PXP Lab is an AI studio that helps businesses build modern websites, automate workflows, create AI-powered marketing content, develop custom software, and implement practical AI solutions that solve real business problems.
              </p>
              <p>
                We believe AI should be useful, accessible, and built around outcomes—not hype.
              </p>
              <p>
                Every solution we create is designed to save time, improve efficiency, and help businesses grow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ignition Section */}
      <section className="py-16 border-t border-border/40 bg-card/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <a
              href="https://www.ignitioninaiera.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 mb-8 group w-fit block"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-black flex items-center justify-center transition-transform group-hover:scale-105">
                <img src="/ignition-logo.jpg" alt="Ignition in AI Era" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Powered by</p>
                <h2 className="font-heading text-2xl font-semibold group-hover:underline">Ignition in AI Era</h2>
              </div>
            </a>

            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>PXP Lab is proudly powered by Ignition in AI Era.</p>
              <p>
                Ignition in AI Era is a growing community of 3,000+ builders, founders, students, creators, developers, and AI enthusiasts who are passionate about learning, building, and sharing knowledge around artificial intelligence and innovation.
              </p>
              <p>
                The community regularly hosts webinars, workshops, hackathons, founder talks, meetups, and other learning experiences. It also publishes free research through IgnitePedia, premium deep dives through IgnitePedia Exclusive, and develops resources and tools for builders.
              </p>
              <p className="text-foreground font-medium">
                PXP Lab is where those ideas become reality.
              </p>
              <p>
                While Ignition in AI Era focuses on education, community, and innovation, PXP Lab transforms that knowledge into practical AI solutions for businesses.
              </p>
              <p>
                Together, they connect learning with execution—helping people understand AI and helping businesses use it to create real impact.
              </p>
            </div>
          </motion.div>
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
            <span className="text-xs text-muted-foreground uppercase tracking-wider">How We Work</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold mt-4">
              Our Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "We take the time to understand your business, your challenges, and your goals before recommending a solution.",
              },
              {
                step: "02",
                title: "Build",
                desc: "From websites and AI automation to software and digital experiences, we build solutions that are modern, scalable, and designed for long-term value.",
              },
              {
                step: "03",
                title: "Grow",
                desc: "After launch, we continue to support, improve, and optimize your digital systems so they grow alongside your business.",
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
                <h3 className="font-heading text-xl font-medium mb-3">{item.step} — {item.title}</h3>
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
