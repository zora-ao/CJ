import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-[200px] overflow-hidden">
        <AnimatePresence>
            <motion.img
            key={index}
            src={images[index]}
            alt="slide"
            className="w-full h-full object-cover"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            />
        </AnimatePresence>

        {/* Left button */}
        <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
            <FaChevronLeft />
        </button>

        {/* Right button */}
        <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
            <FaChevronRight />
        </button>
        </div>
    )
}

export default ImageSlider
