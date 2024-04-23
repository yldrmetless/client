import { Link } from "react-router-dom";
import hospitality from "../assets/hospitality.jpg";

import { useState } from "react";
import { motion } from "framer-motion";
import { hospitalityArr } from "../../images";


export default function Hospitality() {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <div>
      <div className="w-full lg:h-screen relative">
        <div className="relative w-full">
          <img src={hospitality} alt="" className="w-full lg:h-screen" />
          <div className="w-full h-full absolute top-0 left-0 bg-black/30"></div>
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl 2xl:text-5xl lg:text-4xl text-2xl w-full text-center font-semibold font-sixth">
          ELEGANT, UNIQUE & VIBRANT
        </h1>
      </div>

      <div className="max-w-full w-full mx-auto p-3 flex flex-col justify-center items-center gap-8 py-7">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 justify-center items-center gap-x-6">
            <Link
              to={"/projects"}
              className="lg:text-base text-xs border border-gray-600 lg:w-[200px] w-[140px] p-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center"
            >
              ALL
            </Link>
            <Link
              to={"/projects/residental"}
              className="lg:text-base text-xs border border-gray-600 lg:w-[200px] w-[140px] p-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center"
            >
              RESIDENTAL
            </Link>
            <Link
              to={"/projects/hospitality"}
              className="lg:text-base text-xs border border-gray-600 lg:w-[200px] w-[140px] p-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center"
            >
              HOSPITALITY
            </Link>
            <Link
              to={"/projects/office"}
              className="lg:text-base text-xs border border-gray-600 lg:w-[200px] w-[140px] p-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center"
            >
              OFFICE
            </Link>
            <Link
              to={"/projects/furnitureproduct"}
              className="lg:text-base text-xs border border-gray-600 lg:w-[200px] w-[140px] p-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center"
            >
              FURNITURE PRODUCT
            </Link>
            <Link
              to={"/projects/exteriorfacade"}
              className="lg:text-base text-xs border border-gray-600 lg:w-[200px] w-[140px] p-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center"
            >
              EXTERIOR FACADE
            </Link>
            <Link
              to={"/projects/ffe-services"}
              className="lg:text-base text-xs border border-gray-600lg:w-[200px] w-[140px] p-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center"
            >
              FF&E SERVICES
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-y-6 mt-8 lg:px-0 px-2">
            {hospitalityArr.map((post) => (
              <div className="w-full h-[400px] overflow-hidden rounded-sm sm:w-[480px] transition-all block group relative">
                <Link>
                  <img
                    src={post.image}
                    alt="post cover"
                    className="lg:h-[320px] h-[270px] w-full z-20 duration-300 transition-all"
                  />
                  <div className="flex flex-col justify-center gap-2 font-fifth pt-3 lg:absolute bottom-[80px] left-0 opacity-0 group-hover:opacity-100 group-hover:bottom-[80px] w-full h-[120px] bg-gradient-to-t from-black to-black/10  duration-500 px-4 py-3">
                    <p className="text-sm font-normal text-gray-100">
                      {post.category}
                    </p>
                    <p className="text-lg font-semibold -mt-1 text-white">
                      {post.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
