"use client";

import Bounded from "../Bounded";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const bg = {
  src: "/images/pho.avif",
  alt: "",
};

type FeatureProps = {
  data: {
    title: string;
    description: string;
  }[];
};

const Features = ({ data }: FeatureProps) => {
  return (
    <Bounded img={bg}>
      <motion.div
        className="mx-auto max-w-2xl lg:mx-0"
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Why Choose{" "}
          <span className="underline underline-offset-2 decoration-indigo-400">
            Bendando
          </span>{" "}
          for Your Website Development?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Choosing the right partner for your digital journey is crucial, and
          here{"'"}s why you should entrust your vision to us:
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8 py-12 text-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, staggerChildren: 0.25 }}
      >
        {data.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            delay={index * 0.05}
          />
        ))}
      </motion.div>
    </Bounded>
  );
};

export default Features;
