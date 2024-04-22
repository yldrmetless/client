import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {  useState } from "react";
import bg1 from "../assets/architecture/1.png";
import bg2 from "../assets/architecture/2.png";
import bg3 from "../assets/architecture/3.png";
import bg4 from "../assets/architecture/4.png";
import bg5 from "../assets/architecture/5.png";

import { motion } from "framer-motion";

const items = [
  <div className="h-screen w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={bg1} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth w-full">
      <motion.h1
        initial={{ opacity: 0, scale: 1, y: -150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="lg:text-5xl md:text-3xl text-2xl font-bold text-center "
      >
        BLOG
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, y: 150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 lg:text-4xl md:text-xl text-lg"
      >
        Elevate Spaces, Elevate Lives
      </motion.p>
    </div>
  </div>,

  <div className="h-full w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={bg2} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth w-full">
      <motion.h1
        initial={{ opacity: 0, scale: 1, y: -150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="lg:text-5xl md:text-3xl text-2xl font-bold text-center "
      >
        BLOG
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, y: 150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 lg:text-4xl md:text-xl text-lg"
      >
        Designing Dreams, Creating Comfort.
      </motion.p>
    </div>
  </div>,

  <div className="h-full w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={bg3} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth w-full">
      <motion.h1
        initial={{ opacity: 0, scale: 1, y: -150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="lg:text-5xl md:text-3xl text-2xl font-bold text-center "
      >
        BLOG
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, y: 150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 lg:text-4xl md:text-xl text-lg"
      >
        Where Style Meets Functionality.
      </motion.p>
    </div>
  </div>,

  <div className="h-full w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={bg4} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth w-full">
      <motion.h1
        initial={{ opacity: 0, scale: 1, y: -150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="lg:text-5xl md:text-3xl text-2xl font-bold text-center "
      >
        BLOG
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, y: 150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 lg:text-4xl md:text-xl text-lg"
      >
        Crafting Spaces, Inspiring Stories.
      </motion.p>
    </div>
  </div>,

  <div className="h-full w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={bg5} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth w-full">
      <motion.h1
        initial={{ opacity: 0, scale: 1, y: -150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="lg:text-5xl md:text-3xl text-2xl font-bold text-center "
      >
        BLOG
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, y: 150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 lg:text-4xl md:text-xl text-lg"
      >
        Transforming Houses into Homes.
      </motion.p>
    </div>
  </div>,
];

export default function Blog() {

  const [mainIndex, setMainIndex] = useState(0);


  return (
    <div>
      <div className="max-w-full w-full h-screen relative font-primary carousel">
        <AliceCarousel
          activeIndex={mainIndex}
          disableDotsControls
          disableButtonsControls
          autoPlay
          autoPlayInterval={3000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          items={items}
        />
      </div>

      <div className="max-w-full w-full mx-auto p-3 flex flex-col justify-center items-center gap-8 py-7">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">BLOG</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              
            </div>
          </div>
      </div>
    </div>
  );
}
