"use client";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import Bounded from "./Bounded";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    name: "Expertise",
    description:
      "Our team brings a wealth of expertise across various digital domains, from web development and design to digital marketing and e-commerce solutions. We stay ahead of the curve, continuously refining our skills to keep your brand ahead in the digital race.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Collaboration",
    description:
      "Collaboration is at the heart of our approach. We work closely with our clients, fostering a partnership that goes beyond a typical client-agency relationship. Your success is our success, and we're dedicated to achieving remarkable results together.",
    icon: LockClosedIcon,
  },
  {
    name: "Innovation",
    description:
      "In a digital landscape that is constantly evolving, innovation is not just a buzzword for us; it's a way of life. We embrace new technologies, emerging trends, and creative strategies to ensure your brand stays ahead and captivates your audience.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <Bounded className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            className="lg:max-w-xxl"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-300">
              Who We Are
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About us at Bendando
            </p>
            <p className="mt-6 text-lg leading-2 text-gray-100">
              We are more than just a service provider; we are your strategic
              partner in navigating the digital age. We are a collective of
              passionate individuals with a shared commitment to excellence.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-100 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-indigo-300">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-300"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Image
              src="/images/screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 self-center"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </Bounded>
  );
}
