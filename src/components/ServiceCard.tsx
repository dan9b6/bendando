import ArrowButton from "./ArrowButton";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  delay: number;
};

export default function ServiceCard({
  title,
  description,
  href,
  delay,
}: ServiceCardProps) {
  return (
    <motion.div
      className="p-6 lg:p-8 rounded-lg border-white border-solid border-2 flex flex-col justify-between"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay }}
    >
      <div>
        <h3 className="text-xl mb-4 leading-8 font-semibold">{title}</h3>
        <p className="mb-8">{description}</p>
      </div>
      <ArrowButton as="a" href={href} color="text-white">
        Find out more
      </ArrowButton>
    </motion.div>
  );
}
