import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import simplicity from "../assets/home/simplicity.jpg";
import ffe from "../assets/home/ffe.jpg";
import cesme from "../assets/home/cesme.jpg";
import concept from "../assets/home/concept.jpg";
import functionwith from "../assets/home/functionwith.jpg";
import iconic from "../assets/home/iconic.jpg";
import warmth from "../assets/home/warmth.jpg";
import lobby from "../assets/home/lobby.jpg";
import dynamic from "../assets/home/dynamic.jpg";
import elegance from "../assets/home/elegance.jpg";
import unique from "../assets/home/unique.jpg";
import quiet from "../assets/home/quiet.jpg";
import video from "../assets/video.mp4";
import { motion } from "framer-motion";
import { homePage } from "../../images";

const items = [
  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={simplicity} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[2rem] lg:pl-[30rem] xl:pl-[10rem] pl-[22rem] 2xl:pl-[22rem] pt-8 text-center w-full md:block hidden">
        SIMPLICITY <span className="font-eighth">With</span> NEUTRALS
      </h1>
      <h1 className="text-center text-2xl block md:hidden">
        SIMPLICITY <span className="font-eighth">With</span> NEUTRALS
      </h1>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={ffe} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[2rem] lg:pl-[40rem] xl:pl-[18rem] pl-[29rem] 2xl:pl-[29rem] pt-8 text-center w-full md:block hidden">
        FF&E SERVICES
      </h1>
      <h1 className="text-center text-2xl block md:hidden">FF&E SERVICES</h1>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={cesme} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[4rem] lg:pl-[24rem] xl:pl-[4rem] pl-[16rem] 2xl:pl-[16rem] pt-8 text-center w-full md:block hidden">
        CONTEMPORARY PRIVATE VILLA
      </h1>
      <h2 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[4rem] lg:pl-[50rem] xl:pl-[34rem] pl-[16rem] 2xl:pl-[47rem] pt-8 text-center w-full font-eighth mt-1 md:block hidden">
        Çeşme
      </h2>

      <h1 className="text-center max-w-full text-2xl block md:hidden">
        CONTEMPORARY PRIVATE VILLA
      </h1>
      <h2 className="text-center font-eighth text-xl md:hidden block">Çeşme</h2>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={concept} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[4rem] lg:pl-[24rem] xl:pl-[4rem] pl-[16rem] 2xl:pl-[16rem] pt-8 text-center w-full md:block hidden">
        CONCEPT & FURNITURE DESIGN
      </h1>
      <h1 className="text-center text-2xl md:hidden block">
        CONCEPT & FURNITURE DESIGN
      </h1>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={functionwith} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[7rem] pl-[21rem] lg:pl-[30rem] xl:pl-[4rem] 2xl:pl-[21rem] pt-8 text-center w-full md:block hidden">
        FUNCTION <span className="font-eighth">With</span> AESTHETIC
      </h1>
      <h1 className="text-center text-2xl md:hidden block">
        FUNCTION <span className="font-eighth">With</span> AESTHETIC
      </h1>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={iconic} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[6rem] pl-[26rem] lg:pl-[44rem] xl:pl-[18rem] 2xl:pl-[26rem] pt-8 text-center w-full md:block hidden">
        ICONIC HOMES
      </h1>
      <h2 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[6rem] pl-[26rem] lg:pl-[44rem] xl:pl-[18rem] 2xl:pl-[26rem] pt-8 text-center w-full font-eighth mt-1 md:block hidden">
        Elevating Experience
      </h2>

      <h1 className="text-center text-2xl md:hidden block">ICONIC HOMES</h1>
      <h2 className="text-center text-xl font-eighth md:hidden block">
        Elevating Experience
      </h2>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={warmth} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[6rem] pl-96 lg:pl-[36rem] xl:pl-[16rem]  2xl:pl-96 pt-8 text-center w-full md:block hidden">
        WARMTH & COMFORT
      </h1>
      <h2 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[6rem] pl-96 lg:pl-[36rem] xl:pl-[16rem]  pt-8 2xl:pl-96 text-center w-full font-eighth mt-1 md:block hidden">
        In the Living Areas
      </h2>

      <h1 className="text-center text-2xl md:hidden block">WARMTH & COMFORT</h1>
      <h2 className="md:hidden block text-xl text-center font-eighth">
        In the Living Areas
      </h2>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={lobby} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[4rem] pl-[22rem] lg:pl-[30rem] xl:pl-[10rem]  2xl:pl-[22rem] pt-8 text-center w-full md:block hidden">
        WELCOMING LOBBY AREAS
      </h1>
      <h1 className="text-center text-2xl md:hidden block">
        WELCOMING LOBBY AREAS
      </h1>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={dynamic} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[2rem] pl-[14rem] lg:pl-[20rem] xl:pl-[0rem] 2xl:pl-[14rem] pt-8 text-center w-full md:block hidden">
        DYNAMIC OFFICES & WORKSPACES
      </h1>
      <h1 className="text-center text-xl md:hidden block">
        DYNAMIC OFFICES & WORKSPACES
      </h1>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={elegance} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[6rem] pl-[29rem] lg:pl-[34rem] xl:pl-[16rem] 2xl:pl-[29rem] pt-8 text-center w-full md:block hidden">
        TIMELESS ELEGANCE
      </h1>
      <h1 className="text-center text-2xl md:hidden block">
        TIMELESS ELEGANCE
      </h1>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={unique} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 150 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[8rem] pl-[29rem] lg:pl-[36rem] xl:pl-[16rem] 2xl:pl-[29rem] pt-8 text-center w-full md:block hidden">
        & UNIQUE TOUCHES
      </h1>
      <h1 className="text-center text-2xl md:hidden block">& UNIQUE TOUCHES</h1>
    </motion.div>
  </div>,

  <div className="h-screen max-w-full w-full font-seventh">
    <div className="absolute top-0 left-0 w-full h-full overlay bg-black/30"></div>
    <img src={quiet} className="w-full h-screen object-cover" alt="" />
    <motion.div
      initial={{ opacity: 0, scale: 1, x: 200 }}
      whileInView={{ opacity: 1, scale: 1, x: 75 }}
      transition={{ duration: 1.2 }}
      className="absolute lg:bottom-28 lg:right-72 lg:translate-y-16 xl:translate-x-40 lg:translate-x-24 xl:left-1/2 lg:left-0  lg:top-2/3 top-1/2  left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-white text-center w-full"
    >
      <h1 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[0rem] pl-96 lg:pl-[32rem] xl:pl-[16rem] 2xl:pl-96 pt-8 text-center w-full md:block hidden">
        QUIET LUXURY
      </h1>
      <h2 className="md:text-4xl lg:text-4xl text-3xl font-normal xl:text-left md:pl-[0rem] pl-96 lg:pl-[42rem] xl:pl-[28rem] 2xl:pl-96 pt-8 text-center w-full font-eighth mt-1 md:block hidden">
        Style
      </h2>

      <h1 className="text-center text-2xl md:hidden block pr-36">
        QUIET LUXURY
      </h1>

      <h2 className="text-center text-xl md:hidden block font-eighth pr-36">
        Style
      </h2>
    </motion.div>
  </div>,
];

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: -500,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Home() {
  const [mainIndex, setMainIndex] = useState(0);

  const vidRef = useRef();

  const handlePlay = () => {
    const playPromise = vidRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Oynatma başarılı oldu
        })
        .catch((error) => {
          // Oynatma başarısız oldu
          console.error("Video oynatılamadı:", error);
        });
    }
  };
 
  useEffect(() => {
    const video = vidRef.current;

    // Kullanıcı web sitesini ilk kez ziyaret ettiğinde, sessiz olarak otomatik olarak oynat
    const handleFirstPlay = () => {
      video.play().catch(error => {
        console.error("Video oynatılamadı:", error);
      });
    };

    // Tarayıcının politikasına uygun olarak, ilk oynatmayı tetikleyecek bir kullanıcı etkileşimi gerekebilir
    window.addEventListener("click", handleFirstPlay);

    return () => {
      window.removeEventListener("click", handleFirstPlay);
    };
  }, []);

  return (
    <div className="font-primarys">
      <div className="max-w-full w-full h-screen relative font-primary carousel">
        <AliceCarousel
          activeIndex={mainIndex}
          disableDotsControls
          disableButtonsControls
          autoPlay
          autoPlayInterval={3000}
          animationDuration={2000}
          animationType="fadeout"
          infinite
          items={items}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1, y: 150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="lg:px-72 px-8 w-full mt-24 flex flex-col justify-center items-center text-center font-fifth"
      >
        <p className="lg:text-2xl leading-8 tracking-wide">
          The passion for design is rooted in a desire to create stylish and
          elegant spaces that reflect the clients' lifestyles, needs and
          preferences, as well as their unique stories
        </p>
        <Link
          className="mt-8 border border-gray-600 border-black p-2 text-black text-base hover:text-white hover:bg-black transition-all duration-200"
          to={"/projects"}
        >
          EXPLORE PROJECTS
        </Link>
      </motion.div>

      <div
        className="bg-gray-100 mt-36 lg:px-16 2xl:py-0 py-16"
      >
        <h1 className="text-center font-semibold font-fifth text-xl py-4">
          OUR EXPERTISE
        </h1>
        <div className="w-full grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-24 justify-items-center items-center lg:px-0 px-24 font-primary text-black py-16">
          {homePage.map((post) => (
            <div key={post.id} className="flex flex-wrap">
              <div className="lg:w-[550px] lg:h-[320px] w-[380px] h-[220px] relative">
                <Link to={post.link}>
                  <div className="w-full h-full absolute transition-opacity duration-500">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-full"
                      onMouseOver={(e) => {
                        e.currentTarget.classList.add("opacity-0");
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.classList.remove("opacity-0");
                      }}
                    />
                    <img
                      src={post.image2}
                      alt=""
                      className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500"
                      onMouseOver={(e) => {
                        e.currentTarget.classList.add("opacity-100");
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.classList.remove("opacity-100");
                      }}
                    />
                  </div>
                  <div className="xl:mt-[20.5rem] lg:mt-[20rem] mt-[14rem] relative">
                    <h1 className="text-xl font-normal">
                      {post.category}
                    </h1>
                    <h1 className="text-sm">{post.name}</h1>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1, y: 250 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex lg:flex-row flex-col items-center justify-between gap-x-8 bg-gray-100 w-full mt-80 font-fifth xl:px-0 px-4"
      >
        <div className="lg:w-[40%] xl:w-[30%] w-full lg:block hidden relative">
          <video
            ref={vidRef}
            src={video}
            autoPlay
            playsInline
            
            loop
            className="w-full"
          />
        </div>
        <div className="block lg:hidden relative">
          <video
            autoPlay
            playsInline
            
            className="w-full"
            loop // Videoyu sessize almak için, tarayıcılar otomatik oynatmayı genellikle sessiz videolar için engellemez
            ref={vidRef}
          >
            <source src={video} type="video/mp4" />
          </video>
          <button
            onClick={handlePlay}
            className="font-fifth text-center flex justify-center items-center w-full h-full text-7xl bottom-0 left-0 top-0 opacity-[0.01] absolute"
          >
            PLAY
          </button>
        </div>

        <motion.div
          initial="hidden"
          variants={fadeInUpAnimation}
          animate="show"
          className="flex-1 lg:w-full lg:px-0 px-0 xl:mt-0 mt-8"
        >
          <h1 className="lg:text-2xl text-xl text-black font-semibold lg:pr-24">
            VOICES OF PASSION: LIFESTYLE & UNIQUE STORIES INTO ICONIC DESIGN
          </h1>
          <div className="mt-6 lg:text-lg lg:pr-24">
            <p className=" leading-8 tracking-widest">
              Interior designer with over 7 Years of experience, designing
              customized solutions for residential and commercial projects,
              ranging from private homes to individual luxury villas that
              require specific experience.
            </p>
            <p className="mt-3 leading-8 tracking-widest">
              The passion for design is rooted in a desire to create stylish and
              elegant spaces that reflect the clients' lifestyles, needs, and
              preferences, as well as their unique stories.
            </p>
            <p className="mt-3 leading-8 tracking-widest">
              With the belief that every space has a unique soul and character,
              just like its customers, encouraging clients to express their
              vision by working collaboratively as a team to deliver from the
              concept phase to the final realization.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-36 bg-gray-100">
        <div>
          <h1 className="text-center font-semibold font-fifth text-xl py-4">
            SELECTED INSIGHTS
          </h1>
        </div>
        <div className="max-w-full w-full mx-auto p-3 flex flex-col justify-center items-center gap-8 py-7 mt-8">
          <Link
            className="-mt-8 border border-gray-600 border-black py-2 px-4 text-black text-base hover:text-white hover:bg-black transition-all duration-200"
            to={"/blog"}
          >
            LATEST NEWS
          </Link>
        </div>
      </div>
    </div>
  );
}
