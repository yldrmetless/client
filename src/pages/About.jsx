import about from "../assets/about.jpg";
import about2 from "../assets/about2.jpg";
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <div className="max-w-full w-full">
      <div className="w-full lg:h-screen relative">
        <div className="relative">
          <img src={about} alt="" />
          <div className="w-full h-full absolute top-0 left-0 bg-black/30"></div>
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-6xl font-semibold font-sixth">
          ABOUT
        </h1>
      </div>

      <div className="lg:mt-8 2xl:mt-60 mt-16 mb-16 lg:px-28 px-8 flex justify-between items-center gap-x-12 font-fifth">
        <motion.div
          initial={{ opacity: 0, scale: 1, x: -200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:flex-1 lg:text-left text-center"
        >
          <h1 className="text-center text-4xl font-semibold">ABOUT</h1>
          <p className="leading-7 tracking-wider lg:text-lg mt-6">
            Ayse Sama is the founder of Shama Concept & Design, a company that
            specializes in creating concept interiors for both residential and
            commercial spaces. With her extensive experience in the field of
            conceptual interior design, Ayse has earned a reputation as a highly
            skilled professional who consistently delivers innovative and
            visually stunning designs. She has designed homes, restaurants, and
            offices - transforming unique stories into characteristic design
            places that elevate the experience.
          </p>

          <p className="mt-6 leading-7 tracking-wider lg:text-lg">
            She describes her style as a desire of blending the unexpected with
            the familiar, producing sophisticated and one-of-a-kind spaces. To
            her, a home should reflect and communicate your individual living
            style and preferences. It should stimulate the senses and enhance
            the quality of life.
          </p>

          <p className="mt-6 leading-7 tracking-wider lg:text-lg">
            She has worked for well-known worldwide companies that have provided
            specific learning in how to mix furniture and things in an eclectic
            manner. That has also been a driving force behind the passion for
            furniture design.
          </p>

          <p className="mt-6 leading-7 tracking-wider lg:text-lg">
            After years in the design field, she leapt to launch her own brand
            to reflect a stylish spirit. She is working on several pieces from
            furniture to accessories as well as collaborations with brands. She
            has already completed residential and commercial projects in Texas
            and Frankfurt with the passion and vision of creating spaces with
            unique style.
          </p>
        </motion.div>
        <div className="flex-1 max-w-[600px] lg:block hidden">
          <motion.img
            initial={{ opacity: 0, scale: 1, x: 80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src={about2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
