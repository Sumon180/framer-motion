import { motion } from "framer-motion";
import React from "react";

const articles = [
  {
    id: 1,
    title: "Greate times",
    expcerpt: "Await you",
  },
  {
    id: 2,
    title: "Greate times",
    expcerpt: "Await you",
  },
  {
    id: 3,
    title: "Greate times",
    expcerpt: "Await you",
  },
  {
    id: 4,
    title: "Greate times",
    expcerpt: "Await you",
  },
  {
    id: 5,
    title: "Greate times",
    expcerpt: "Await you",
  },
  {
    id: 6,
    title: "Greate times",
    expcerpt: "Await you",
  },
];

const example3 = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 w-full mt-5 max-w-xl mx-auto">
        {articles.map((article, i) => {
          return (
            <motion.div
              key={article.id}
              className="border bg-red-300 p-10 rounded-md"
              initial={{ opacity: 0, translateX: 50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <h1>{article.title}</h1>
              <p>{article.expcerpt}</p>
            </motion.div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default example3;
