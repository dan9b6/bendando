import React from "react";
import Bounded from "../Bounded";
import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  title?: string;
  children?: React.ReactNode;
  img?: {
    src: string;
    alt: string;
  };
};

const Hero = ({ title, img, children }: HeroProps) => {
  return (
    <Bounded>
      <motion.div
        className="mx-auto max-w-2xl lg:text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        <span className="text-base font-semibold leading-7 text-indigo-400">
          Service
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="my-6 text-lg leading-2 text-gray-100">{children}</p>
      </motion.div>
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        {img && (
          <Image
            src={img.src}
            alt={img.alt}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 self-center"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        )}
      </motion.div>
    </Bounded>
  );
};

export default Hero;
