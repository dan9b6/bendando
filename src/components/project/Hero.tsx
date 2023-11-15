"use client";

import Bounded from "../Bounded";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button";

type HeroTypes = {
  type: string;
  title: string;
  children: React.ReactNode;
  button: {
    text: string;
    href: string;
  };
  img: {
    src: string;
    alt: string;
  };
};

export default function Hero({
  type,
  title,
  button,
  img,
  children,
}: HeroTypes) {
  return (
    <Bounded className="overflow-hidden py-18 sm:py-32">
      <div className="mx-auto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            className="lg:max-w-xxl self-center"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-300">
              {type}
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="my-6 text-lg leading-2 text-gray-100">{children}</p>
            <Button as="a" href="/">
              {button.text}
            </Button>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0 self-center"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </Bounded>
  );
}
