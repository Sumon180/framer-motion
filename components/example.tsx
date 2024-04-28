import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const variants2 = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Example = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="stagging"
    >
      <motion.div variants={variants2}>1</motion.div>
      <motion.div variants={variants2}>2</motion.div>
      <motion.div variants={variants2}>3</motion.div>
      <motion.div variants={variants2}>4</motion.div>
      <motion.div variants={variants2}>5</motion.div>
    </motion.div>
  );
};

export default Example;
