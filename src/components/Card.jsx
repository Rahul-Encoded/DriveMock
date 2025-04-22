import React from 'react';
import { FaFileAlt, FaDownload, FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  const colors = {
    red: "bg-red-600",
    blue: "bg-blue-600",
    green: "bg-green-600",
  };

  const tagColorClass = colors[data?.tagDetails?.tagColor];

  return (
    <>
      <motion.div 
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.1}
        dragTransition={{
          bounceDamping: 10,
          bounceStiffness: 400,
        }}
        className="relative w-60 h-72 flex-shrink-0 rounded-[50px] bg-sky-200 bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
      >
        <FaFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">{data?.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between px-5 py-3 mb-3">
            <h5>{data?.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data?.closed ? <FaWindowClose size=".77em" /> : <FaDownload size=".77em" />}
            </span>
          </div>
          {data?.tagDetails?.isOpen && (
            <div className={`tag w-full py-4 ${tagColorClass} flex items-center justify-center`}>
              <h3 className="text-sm font-semibold">{data.tagDetails.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
