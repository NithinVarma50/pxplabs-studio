import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ValuePoints from "@/components/home/ValuePoints";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <ValuePoints />
    </Layout>
  );
};

export default Index;
