"use client";

import SwiperTile from "./SwiperTile";
import { motion } from "framer-motion";

type SwiperProps = {
  data: {
    href: string;
    img: {
      src: string;
      alt: string;
    };
    title: string;
    subtitle: string;
    description: string;
  }[];
};

const Swiper = ({ data, ...restProps }: SwiperProps) => {
  return (
    <motion.div
      className="relative"
      {...restProps}
      initial={{ opacity: 0, y: 250 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex gap-4 overflow-x-auto w-full swiper">
        {data.map((el, index) => {
          if (index === 0) {
            return <SwiperTile key={index} data={el} addClass="ms-4" />;
          } else if (index === data.length - 1) {
            return <SwiperTile key={index} data={el} addClass="me-4" />;
          } else {
            return <SwiperTile key={index} data={el} />;
          }
        })}
      </div>
    </motion.div>
  );
};

export default Swiper;
