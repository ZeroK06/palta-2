import { motion, useDomEvent } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
const Image = ({ src }) => {
  const [isOpen, setisOpen] = useState(false);
  const handleOpenImage = () => {
    setisOpen(!isOpen);
  };
  const transition = {
    type: "spring",
    damping: 25,
    stiffness: 120,
    duration: 0.5,
  };
  if (typeof window != "undefined") {
    useDomEvent(useRef(window), "scroll", () => {
      if (isOpen) setisOpen(false);
    });
  }
  return (
    <div className="image__container sticky top-8 left-0" onClick={handleOpenImage}>
      <motion.div className={`containerImage ${isOpen ? "open" : ""}`}>
        <motion.img src={src} layout transition={transition} />
      </motion.div>
      <div
        className={`background ${isOpen ? "open" : ""}`}
        transition={transition}
        animate={{ opacity: isOpen ? 1 : 0 }}
      />
    </div>
  );
};

export default Image;
