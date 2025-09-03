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
        <div className="relative w-full h-[250px] overflow-hidden rounded">
        <AnimatePresence>
            <motion.img
            key={index}
            src={images[index]}
            alt="slide"
            className="w-full h-full object-cover"
            
            />
        </AnimatePresence>

        <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 cursor-pointer -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
            <FaChevronLeft />
        </button>

        <button
            onClick={nextSlide}
            className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
            <FaChevronRight />
        </button>
        </div>
    )
}

export default ImageSlider
