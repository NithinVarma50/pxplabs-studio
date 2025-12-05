import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, Phone, Mail, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  { id: "portfolio", label: "Portfolio" },
  { id: "website", label: "Website" },
  { id: "automation", label: "Automation" },
  { id: "scraping", label: "Data Scraping" },
  { id: "video", label: "Video Editing" },
  { id: "design", label: "Poster/Design" },
  { id: "multiple", label: "Multiple Services" },
];

const budgetOptions = [
  { value: "4000-10000", label: "₹4,000 – ₹10,000" },
  { value: "10000-20000", label: "₹10,000 – ₹20,000" },
  { value: "20000+", label: "₹20,000+" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    services: [] as string[],
    budget: "",
    details: "",
  });

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    if (!formData.contact.trim()) {
      toast({ title: "Please enter your email or WhatsApp number", variant: "destructive" });
      return;
    }
    if (formData.services.length === 0) {
      toast({ title: "Please select at least one service", variant: "destructive" });
      return;
    }
    if (!formData.budget) {
      toast({ title: "Please select a budget range", variant: "destructive" });
      return;
    }

    // Build WhatsApp message
    const servicesText = formData.services
      .map((s) => serviceOptions.find((opt) => opt.id === s)?.label)
      .join(", ");
    
    const budgetText = budgetOptions.find((b) => b.value === formData.budget)?.label || formData.budget;

    const message = `New Project Inquiry
Name: ${formData.name}
Contact: ${formData.contact}
Service: ${servicesText}
Budget: ${budgetText}
Details: ${formData.details || "Not provided"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919381904726&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete the message to send your inquiry.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
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
              Get a <span className="gradient-text">Quote</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 lg:p-10">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/50 border-border"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email / WhatsApp *</label>
                    <Input
                      placeholder="Your email or WhatsApp number"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="bg-muted/50 border-border"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Select Services *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <label
                          key={service.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            formData.services.includes(service.id)
                              ? "border-primary bg-primary/10"
                              : "border-border bg-muted/30 hover:bg-muted/50"
                          }`}
                        >
                          <Checkbox
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={() => handleServiceToggle(service.id)}
                          />
                          <span className="text-sm">{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Budget Range *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {budgetOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all text-center ${
                            formData.budget === option.value
                              ? "border-primary bg-primary/10"
                              : "border-border bg-muted/30 hover:bg-muted/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="budget"
                            value={option.value}
                            checked={formData.budget === option.value}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="sr-only"
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Describe Your Idea</label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="bg-muted/50 border-border min-h-[120px]"
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                  Let's Build Together
                </h2>
                <p className="text-muted-foreground">
                  Prefer to reach out directly? We're just a message away.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+919381904726"
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+91 93819 04726</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919381904726"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground text-sm">Message us directly</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/pixelprophett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-muted-foreground text-sm">@pixelprophett</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@pixelprophett.com"
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">hello@pixelprophett.com</p>
                  </div>
                </a>
              </div>

              {/* Quote */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-lg italic text-foreground mb-2">
                  "Ideas → Systems → Screens"
                </p>
                <p className="text-sm text-muted-foreground">
                  We turn your ideas into working systems that look great on every screen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
