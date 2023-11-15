"use client";

import Button from "./Button";
import ArrowButton from "./ArrowButton";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16 lg:py-18">
        <motion.div
          className="hidden sm:mb-8 sm:flex sm:justify-center"
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-100 hover:ring-gray-200">
            Announcing our latest project.{" "}
            <a href="#" className="font-semibold text-indigo-400">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            What do we do?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            We build digital solutions that propel businesses into the exciting
            world of the web. Explore our digital expertise and discover the
            limitless possibilities that await you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              as="a"
              bg="bg-indigo-600"
              color="text-white"
              hoverBg="hover:bg-indigo-500"
              href="#"
            >
              See our services
            </Button>
            <ArrowButton as="a">View our work</ArrowButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
