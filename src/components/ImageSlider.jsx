import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const hasMultipleImages = images.length > 1;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // Start sliding only on hover
  const handleMouseEnter = () => {
    if (hasMultipleImages && !intervalRef.current) {
      intervalRef.current = setInterval(nextSlide, 2000); // change every 2s
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  if (!images.length) return null;

  return (
    <div
      className="relative w-full h-[250px] overflow-hidden rounded-t"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="slide"
          className="w-full h-full object-cover absolute top-0 left-0"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
