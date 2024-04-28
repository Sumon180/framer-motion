"use client";

import Example2 from "@/components/Example2";
import Example from "@/components/example";
import Example3 from "@/components/example3";
import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "javascript" },
  { id: 4, name: "typescript" },
];

const variants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const variants2 = {
  open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000 } } },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000, velocity: -1000 } },
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimate, setIsAnimate] = useState(true);

  return (
    <>
      <motion.nav className="bg-white text-black">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white m-3 px-4 py-2 rounded-md"
        >
          {isOpen ? "Close" : "Open"}
        </button>
        <motion.ul
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={`absolute bg-white duration-500 w-full px-3 ${
            isOpen ? "max-h-96" : "max-h-0 overflow-hidden"
          }`}
        >
          {data.map((item) => (
            <motion.li
              variants={variants2}
              key={item.id}
              className="hover:bg-red-300 duration-300 py-3 text-xl"
            >
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
      <div>
        <button
          onClick={() => {
            setIsAnimate(false);
            setTimeout(() => {
              setIsAnimate(true);
            }, 500);
          }}
          className="bg-white text-black m-3 px-4 py-2 rounded-md"
        >
          Animate
        </button>
        <div className="flex items-center gap-5 w-full mt-5">
          <Example />
          <Example2 isAnimate={isAnimate} />
        </div>
        <Example3 />
      </div>
    </>
  );
}
