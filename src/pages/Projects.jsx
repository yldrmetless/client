import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { useState } from "react";
import residentalImg from "../assets/residental.jpg";
import exteriorImg from "../assets/exterior.jpg";
import ffe from "../assets/ffe.jpg";
import office from "../assets/office.jpg";
import furniture from "../assets/furniture.jpg";

import { allProjects } from "../../images";

const items = [
  <div className="h-screen w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay"></div>
    <img src={residentalImg} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center">
      <h1 className="lg:text-3xl text-xl font-bold text-center font-sixth">
      INTERIOR DESIGN
      </h1>
      <p className="mt-4 lg:text-4xl font-sixth">
        Elevate Spaces, Elevate Lives
      </p>
    </div>
  </div>,

  <div className="h-full w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay"></div>
    <img src={exteriorImg} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth">
      <h1 className="lg:text-3xl text-xl font-bold text-center">
        INTERIOR DESIGNER
      </h1>
      <p className="mt-4 lg:text-4xl">Designing Dreams, Creating Comfort.</p>
    </div>
  </div>,

  <div className="h-full w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay"></div>
    <img src={ffe} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth">
      <h1 className="lg:text-3xl text-xl font-bold text-center ">
        INTERIOR DESIGN
      </h1>
      <p className="mt-4 lg:text-4xl">Where Style Meets Functionality.</p>
    </div>
  </div>,

  <div className="h-full w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay"></div>
    <img src={office} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth">
      <h1 className="lg:text-3xl text-xl font-bold text-center ">
        INTERIOR DESIGN
      </h1>
      <p className="mt-4 lg:text-4xl">Crafting Spaces, Inspiring Stories.</p>
    </div>
  </div>,

  <div className="h-full w-full">
    <div className="absolute top-0 left-0 w-full h-full overlay"></div>
    <img src={furniture} className="w-full h-screen object-cover" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center font-sixth">
      <h1 className="lg:text-3xl text-xl font-bold text-center ">
        INTERIOR DESIGN
      </h1>
      <p className="mt-4 lg:text-4xl">Transforming Houses into Homes.</p>
    </div>
  </div>,
];

export default function Projects() {

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
          {allProjects.map((post) => (
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
                  <p className="text-lg font-semibold -mt-1 text-white">{post.name}</p>
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
