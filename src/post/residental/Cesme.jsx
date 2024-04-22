import React, { useCallback, useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { cesme } from "../../../images";
import cesmeImg from "../../assets/PROJECTS-GALLERY/2-CONTEMPORARY-PROJECTS-(RESIDENTAL)/INDIVIDUAL VILLA-ÇEŞME İZMİR/1.jpg";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const images = cesme.map((post) => ({
  original: post.img,
  thumbnail: post.img,
}));
const galleryStyles = {
  gallery: {
    maxHeight: "400px", // Galeri yüksekliğini istediğiniz değere ayarlayabilirsiniz
  },
};

const Cesme = () => {
  const intervalRef = useRef(null);
  const gliderRef = useRef(null);
  const INTERVAL = 3000;
  const MAX = cesme.length - 1;

  const callbackRef = useCallback((glider) => {
    if (glider) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          let index = glider.page;
          if (index < MAX) {
            index += 1;
          } else {
            index = 0;
          }
          glider.scrollItem(index, false);
        }, INTERVAL);
      }
    }
  }, []);

  useEffect(
    () => () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
    []
  );

  const goForward = () => {
    if (gliderRef.current) {
      let index = gliderRef.current.page;
      if (index < MAX) {
        index += 1;
      } else {
        index = 0;
      }
      gliderRef.current.scrollItem(index, false);
    }
  };

  const goBackward = () => {
    if (gliderRef.current) {
      let index = gliderRef.current.page;
      if (index > 0) {
        index -= 1;
      } else {
        index = MAX;
      }
      gliderRef.current.scrollItem(index, false);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <div>
          <img
            src={cesmeImg}
            alt=""
            className="max-h-screen h-screen w-full object-cover overflow-hidden relative"
          />
          <div className="absolute w-full h-full bg-black/40 left-0 top-0"></div>
        </div>
        <h1 className="text-3xl p-3 text-center font-serif max-w-full w-full mx-auto lg:text-5xl md:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-sixth font-semibold">
          INDIVIDUAL HOUSE - ÇEŞME İZMİR
        </h1>
      </div>
      <div className="xl:mt-32 mt-8">
        <h1 className="xl:text-5xl lg:text-4xl text-2xl font-sixth font-semibold text-center">
          GALLERY
        </h1>
      </div>
      <div className="gallery py-16 xl:mt-8 -mt-4">
        <div className="max-w-[80%] w-full mx-auto relative">
          <FaArrowLeftLong className="glider-arrow left absolute top-1/2 -translate-y-1/2 cursor-pointer z-50 -left-8 text-3xl font-thin" onClick={goBackward} />

          <Glider
            className="glider-container"
            draggable
            hasDots
            slidesToShow={1}
            scrollLock
            ref={(glider) => {
              gliderRef.current = glider;
            }}
            settings={{
              autoplay: true,
              autoplaySpeed: INTERVAL,
            }}
          >
            {cesme.map((post) => (
              <div>
                <img src={post.img} alt="" />
              </div>
            ))}
          </Glider>
          <FaArrowRightLong className="glider-arrow right absolute top-1/2 -translate-y-1/2 cursor-pointer z-50 -right-8 text-3xl font-thin" onClick={goForward} />
        </div>
      </div>
    </div>
  );
};

export default Cesme;
