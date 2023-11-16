import Bounded from "../Bounded";
import { motion } from "framer-motion";

type FeaturesProps = {
  children: React.ReactNode;
  features: {
    name: string;
    description: string;
    icon: React.ElementType;
  }[];
};

export default function Features({ features, children }: FeaturesProps) {
  return (
    <Bounded className="bg-white">
      <motion.div
        className="mx-auto max-w-2xl lg:text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        <span className="text-base font-semibold leading-7 text-indigo-600">
          Lets take a look
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Key feature of this project
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{children}</p>
      </motion.div>
      <div className="mx-auto w-full">
        <dl className="grid my-12 w-full grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="relative pl-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <motion.div
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                  viewport={{ once: true }}
                  initial={{ scale: 0 }}
                  whileInView={{ rotate: 180, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.15,
                  }}
                >
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </motion.div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </Bounded>
  );
}
