import { motion } from "framer-motion";
import clsx from "clsx";

type FeatureCardProps = {
  title: string;
  description: string;
  delay: number;
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  delay,
}: FeatureCardProps) {
  return (
    <motion.div
      className={clsx(
        "p-6 lg:p-8 rounded-lg bg-indigo-100 border-white border-solid border-2 flex flex-col justify-between transition-all hover:bg-indigo-200"
      )}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay }}
    >
      <div>
        <h3 className="text-xl mb-4 leading-8 font-semibold sm:text-2xl">
          {title}
        </h3>
        <p className="mb-8">{description}</p>
      </div>
    </motion.div>
  );
}
