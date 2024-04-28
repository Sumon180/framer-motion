import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const variants2 = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Example = ({ isAnimate }: { isAnimate: boolean }) => {
  // Array of data
  const items = ["1", "2", "3", "4", "5"];

  return (
    <motion.div
      variants={variants}
      initial={false}
      animate={isAnimate ? "show" : "hidden"}
      className="stagging"
    >
      {/* Map over the array and create motion.div for each item */}
      {items.map((item) => (
        <motion.div key={item} variants={variants2}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Example;
