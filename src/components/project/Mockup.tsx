import Bounded from "../Bounded";
import { motion } from "framer-motion";

const Mockup = () => {
  return (
    <Bounded>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        <motion.div
          className="bg-indigo-200 rounded-md min-h-[300px] w-full sm:col-span-2 md:row-span-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        ></motion.div>
        <motion.div
          className="bg-indigo-200 rounded-md min-h-[300px] w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        ></motion.div>
        <motion.div
          className="bg-indigo-200 rounded-md min-h-[300px] w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        ></motion.div>
      </div>
    </Bounded>
  );
};

export default Mockup;
