"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "../utils/utils";

const InteractiveTiles = ({ className = "", rows = 4, cols = 10 }) => {
  const rowsArr = new Array(rows).fill(1);
  const colsArr = new Array(cols).fill(1);

  return (
    <div
      className={cn(
        "relative z-0 flex flex-col w-full h-full justify-center",
        className
      )}
    >
      {rowsArr.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="flex items-center"
        >
          {colsArr.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `white`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col-${i}-${j}`}
              className="w-9 h-9 md:w-12 md:h-12 border-2 border-white dark:border-black bg-black dark:bg-white"
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(InteractiveTiles);