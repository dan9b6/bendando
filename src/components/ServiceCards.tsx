"use client";

import Bounded from "./Bounded";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const bg = {
  src: "/images/pho.avif",
  alt: "",
};

const services = [
  {
    title: "Website Design",
    description:
      "We design responsive websites and mobile apps. We offer 3 types of web design services.",
    href: "/service/website-design",
  },
  {
    title: "Website Development",
    description:
      "We prefer modern Javascript frameworks such as Next and headless CMS systems to deliver super fast optimized websites. Ensuring fast load times improves SEO we help small businesses stand out from the competition.",
    href: "/service/web-development",
  },
  {
    title: "App Development",
    description:
      "Our network of developers have decades of experience building large scale applications. Previous clients include Microsoft, Vodaphone, the NHS, PWC. We have worked with start ups such a Qbit and Predictive Black, we have created a property management application used throughout London.",
    href: "/service/app-development",
  },
  {
    title: "Search Engine Optimization",
    description:
      "We improve your online presence by targeting your potential customers with your specific message. We use advanced tools to compare competitors and find the best opportunities in your space, for your budget. Perhaps because of our experience as website developers we consistently outperform the competition.",
    href: "/service/seo",
  },
  {
    title: "E-Commerce",
    description:
      "We recommend using Shopify for most of our small clients, its a fast modern however we can build you a complete E-Commerce solution should that be required. In addition to credit card payments we allow your customers to pay with one click, Android pay and Apple pay and even crypto currency. Never has it been easier for payments to be accepted.",
    href: "/service/e-commerce",
  },
  {
    title: "Digital Marketing",
    description:
      "PPC (pay per click) using Google Ads, combined with a Facebook and Instagram advertising campaigns can take your online presence to the next level. By targeting your customer base, monitoring success and making iterative improvements we can boost your website traffic and customer engagement.",
    href: "/service/digital-marketing",
  },
  {
    title: "CRM Management",
    description:
      "Coronavirus changed the world forever in 2020. With everyone moving online it is more vital than ever to keep in touch with your digital customers and potential clients than before. Our CRM experts can help you quickly setup and manage you company CRM to facilitate efficient communication and targeting of your most important clients and potential customers.",
    href: "/service/crm-management",
  },
  {
    title: "Data Collection",
    description:
      "We build GDPR compliant databases or integrate with your own to collect whatever information is required from your users. Recently we ran a lottery competition with Uri Gellar to win a flat. Whatever your requirements we can provide a cost effective solution.",
    href: "/service/data-collection",
  },
];

const ServiceCards = () => {
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
          Our Services
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          We understand all projects are different, and technology is changing
          all the time. We pride ourselves on being ahead of the game and
          keeping up to date with the latest software trends. Whatever your
          requirements and budget we can offer you a solution that will suit
          your needs.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8 py-12 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, staggerChildren: 0.25 }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            href={service.href}
            delay={index * 0.05}
          />
        ))}
      </motion.div>
    </Bounded>
  );
};

export default ServiceCards;
